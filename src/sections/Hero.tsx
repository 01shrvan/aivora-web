import { Button } from "@/components/Button"
import starsBg from '@/assets/stars.png'

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center" style={{ background: `url(${starsBg.src})`}}>
      <div className="container">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Aivora Solutions
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          We create intelligent tools that simplify work, fuel growth, and keep you ahead of the curve.
        </p>
        <div className="flex justify-center mt-5 ">
          <Button>
            Lets Innovate
          </Button>
        </div>
      </div>
    </section>
  )
};
