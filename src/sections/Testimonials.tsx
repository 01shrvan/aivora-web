import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“Aivora’s automation suite streamlined our workflows and gave us back hours every week.”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“The AI-driven insights helped us spot opportunities we didn’t even know existed.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“Their dashboards are clean, intuitive, and incredibly powerful — adoption was instant.”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Since switching to Aivora, our scalability and speed of execution have skyrocketed.”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-15 relative">
      <div className="p-4">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-bold 
          bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 text-transparent bg-clip-text 
          drop-shadow-[0_0_20px_rgba(0,174,239,0.5)]">
          Beyond Expectations.
        </h2>
        <p className="text-cyan-100/70 text-lg md:text-xl mx-auto tracking-tight text-center mt-5 max-w-xl">
          Our clients consistently report transformative results after using Aivora’s solutions.
        </p>

        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-cyan-400/30 p-6 md:p-10 rounded-2xl 
                  bg-black/20 backdrop-blur-sm flex-none max-w-xs md:max-w-md
                  shadow-[0_0_25px_rgba(0,174,239,0.3)] hover:shadow-[0_0_35px_rgba(0,174,239,0.6)] 
                  transition-all duration-300"
              >
                <div className="text-lg md:text-2xl tracking-tight text-cyan-50">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-12 w-12 rounded-lg grayscale border border-cyan-300/40"
                    />
                    <span className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(0,174,239,0.5)] pointer-events-none"></span>
                  </div>
                  <div>
                    <div className="font-medium text-cyan-100">{testimonial.name}</div>
                    <div className="text-cyan-200/60 text-sm">{testimonial.title}</div>
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
