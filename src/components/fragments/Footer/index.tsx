import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding & Afiliasi */}
        <div>
          <Image
            src="/logo-white.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <p className="text-sm text-gray-400 mt-2">
            Layanan resmi booking jeep wisata kawasan Dieng. Bagian dari{" "}
            <a
              href="https://diengs.id"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              diengs.id
            </a>
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-2">Navigasi</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-white">
                Booking Jeep
              </Link>
            </li>
            <li>
              <Link href="/paket" className="hover:text-white">
                Paket Wisata
              </Link>
            </li>
            <li>
              <Link href="/tentang" className="hover:text-white">
                Tentang Kami
              </Link>
            </li>
            <li>
              <a href="/kontak" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosial */}
        <div>
          <h3 className="font-semibold mb-2">Hubungi Kami</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              Dieng Kulon, Batur, Banjarnegara
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" />
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                +62 812-3456-7890
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-lg" />
              <a
                href="https://instagram.com/diengsjeep"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                @diengsjeep
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 text-center text-sm text-gray-500 pt-4">
        © {new Date().getFullYear()} Diengs Jeep Center — Afiliasi dari{" "}
        <a
          href="https://diengs.id"
          target="_blank"
          className="underline text-blue-400"
        >
          diengs.id
        </a>
      </div>
    </footer>
  );
};

export default Footer;
