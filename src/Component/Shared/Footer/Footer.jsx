import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-pink-900 border-t border-white/[.5] pt-10 pb-1 text-white">
      <div className="flex justify-center items-center gap-2">
        <img src="/logo.png" alt="" className="h-12" />
        <h1 className="text-3xl md:text-4xl underline font-bold text-center">
          MingleHeart
        </h1>
      </div>
      <p className="font-light text-center px-[5%] md:px-[10%] lg:px-[15%] my-5">
        123 Main Street, Dhaka, Bangladesh
      </p>
      <div className="flex justify-center items-center gap-2 text-3xl pb-10">
        <AiFillFacebook className="text-3xl cursor-pointer" />
        <AiFillInstagram className="text-3xl cursor-pointer" />
        <AiFillTwitterSquare className="text-3xl cursor-pointer" />
        <AiFillLinkedin className="text-3xl cursor-pointer" />
      </div>
      <hr />
      <p className="font-light text-center px-[5%] md:px-[10%] lg:px-[15%] my-5">
        &copy; 2023 MingleHeart ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
