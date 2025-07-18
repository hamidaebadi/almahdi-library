import Breadcrumbs from "../components/Breadcrumbs"
import { useForm } from "react-hook-form"
import { useState } from "react"
import TextInput from "../components/ui/TextInput"
import SelectInput from "../components/ui/SelectInput"
import { languages } from "../data/selectConstants"
import Button from "../components/ui/Button"
import ProgressBar from "../components/ui/ProgressBar"
import Textarea from "../components/ui/Textarea"
import TagableTextInput from "../components/ui/TagableTextInput"
import { publicationYears } from "../utils"

const NewBook = () => {
    const [step, setStep] = useState(0)
    const onSubmit = (data) => console.log(data)
    const { register, handleSubmit } = useForm()

    const handleNextStep = (e) => {
        setStep(step + 1)
    }

    const handlePreviousStep = () => {
        setStep(step - 1)
    }
    return (
        <>
            <div className="fixed bg-white w-full">
                <Breadcrumbs />

            </div>

            {/* New Book Form section */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white mt-10 py-15 px-80 w-full">
                <ProgressBar currentStep={step} />
                {/* Conditional Rendering of fields*/}
                {(() => {
                    switch (step) {
                        case 0:
                            return (
                                <div className="flex flex-col  py-20 px-10 ">

                                    <div className="flex flex-col gap-y-2">
                                        <TextInput
                                            {...register('title')}
                                            size='md'
                                            placeholder="Book'st title ... "
                                            label='Title' />

                                        <TextInput
                                            {...register('subtitle')}
                                            size='md'
                                            placeholder="Book'st subtitle ... "
                                            label='Subtitle' />

                                        <SelectInput
                                            {...register('language')}
                                            options={languages}
                                            label="Language"
                                            size="md"
                                            placeholder="Book's language..."

                                        />

                                        <Textarea
                                            {...register('description')}
                                            size="lg"
                                            placeholder="Write a short description about this book..."
                                            rows='6'

                                        />
                                    </div>
                                </div>
                            )

                        case 1:
                            return (
                                <div className="flex flex-col py-20 px-10">
                                    <div className="flex flex-col gap-y-2">
                                        <TagableTextInput
                                            {...register('authors')}
                                            label="Author(s)"
                                            size="md"
                                            placeholder="Add author by pressing Enter ..."
                                        />

                                        <TextInput
                                            {...register('publisher')}
                                            label="Publisher"
                                            size="md"
                                            placeholder="Name of publisher ..."
                                        />

                                        <div className="flex justify-between">
                                            <SelectInput
                                                {...register("year")}
                                                size={"md"}
                                                label={"Publication Year"}
                                                options={publicationYears()}
                                            />

                                            <TextInput
                                                {...register("edition")}
                                                size={"md"}
                                                label={"Edition"}
                                                placeholder="e.g Second, 3th, revised, ..."
                                            />
                                        </div>

                                        <TextInput
                                            {...register("isbn")}
                                            label={"ISBN"}
                                            size={"md"}
                                            placeholder="Book's ISBN..."
                                        />
                                    </div>



                                </div>
                            )

                        case 2:
                            return(
                                <div className="flex flex-col  py-20 px-10">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex gap-x-5">

                                        <SelectInput
                                        {...register("category")}
                                        label={"Category"}
                                        size={"md"}
                                        placeholder="Book's category"
                                        />

                                        <SelectInput
                                        {...register("subcategory")}
                                        label={"Subcategory"}
                                        size={"md"}
                                        placeholder="Book's subCategory"
                                        />
                                        </div>
                                    </div>
                                </div>
                            )

                        


                        default:
                            return <p>Error</p>
                    }
                })()}


                <div className="flex w-full justify-center space-x-3">
                    {step > 0 && <Button size='md' variant='secondary' onClick={handlePreviousStep}>Back</Button>}
                    {step < 4 && <Button size='md' variant='secondary' onClick={handleNextStep}>Next</Button>}
                    
                </div>

            </form>
        </>
    )
}

export default NewBook