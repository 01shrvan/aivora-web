"use client"

import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import pulseLogo from "@/assets/logo-pulse.png"
import celestialLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"

export const LogoTicker = () => {
  return (
    <section className="py-15 md:py-20 overflow-hidden">
      <div className="p-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <h2 className="text-lg md:text-xl lg:text-2xl text-cyan-100/80 font-semibold text-center md:text-left">
              Trusted by top innovative teams
            </h2>
          </div>

          <div className="flex-1 overflow-hidden px-8 md:px-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex flex-none gap-14 animate-[slideLeft_20s_linear_infinite]">
              {[
                acmeLogo,
                apexLogo,
                pulseLogo,
                celestialLogo,
                quantumLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                pulseLogo,
                celestialLogo,
                quantumLogo,
                echoLogo,
              ].map((logo, index) => (
                <img
                  src={logo.src}
                  key={`${logo.src}-${index}`}
                  className="h-6 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
