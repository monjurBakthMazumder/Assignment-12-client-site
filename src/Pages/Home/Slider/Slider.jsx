import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../assets/slider/1.jpg";
import img2 from "../../../assets/slider/2.jpg";
import img3 from "../../../assets/slider/3.jpg";
import "./Slider.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import TypeWriter from "../../../Component/Ui/TypeWriter/TypeWriter";
// import TypeWriter from "../Ui/TypeWriter/TypeWriter";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mb-5 md:mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img src={img1} alt="" className="w-full h-full" />
            <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white bg-black bg-opacity-50 px-[5%]">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                  <TypeWriter
                    text={"Discover Love's Journey on MingleHeart's Pathway."}
                  />
                </h1>
                <p className="my-1 sm:my-5 text-xs sm:text-lg">
                  Discover your life partner on our online platform, where
                  meaningful connections blossom into lasting relationships.
                  Join the journey to love.
                </p>
                <Link
                  to={"/biodatas"}
                  className="flex justify-center items-center"
                >
                  <button className="bg-pink-600 border border-pink-600 hover:border-white hover:bg-transparent px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                    View all Biodatas <AiOutlineArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src={img2} alt="" className="w-full h-full" />
            <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white bg-black bg-opacity-50 px-[5%]">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                  <TypeWriter
                    text={"Discover Love's Journey on MingleHeart's Pathway."}
                  />
                </h1>
                <p className="my-1 sm:my-5 text-xs sm:text-lg">
                  Discover your life partner on our online platform, where
                  meaningful connections blossom into lasting relationships.
                  Join the journey to love.
                </p>
                <Link
                  to={"/biodatas"}
                  className="flex justify-center items-center"
                >
                  <button className="bg-pink-600 border border-pink-600 hover:border-white hover:bg-transparent px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                    View all Biodatas <AiOutlineArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src={img3} alt="" className="w-full h-full" />
            <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white bg-black bg-opacity-50 px-[5%]">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                  <TypeWriter
                    text={"Discover Love's Journey on MingleHeart's Pathway."}
                  />
                </h1>
                <p className="my-1 sm:my-5 text-xs sm:text-lg">
                  Discover your life partner on our online platform, where
                  meaningful connections blossom into lasting relationships.
                  Join the journey to love.
                </p>
                <Link
                  to={"/biodatas"}
                  className="flex justify-center items-center"
                >
                  <button className="bg-pink-600 border border-pink-600 hover:border-white hover:bg-transparent px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                    View all Biodatas <AiOutlineArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
