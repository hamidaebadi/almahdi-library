import clsx from "clsx";

const sizeStyles = {
  sm: 'text-sm py-1 px-2',
  md: 'text-base py-2 px-3',
  lg: 'text-lg py-2.5 px-4',
  xl: 'text-xl py-3 px-5',
  '2xl': 'text-2xl py-4 px-6',
};

const Textarea = ({
    size = 'md',
    name,
    value,
    onChange,
    placeholder = '',
    className,
    rows,
    ...props
}) => {

    return (
        <div className="flex items-start border-1 border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white w-full">
            
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className={clsx(
                    'w-full outline-none bg-white text-gray-900 resize-none',
                    'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                    sizeStyles[size],
                    className
                )}
            />
        </div>

    )

}

export default Textarea