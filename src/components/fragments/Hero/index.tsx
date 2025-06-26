import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Poppins } from "next/font/google";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TypewriterComponent from "typewriter-effect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Hero: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full text-white h-[300px] lg:h-[600px]"
    >
      <SwiperSlide className="h-full top-0">
        <div className="flex justify-center items-center flex-col relative z-50 h-full">
          <h1
            className={`text-white text-3xl text-center lg:text-6xl mb-4 ${poppins.className}`}
          >
            Dieng Jeep Center
          </h1>

          <div className="text-lg font-light">
            <TypewriterComponent
              options={{
                strings: ["Perjalanan", "Cerita", "Explore"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="absolute top-0 w-full h-full ">
          <img
            src="./hero1.jpg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute bg-black/60 top-0 w-full h-full"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
