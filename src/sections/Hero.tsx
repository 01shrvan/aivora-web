import { Button } from "@/components/Button"
import starsBg from '@/assets/stars.png'

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[600px] flex items-center justify-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
      style={{ background: `url(${starsBg.src}), #0a1120`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(0,174,239,.5)_15%,rgb(10,17,32,.8)_78%,transparent)]"></div>

      <div className="absolute h-64 w-64 md:h-80 md:w-80 rounded-full border border-cyan-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,#5CCEFF_37.7%,#0a1120)] 
                      shadow-[-20px_-20px_50px_rgb(200,250,255,.5),-20px_-20px_80px_rgb(100,200,255,.2),0px_0px_50px_rgb(0,174,239),0_0_100px_rgb(0,174,239,0.3)]
                      animate-pulse"></div>

      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-cyan-400/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      animate-[spin_25s_linear_infinite] flex items-center justify-center">
        <div className="absolute h-2 w-2 md:h-3 md:w-3 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-cyan-300 rounded-full top-0 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgb(147,197,253)]"></div>
        <div className="absolute h-5 w-5 left-full border border-cyan-200 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center shadow-[0_0_15px_cyan]">
          <div className="h-2 w-2 bg-cyan-300 rounded-full"></div>
        </div>
      </div>

      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-cyan-200/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      border-dashed animate-[spin_35s_linear_infinite_reverse]"></div>

      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-cyan-100/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      animate-[spin_45s_linear_infinite]">
        <div className="absolute h-2 w-2 left-0 bg-cyan-300 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgb(147,197,253)]"></div>
        <div className="absolute h-2 w-2 right-0 bg-cyan-200 rounded-full top-1/2 translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgb(196,181,253)]"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>

      <div className="container relative text-center z-10">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-[140px] xl:text-[168px] md:leading-none font-bold tracking-tighter 
                         bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 text-transparent bg-clip-text
                         drop-shadow-[0_0_30px_rgba(0,174,239,0.6)] animate-[fadeInUp_1s_ease-out]">
            Aivora Solutions
          </h1>
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-[140px] xl:text-[168px] md:leading-none font-bold tracking-tighter
                          bg-gradient-to-b from-blue-300 via-cyan-400 to-blue-600 text-transparent bg-clip-text
                          blur-sm opacity-30 animate-pulse -z-10">
            Aivora Solutions
          </div>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-cyan-100/80 mt-8 max-w-3xl mx-auto leading-relaxed
                     animate-[fadeInUp_1s_ease-out_0.3s_both]">
          We craft <span className="text-cyan-300 font-semibold">intelligent tools</span> that simplify work,
          fuel growth, and keep you ahead of the curve.
        </p>
      </div>
    </section>
  )
};
