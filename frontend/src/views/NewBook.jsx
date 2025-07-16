import Breadcrumbs from "../components/Breadcrumbs"
import { useForm } from "react-hook-form"
import { useState } from "react"
import TextInput from "../components/ui/TextInput"
import SelectInput from "../components/ui/SelectInput"
import { languages } from "../data/selectConstants"
import Button from "../components/ui/Button"

const NewBook = () => {
    const [step, setStep] = useState(1)
    const onSubmit = (data) => console.log(data)
    const { register, handleSubmit } = useForm()
    
    const handleNextStep = (e) => {
        setStep(step+1)
    }

    const handlePreviousStep = () => {
        setStep(step-1)
    }
    return (
        <>
            <div className="fixed bg-white w-full">
                <Breadcrumbs />

            </div>

            {/* New Book Form section */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white mt-18 py-2 px-4 w-full">

                {/* Conditional Rendering of fields*/}
                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <div className="flex flex-col bg-amber-200  py-20 px-10 h-full">
                                    <div className="">
                                        Please give me general information about your new book
                                    </div>
                                    <div className="flex flex-col justify-evenly">
                                        <TextInput 
                                        {...register('title')}
                                        size='md' 
                                        placeholder="Book'st title ... " 
                                        label='Title'/>

                                        <TextInput 
                                        {...register('subtitle')}
                                        size='md' 
                                        placeholder="Book'st subtitle ... " 
                                        label='Subtitle'/>

                                        <SelectInput
                                        {...register('language')}
                                        options={languages}
                                        label="Language"
                                        size="md"
                                        placeholder="Book's language..."
                                        
                                        />
                                    </div>
                                </div>
                            )


                        default:
                            return <p>Error</p>
                    }
                })()}

                <Button size='md' variant='secondary' onClick={handleNextStep}>Continue</Button>
                {step > 1 && <Button size='md' variant='warning' onClick={handlePreviousStep}>Back</Button>}
            </form>
        </>
    )
}

export default NewBook