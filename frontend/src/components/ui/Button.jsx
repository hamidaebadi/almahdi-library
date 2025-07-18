import clsx from 'clsx'

const Button = ({
    children,
    type = 'button',
    variant,
    size,
    onClick,
    disabled = false,
    className = '',
    ...props
}) => {

    const variantStyle = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-900',
    }

    const sizeStyles = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3.5 text-lg',
    }

    const baseStyles =
        'inline-flex items-center gap-2 border-1 font-medium rounded shadow-sm transition-all duration-150 ease-in-out focus:outline-none hover:shadow-md active:scale-[0.98]';

    const combined = clsx(
        baseStyles,
        variantStyle[variant],
        sizeStyles[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
    )

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={combined}>
            {children}
        </button>
    )
}

export default Button