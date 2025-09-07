import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <div>
            <button>
              Get Started
            </button>
            <span>
              menu
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
