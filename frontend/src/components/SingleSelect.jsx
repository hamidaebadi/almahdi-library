import { Fragment } from "react"
import Select from 'react-select'

const SingleSelect = ({ name, options, defalutValue, styles, placeholder }) => {
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
            />
        </div>
    )
}

export default SingleSelect