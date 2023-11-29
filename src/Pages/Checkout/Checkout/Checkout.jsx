import Container from "../../../Component/Ui/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>MingleHeart | Payment</title>
      </Helmet>
      <Container>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </Container>
    </>
  );
};

export default Checkout;
