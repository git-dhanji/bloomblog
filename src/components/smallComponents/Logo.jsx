/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function Logo({
    fontsize = "2xl",
    width = '100px',
    LogoName = "BloomBlog",
    className = '',
    ...porps
}) {
    return (
        <div className={`
        dark:text-[#e4cbcb] text-slate-800
        w-[${width}] font-semibold text-${fontsize} text-emerald-800 ${className}`}>{LogoName}</div>
    )
}
