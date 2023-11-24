import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Hock/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialSingIn = () => {
  const { singInWithGoogle, singInWithGithub } = UseAuth();
  const navigate = useNavigate();
  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        navigate(from, { replace: true });
        Swal.fire({
          title: "LogIn",
          text: "Login successfully",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!!",
          text: "Something went wrong",
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleSocialLogin(singInWithGoogle)}
          type="button"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-pink-500 font-medium bg-white text-pink-600 shadow-sm align-middle hover:bg-pink-500 hover:text-white"
        >
          <FcGoogle className="text-3xl"/> Google
        </button>
        <button
          onClick={() => handleSocialLogin(singInWithGithub)}
          type="button"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-pink-500 font-medium bg-white text-pink-600 shadow-sm align-middle hover:bg-pink-500 hover:text-white"
        >
          <FaGithub className="text-3xl"/> Github
        </button>
      </div>
      <div className="flex items-center my-5">
        <div className="bg-pink-600 h-[2px] w-full"></div>
        <h1 className="text-xl">OR</h1>
        <div className="bg-pink-600 h-[2px] w-full"></div>
      </div>
    </div>
  );
};

export default SocialSingIn;
