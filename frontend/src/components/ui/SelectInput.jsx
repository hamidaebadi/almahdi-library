import clsx from 'clsx';

const sizeVariants = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-3',
  xl: 'text-xl px-5 py-4',
  '2xl': 'text-2xl px-6 py-5',
};

const labelSizeVariants = {
  sm: 'px-2 text-sm',
  md: 'px-3 text-base',
  lg: 'px-4 text-lg',
  xl: 'px-5 text-xl',
  '2xl': 'px-6 text-2xl',
};

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option...",
  size,
  className = '',
  ...props
}) => {
  const inputSize = sizeVariants[size] || sizeVariants['md'];
  const labelSize = labelSizeVariants[size] || labelSizeVariants['md'];

  return (
    <div className={clsx('flex rounded-md overflow-hidden border-1 border-gray-200 shadow-sm w-full', className)}>
      <div
        className={clsx(
          'bg-gray-600 text-white font-medium whitespace-nowrap flex items-center',
          labelSize
        )}
      >
        {label}
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(
          'w-full outline-none text-gray-900 bg-white appearance-none ',
          inputSize
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
