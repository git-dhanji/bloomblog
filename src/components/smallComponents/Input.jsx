/* eslint-disable react/prop-types */
import  { forwardRef, useId } from 'react';

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {
                label && <label
                    htmlFor={id}
                    className="inline-block mb-1 pl-1"
                >{label}</label>
            }

            <div>
                <input
                    type={type}
                    id={id}
                    className={`${className}bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `} placeholder="John"
                    {...props}
                    ref={ref}
                />
            </div>
        </div>
    )

})

// export default forwardRef(Input)
export default Input;
