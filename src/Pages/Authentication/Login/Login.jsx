import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
import Swal from "sweetalert2";
import UseAuth from "../../../Hock/UseAuth";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = UseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loc = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setError("");
    // login user
    loginUser(email, password)
      .then(() => {
        navigate(loc.state ? loc.state : "/");
        Swal.fire({
          title: "LogIn",
          text: "Login successfully",
          icon: "success",
        });
      })
      .catch(() => {
        setError("Email or password don't match");
      });
  };
  return (
    <>
      <Helmet>
        <title>MingleHeart | Login</title>
      </Helmet>
      <div className="px-2">
        <div className="max-w-lg mx-auto my-10 md:my-20 border-2 rounded border-pink-400 p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Login
          </h1>
          <p className="text-sm text-red-600 mb-5 text-center">
            {error ? error : ""}
          </p>
          <SocialSingIn />
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-xs text-red-600 mb-5 mt-1">
              {errors.email?.message}
            </p>
            <div className="relative">
              <label htmlFor="password">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  className="py-3 pl-4 pr-12 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-10 right-4 cursor-pointer text-3xl text-pink-600"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <p className="text-xs text-red-600 mb-5 mt-1">
              {errors.password?.message}
            </p>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sing in
            </button>
            <p className="text-xs text-center mt-5">
              New Here? please{" "}
              <Link
                to={"/registration"}
                className="text-pink-800 underline font-bold"
              >
                Registration
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
