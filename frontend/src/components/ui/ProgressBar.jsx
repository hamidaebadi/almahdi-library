import clsx from "clsx"

const steps = ["General Information", "Publication Details", "Classification & Tags",  "Inventory & Files", "Review & Submit"]
const ProgressBar = ({ currentStep }) => {
    return (
        <div className="flex justify-center gap-1">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep
                const isActive = index === currentStep

                return (

                    <div key={index} className={clsx(
                        'px-5 py-3 rounded-md -skew-x-20 text-center border-t border-b',
                isCompleted ? 'bg-green-700 text-white border-green-300 font-bold transition duration-300 ease-in-out' :
                isActive ? 'bg-green-100 text-green-700  border-green-300 shadow-sm text-lg transition duration-500 ease-in-out' :
                'bg-gray-100 text-gray-500 border-gray-300'
                    )}>
                        {step}
                    </div>
                )
            })}
        </div>
    )
}

export default ProgressBar