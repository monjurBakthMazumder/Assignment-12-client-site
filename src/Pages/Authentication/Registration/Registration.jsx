import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import UseAuth from "../../../Hock/UseAuth";
import { updateProfile } from "firebase/auth";
import axios from "axios";
const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, setUser } = UseAuth();

  const loc = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async(data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
     // image upload to imgbb and then get an url
     const imageFile = { image: data.photo[0] }
     const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imageFile, {
         headers: {
             'content-type': 'multipart/form-data'
         }
     });
    const photo = res.data.data.display_url
    setError("");
    //create user
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Created account!!",
          text: "Create account successfully",
          icon: "success",
        });
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        setUser({
          displayName: name,
          photoURL: photo,
          email: email,
        });
        navigate(loc.state ? loc.state : "/");
      })
      .catch(() => {
        setError("Email already registered");
      });
  };
  return (
    <>
      <Helmet>
        <title>MingleHeart | Registration</title>
      </Helmet>
      <div className="px-2">
        <div className="max-w-lg mx-auto my-10 md:my-20 border-2 rounded border-pink-400 p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Registration
          </h1>
          <p className="text-sm text-red-600 mb-5 text-center">
            {error ? error : ""}
          </p>
          <SocialSingIn />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              Name
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
              />
            </label>
            <p className="text-xs text-red-600 mb-5 mt-1">
              {errors.name?.message}
            </p>
            <label htmlFor="photo">
              Photo
              <input
                {...register("photo", { required: "Photo is required" })}
                placeholder="Photo "
                type="file"
                className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
              />
            </label>
            <p className="text-xs text-red-600 mb-5 mt-1">
              {errors.photo?.message}
            </p>
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
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message:
                        "Your password must be one uppercase, special characters and 6 character longer",
                    },
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
              Sing up
            </button>
            <p className="text-xs text-center mt-5">
              Already have account? please{" "}
              <Link to={"/login"} className="text-pink-800 underline font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
