import { X } from "lucide-react";
import { useState } from "react";
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

const TagableTextInput = ({ label, size, value = [], onChange, placeholder = "" }) => {
    const [inputValue, setInputValue] = useState("")
    const [tags, setTags] = useState(value)


    const inputSize = sizeVariants[size] || sizeVariants['md'];
    const labelSize = labelSizeVariants[size] || labelSizeVariants['md'];


    const addTag = () => {
        const trimmed = inputValue.trim()
        if (trimmed && !tags.includes(trimmed)) {
            const newTags = [...tags, trimmed]
            setTags(newTags)
        }
        setInputValue("")
    }


    const removeTag = (index) => {
        const newTags = tags.filter((_, i) => i !== index)
        setTags(newTags)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addTag()
        }
    }


    return (
        <div className="flex border-1 border-gray-200  rounded-md">
            <div className={clsx('bg-gray-600 rounded-sm text-white font-medium whitespace-nowrap flex items-center',
                labelSize,)}>
                {label}
            </div>

            <div className="flex flex-wrap w-full items-center gap-2 border-1 border-gray-200 rounded-md bg-white  ">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="ml-1 hover:text-red-600"
                        >
                            <X size={14} />
                        </button>
                    </span>
                ))}
                <input
                    type="text"
                    className={clsx("flex-1 border-none focus:outline-none",inputSize)}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )

}

export default TagableTextInput