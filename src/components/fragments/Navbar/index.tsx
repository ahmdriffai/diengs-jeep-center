import Button from "@/components/ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { data } = useSession();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-white shadow-lg text-primary"
          : "bg-transparent text-white"
      } fixed w-full z-10 transition-all `}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* logo */}
        <div>
          <Image
            src={scrolled ? "/logo-green.svg" : "/logo-white.svg"}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        {/* Hamburger button (mobile) */}
        <div className="md:hidden z-30">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <RxCross2 size={27} className="text-white" />
            ) : (
              <CgMenuBoxed size={27} />
            )}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`md:flex z-20 items-center font-semibold gap-6 ${
            isOpen
              ? "absolute w-full h-dvh bg-primary text-white top-0 left-0 flex items-center justify-center flex-col"
              : "hidden"
          } md:block`}
        >
          <a href="#" className="block rounded-3xl p-2  hover:bg-primary/20">
            Beranda
          </a>
          <a href="#" className="block py-2  hover:border-b">
            Paket
          </a>
          <a href="#" className="block py-2  hover:border-b">
            Tentang Kami
          </a>
          <a href="#" className="block py-2  hover:border-b">
            Booking
          </a>
          <a href="#" className="block py-2  hover:border-b">
            Kontak
          </a>
          <Button
            variant="outlined"
            onClick={() => (data ? signOut() : signIn())}
          >
            {data ? "Logout" : "Masuk"}
          </Button>
          {/* <button className="bg-white border-0 px-[16px] py-[12px] text-black"></button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
