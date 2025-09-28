import Image from "next/image";
import XSocial from '@/assets/social-x-.svg'
import InstaSocial from '@/assets/social-instagram.svg'

export const Footer = () => {
  return <footer>
    <div>
      <div>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <div>Aivora Solutions</div>
      </div>
      <div>
        <nav>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Showcase</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div></div>
    </div>
  </footer>;
};
