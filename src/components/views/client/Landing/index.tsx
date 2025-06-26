/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/components/fragments/Card";
import FormSearch from "@/components/fragments/FormSearch";
import Hero from "@/components/fragments/Hero";
import Title from "@/components/ui/Title";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Footer from "@/components/fragments/Footer";
import Gallery from "@/components/fragments/Gallery";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

const ClientLandingView: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Hero />
      <FormSearch />
      <section className="container mx-auto mt-8 min-h-[600px] px-5">
        <Title name="Paket Trip Populer" />
        <p className="font-normal mt-2">
          Yuk, pilih petualangan yang paling cocok buat kamu!
        </p>
        <div className="flex justify-start gap-x-5 mt-10">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className=" left-0 top-1/2 -translate-y-1/2 bg-secondary shadow p-2 rounded-full hover:bg-white "
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className=" right-0 top-1/2 -translate-y-1/2 bg-secondary shadow p-2 rounded-full hover:bg-white "
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="z-0 relative">
          <Swiper
            spaceBetween={60}
            slidesPerView={1}
            modules={[Navigation]}
            onInit={(swiper) => {
              (swiper.params.navigation as any).prevEl = prevRef.current;
              (swiper.params.navigation as any).nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className="z-0">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="z-0">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="z-0">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="z-0">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="z-0">
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="container mx-auto mt-2 min-h-[600px] px-5">
        <Title name="Mengapa Dieng Jeep Center?" />
        <div className="mt-7 flex-col-reverse lg:flex-row flex gap-y-6 ">
          <div className="flex-1">
            <h4 className="text-lg font-semibold">
              01 . Armada Jeep 4x4 Terawat & Nyaman
            </h4>
            <p className="font-normal text-md mt-2 ml-8">
              Semua jeep kami dirawat rutin dan siap jalan di medan terjal khas
              Dieng. Interior bersih, suspensi empuk, dan pastinya cocok buat
              kamu yang pengen trip seru tanpa drama.
            </p>
            <h4 className="text-lg font-semibold mt-8">
              02. Supir Lokal Berpengalaman & Ramah
            </h4>
            <p className="font-normal text-md mt-2 ml-8">
              Driver kami bukan cuma ahli nyetir di tanjakan curam, tapi juga
              asik diajak ngobrol dan ngerti banget spot-spot terbaik buat foto
              atau ngadem. Serasa punya guide pribadi!
            </p>
            <h4 className="text-lg font-semibold mt-8">
              03. Rute Menarik, Aman & Anti Ribet
            </h4>
            <p className="font-normal text-md mt-2 ml-8">
              Kami udah siapin jalur paling kece buat kamu nikmati semua sisi
              eksotis Dieng — dari sunrise epic sampai kawah aktif. Nggak perlu
              mikir macet atau nyasar, tinggal duduk santai aja.
            </p>
            <h4 className="text-lg font-semibold mt-8">04. Booking Mudah</h4>
            <p className="font-normal text-md mt-2 ml-8">
              Nggak perlu isi form ribet. Tinggal klik, dan konfirmasi langsung
              fix! Cocok buat kamu yang suka spontan trip atau lagi cari opsi
              cepat & praktis.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <img src="./about.png" className="w-90" alt="" />
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8 min-h-[600px] px-5">
        <Title name="Gallery Petualangan" />
        <div className="mx-auto mt-10">
          <Gallery />
        </div>
      </section>
      <section className="container mx-auto mt-8 min-h-[600px] px-5">
        <Title name="Tentang Kami" />
        <div className="mt-5 flex flex-col lg:flex-row">
          <div className="flex-1">
            <p className="font-bold text-primary text-lg">
              Halo, kami Dieng Jeep Center!
            </p>
            <p className="my-4">
              Kami bukan sekadar jasa sewa jeep — kami adalah partner perjalanan
              kamu buat menjelajahi setiap sudut indahnya Dataran Tinggi Dieng
              dengan cara yang paling seru, aman, dan memorable: naik jeep 4x4
              bareng kru lokal yang tahu medan luar kepala.
            </p>
            <p className="my-4">
              Berawal dari kecintaan kami pada alam Dieng dan keinginan untuk
              memperkenalkan keindahannya ke lebih banyak orang, kami membangun
              Dieng Jeep Center sebagai solusi buat kamu yang ingin jalan-jalan
              tanpa ribet. Mau lihat sunrise di Sikunir, jalan-jalan ke kawah
              aktif, atau eksplor spot tersembunyi? Semua bisa kami bantu atur.
            </p>
            <p className="my-4 font-bold text-lg">
              Jadi, udah siap belum buat naik jeep dan seru-seruan bareng kami
              di Dieng? <span className="text-3xl">😉</span>
            </p>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center">
            <img
              src="./about2.png"
              className="w-200 lg:-right-20  lg:absolute -z-1 opacity-20 lg:opacity-100"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClientLandingView;
