import image1 from "../../resources/images/1.jpeg";
import image2 from "../../resources/images/2.jpeg";
import image3 from "../../resources/images/3.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Content2 = () => {
  return (
    <div className="mt-20">
      <Carousel autoPlay infiniteLoop swipeable emulateTouch showThumbs={false}>
        <div
          className="w-full h-full flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mt-32 sm:mt-60"></div>
          <div className="text-6xl sm:text-8xl">Education</div>
          <div className="text-6xl sm:text-8xl">Sharing</div>
          <div className="text-6xl sm:text-8xl">Club</div>
          <button className="mt-4 px-4 bg-gray-400 text-base sm:text-2xl">
            View our history
          </button>
          <div className="mt-32 sm:mt-60"></div>
        </div>
        <div
          className="w-full h-full flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="text-xl sm:text-4xl">멘토를 찾습니다!</div>
          <div className="mt-6 text-xl sm:text-4xl">
            자신의 배움을 나눔해 주실 분을 모집합니다.
          </div>
          <div className="text-xl sm:text-4xl">
            함께 성장하는 기회를 나눔해 주세요.
          </div>
          <button className="mt-6 px-4 bg-gray-400 text-base sm:text-2xl">
            신청하기
          </button>
        </div>
        <div
          className="w-full h-full flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="text-4xl">Check our program.</div>
          <button className="mt-6 px-4 bg-gray-400 text-base sm:text-2xl">
            SEE MORE
          </button>
        </div>
      </Carousel>
    </div>
  );
};
