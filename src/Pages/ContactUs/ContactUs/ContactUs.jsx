import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Container from "../../../Component/Ui/Container";

const ContactUs = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = async () => {
      reset();
      Swal.fire({
        title: "Thank you!!",
        text: "We will contact with you as soon as possible",
        icon: "success",
      });
    };
    return (
        <Container>
          <div className=" xl:px-8 my-10 md:my-20 border-2 rounded border-pink-400 px-5 sm:px-10 py-10 ">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Contact Us
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
                <div className="w-full flex-1">
                  <label htmlFor="firstName">
                    First name
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      placeholder="First name"
                      className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                    />
                  </label>
                  <p className="text-xs text-red-600 mt-1">
                    {errors.firstName?.message}
                  </p>
                </div>
                <div className="w-full flex-1">
                  <label htmlFor="photo">
                    Last name
                    <input
                      {...register("photo", {
                        required: "Last name is required",
                      })}
                      placeholder="Last name"
                      className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                    />
                  </label>
                  <p className="text-xs text-red-600 mt-1">
                    {errors.photo?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
                <div className="w-full flex-1">
                  <label htmlFor="phone">
                    Phone Number
                    <input
                      type="number"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                      placeholder="Phone Number"
                      className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                    />
                  </label>
                  <p className="text-xs text-red-600 mt-1">
                    {errors.phone?.message}
                  </p>
                </div>
                <div className="w-full flex-1">
                  <label htmlFor="email">
                    Email
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Email"
                      className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                    />
                  </label>
                  <p className="text-xs text-red-600 mt-1">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <label htmlFor="message">
                    Message
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2 resize-none h-40"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </label>
                  <p className="text-xs text-red-600 mt-1">
                    {errors.message?.message}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send
              </button>
            </form>
          </div>
        </Container>
    );
};

export default ContactUs;