import Select from 'react-select'

const SingleSelect = ({ name, options, defalutValue, styles, placeholder, readonly }) => {
    return (
        <div>
            <Select
                className="basic-single"
                isSearchable={true}
                name={name}
                options={options}
                defaultValue={defalutValue}
                styles={styles}
                placeholder={placeholder}
                isDisabled={readonly}
            />
        </div>
    )
}

export default SingleSelect