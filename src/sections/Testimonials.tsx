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
  return <section className="py-15">
    <div className="p-4">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Beyond Expectations.</h2>
      <p className="text-white/70 text-lg md:text-xl mx-auto tracking-tight text-center mt-5 max-w-sm">Our clients consistently report transformative results after using Aivora’s solutions.</p>
      <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex gap-5">
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none">
              <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                  <Image src={testimonial.avatarImg} alt={`Avatar for ${testimonial.name}`} className="h-11 w-11 rounded-lg grayscale" />
                </div>
                <div className="">
                  <div>{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
};
