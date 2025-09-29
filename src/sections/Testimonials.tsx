"use client"

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "Aivora's automation suite streamlined our workflows and gave us back hours every week.",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "The AI-driven insights helped us spot opportunities we didn't even know existed.",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "Their dashboards are clean, intuitive, and incredibly powerful — adoption was instant.",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Since switching to Aivora, our scalability and speed of execution have skyrocketed.",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_center,rgba(0,174,239,0.1),transparent)]"></div>

      <div className="container relative">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-bold 
            bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 text-transparent bg-clip-text 
            drop-shadow-[0_0_20px_rgba(0,174,239,0.5)]
            animate-[fadeInUp_1s_ease-out]">
            Beyond Expectations.
          </h2>
          <div className="absolute inset-0 text-5xl md:text-6xl text-center tracking-tighter font-bold
            bg-gradient-to-b from-blue-300 via-cyan-400 to-blue-600 text-transparent bg-clip-text
            blur-sm opacity-20 animate-pulse -z-10">
            Beyond Expectations.
          </div>
        </div>

        <p className="text-cyan-100/70 text-lg md:text-xl mx-auto tracking-tight text-center mt-5 max-w-xl
          animate-[fadeInUp_1s_ease-out_0.2s_both]">
          Our clients consistently report transformative results after using Aivora's solutions.
        </p>

        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex flex-none gap-6 animate-[slideLeft_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="border border-cyan-400/30 p-6 md:p-10 rounded-2xl 
                  bg-black/20 backdrop-blur-sm flex-shrink-0 w-80 md:w-96
                  shadow-[0_0_25px_rgba(0,174,239,0.3)] hover:shadow-[0_0_35px_rgba(0,174,239,0.6)] 
                  hover:border-cyan-400/50
                  transition-all duration-300 group"
              >
                <div className="text-lg md:text-2xl tracking-tight text-cyan-50 group-hover:text-cyan-100 transition-colors">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-12 w-12 rounded-lg grayscale border border-cyan-300/40 
                        group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(0,174,239,0.5)] 
                      group-hover:shadow-[0_0_15px_rgba(0,174,239,0.8)] pointer-events-none transition-all duration-300"></span>
                  </div>
                  <div>
                    <div className="font-medium text-cyan-100 group-hover:text-cyan-50 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-cyan-200/60 text-sm group-hover:text-cyan-200/80 transition-colors">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};