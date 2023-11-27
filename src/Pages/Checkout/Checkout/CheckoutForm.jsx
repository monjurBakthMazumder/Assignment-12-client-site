import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import UseAuth from "../../../Hock/UseAuth";
import Container from "../../../Component/Ui/Container";
import { useParams } from "react-router-dom";
import useGetBiodataDetails from "../../../Hock/useGetBiodataDetails";
import useGetUserBioData from "../../../Hock/useGetUserBiodata";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const id = useParams();
  const { info } = useGetBiodataDetails(id);
  const BioDataInfo = info;
  const userInfo = useGetUserBioData();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: 500 }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        console.log(transactionId);

        // now save the payment in the database

        e.preventDefault();
        const paymentInfo = {
          transactionId:paymentIntent.id,
          bioData_Id: BioDataInfo?._id,
          bioId: BioDataInfo?.bioData_id,
          bioName: BioDataInfo?.name,
          bioEmail: BioDataInfo?.email,
          bioMobile: BioDataInfo?.mobile,
          selfBioId: userInfo?.bioData_id,
          selfEmail: userInfo?.email,
          status: "Pending",
          price: 500,
        };
        axiosSecure.post(`/payments`, paymentInfo).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Payment successful!!",
              text: "Tk 500 has been successfully paid",
              icon: "success",
            });
          }
        });
      }
    }
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto border-2 rounded border-pink-400 px-5 sm:px-10 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Payment</h1>
        <h1 className="text-sm md:text-base font-light text-center mt-2 mb-10 italic text-pink-700">
          Payment of Tk 500 to get contact information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="Biodata id">
                Biodata id
                <input
                  disabled
                  readOnly
                  value={BioDataInfo?.bioData_id}
                  placeholder="Biodata id"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="Self biodata id">
                Self Biodata id
                <input
                  disabled
                  readOnly
                  value={userInfo?.bioData_id}
                  placeholder="Self biodata id"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="Your Email">
                Your Email
                <input
                  disabled
                  readOnly
                  value={userInfo?.email}
                  placeholder="Your Email"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="Amount">
                Amount
                <input
                  disabled
                  readOnly
                  value={500}
                  placeholder="Your Email"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
          </div>
          <label htmlFor="Payment">
            Payment
            <CardElement
              placeholder="Payment"
              className="py-3 px-4 block w-full border border-pink-500 rounded-md text-sm focus:border-pink-700 focus:ring-pink-900 outline-none mt-2"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#000000",
                    "::placeholder": {
                      color: "#808080",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </label>

          <p className="text-red-600">{error}</p>
          <div className="text-center mt-5">
            <button
              type="submit"
              disabled={!stripe || !clientSecret}
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Payment
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CheckoutForm;
