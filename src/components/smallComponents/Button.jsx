/* eslint-disable react/prop-types */



function Button({
    children,
    type = "button",
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = "",
    ...props

}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 ${bgColor} ${textColor} ${className} rounded-sm`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
