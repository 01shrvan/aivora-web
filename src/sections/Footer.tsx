import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return <footer className="py-3 border-t border-white/15" >
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex gap-2 items-center md:flex-1">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={35}
            height={35}
          />
          <div className="font-medium">Aivora Solutions</div>
        </div>
        <nav className="flex flex-col md:flex-row gap-5 md:gap-7 items-center">
          <a href="#about" className="text-white/70 hover:text-white text-xs md:text-sm transition">About</a>
          <a href="#services" className="text-white/70 hover:text-white text-xs md:text-sm transition">Services</a>
          <a href="#showcase" className="text-white/70 hover:text-white text-xs md:text-sm transition">Showcase</a>
          <a href="#blog" className="text-white/70 hover:text-white text-xs md:text-sm transition">Blog</a>
          <a href="#contact" className="text-white/70 hover:text-white text-xs md:text-sm transition">Contact</a>
        </nav>
        <div className="flex gap-5 md:flex-1 md:justify-end">
          <a href="https://x.com/01shrvan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className="text-white/40 hover:text-white transition cursor-pointer" />
          </a>
          <a href="https://linkedin.com/company/aivorasolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SiLinkedin className="text-white/40 hover:text-white transition cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  </footer>
};