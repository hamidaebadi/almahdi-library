import clsx from "clsx"

const sizeVariants = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
    xl: 'text-xl px-5 py-4',
    '2xl': 'text-2xl px-6 py-5',
}
const labelSizeVariants = {
    sm: 'px-2 text-sm',
    md: 'px-3 text-base',
    lg: 'px-4 text-lg',
    xl: 'px-5 text-xl',
    '2xl': 'px-6 text-2xl',
};
const TextInput = ({
    label,
    value,
    size,
    onChange,
    name,
    placeholder = '',
    className = '',
    ...props
}) => {

    const inputSize = sizeVariants[size] || sizeVariants['md'];
    const labelSize = labelSizeVariants[size] || labelSizeVariants['md'];

    return (
        <div className={clsx('flex border rounded-md overflow-hidden shadow-sm', className)}>
            <div className={clsx('bg-gray-100 border-r text-gray-700 font-medium whitespace-nowrap flex items-center',
                labelSize)}>
                {label}
            </div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={clsx(
                    'w-full outline-none text-gray-900 placeholder-gray-400',
                    inputSize
                )}
                {...props}
            />
        </div>
    )
}

export default TextInput