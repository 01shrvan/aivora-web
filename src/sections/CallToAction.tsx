import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png"

export const CallToAction = () => {
  return <section className="py-15 md:py-20">
    <div className="p-4">
      <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={{
        backgroundImage: `url(${starsBg.src})`,
      }}>

        <div className="absolute inset-0 bg-[rgb(0,174,239,0.15)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
          style={{
            backgroundImage: `url(${gridLines.src})`,
          }}></div>
        <div className="relative">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text font-medium text-center">AI driven SEO for everyone.</h2>
          <p className="text-center text-lg md:text-xl mx-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">Unlock the power of AI to optimize your website's SEO and drive more traffic.</p>
          <div className="flex justify-center mt-8">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
