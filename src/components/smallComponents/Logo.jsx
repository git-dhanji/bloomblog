/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function Logo({ 
    fontsize="2xl",
    width = '100px',
    LogoName="BloomBlog",
    ...porps
}) {
    return (
        <div className={`w-[${width}] font-semibold text-${fontsize} text-emerald-800`}>{LogoName}</div>
    )
}
