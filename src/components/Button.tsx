export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm 
                       bg-gradient-to-b from-[#0a1120] to-[#04324d] 
                       shadow-[0px_0px_12px_#00AEEF]/80 text-cyan-100 hover:shadow-[0_0_18px_#00AEEF] transition">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-cyan-200/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-cyan-300/40 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(0,174,239,.6)_inset] rounded-lg"></div>
      </div>
      <span className="relative z-10">{props.children}</span>
    </button>
  )
}
