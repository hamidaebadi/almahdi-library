export const singleSelectBookManagement = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'white',
    borderColor: state.isFocused ? '#2563eb' : '#d1d5db', // focus:blue-600 else:gray-300
    boxShadow: state.isFocused ? '0 0 0 1px #2563eb' : 'none',
    '&:hover': {
      borderColor: '#2563eb',
    },
    borderWidth: '1px',
    borderRadius: '0.375rem', // rounded-md
    padding: '0.15rem 0.5rem', // p-1 px-2
    minHeight: '1.5rem', // h-10
    fontSize: '0.875rem', // text-sm
    minWidth: '200px'
  }),
  menu: (base) => ({
    ...base,
    zIndex: 40, // z-40
    backgroundColor: 'white',
    border: '1px solid #e5e7eb', // border-gray-200
    borderRadius: '0.375rem', // rounded-md
    marginTop: '0.25rem',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#2563eb'
      : state.isFocused
      ? '#eff6ff'
      : 'white',
    color: state.isSelected ? 'white' : '#1f2937', // gray-800
    padding: '0.5rem 0.75rem', // py-2 px-3
    fontSize: '0.875rem',
    cursor: 'pointer',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#111827', // text-gray-900
  }),
};