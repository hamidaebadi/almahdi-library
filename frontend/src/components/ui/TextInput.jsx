import clsx from "clsx"

const sizeVariants = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-5 py-4',
    xl: 'text-xl px-6 py-5',
    '2xl': 'text-2xl px-7 py-6',
}
const labelSizeVariants = {
    sm: 'px-4 text-sm',
    md: 'px-5 text-base',
    lg: 'px-6 text-lg',
    xl: 'px-7 text-xl',
    '2xl': 'px-8 text-2xl',
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
        <div className={clsx('flex border-1 border-gray-200  rounded-md', className)}>
            <div className={clsx('bg-gray-600 rounded-sm text-white font-medium whitespace-nowrap flex items-center',
                labelSize,)}>
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