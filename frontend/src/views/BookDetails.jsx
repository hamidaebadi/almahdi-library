import Breadcrumbs from "../components/Breadcrumbs"
import ActionBar from "../components/ActionBar"
import Button from "../components/ui/Button"
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { languages, categories, bookConditions } from "../data/selectConstants"
import { singleSelectBookManagement } from "../customStyles"
import Select from 'react-select'
import mockBooks from "../data/mockbooks"
import { clsx } from "clsx"
const BookDetails = () => {

    const params = useParams()
    const [book, setBook] = useState(null)
    const [isEditable, setIsEditable] = useState(false)
    const onSubmit = (data) => console.log(data)
    const handleEditBtn = () => setIsEditable(!isEditable)
    const { register, handleSubmit, setValue, control } = useForm()

    useEffect(() => {
        const filteredBook = mockBooks.find(book => book.id === Number(params.id))
        setBook(filteredBook)
        setValue('title', filteredBook.title)
        setValue('author', filteredBook.author)
       
        setValue('language', languages.find(lang => lang.label === filteredBook.language))
        setValue('category', categories.find(cate => cate.label === filteredBook.category))
    }, [])



    if (book == null) {
        return (
            <>
                <p>Loading book ... </p>
            </>
        )
    } else {
        return (
            <div>
                <div className="fixed bg-white w-full">
                    <Breadcrumbs />

                    <ActionBar>
                        <Button variant='secondary' size='md' onClick={handleEditBtn}>
                            Edit
                        </Button>

                        <Button variant='danger' size='md'>
                            Delete
                        </Button>
                    </ActionBar>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white mt-32 py-2 px-4 w-full">
                    <div className="rounded-lg p-4 bg-white border-b-1 border-gray-200 py-10 px-30">
                        <div className="text-lg font-light mb-6">Basic Information</div>
                        {/* Form fields here */}
                        <div className="flex flex-wrap gap-5">

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Title</label>
                                <input
                                    type="text"
                                    {...register('title')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Author(s)</label>
                                <input
                                    type="text"
                                    {...register('author')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>


                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Language</label>
                              

                                <Controller
                                name="language"
                                control={control}
                                render={({field}) => (
                                    <Select 
                                    {...field}
                                    options={languages}
                                    isDisabled={!isEditable}
                                    styles={singleSelectBookManagement}
                                    value={field.value}
                                    onChange={field.onChange}
                                    />
                                )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Category</label>
                              

                                <Controller
                                name="category"
                                control={control}
                                render={({field}) => (
                                    <Select 
                                    {...field}
                                    options={categories}
                                    isDisabled={!isEditable}
                                    styles={singleSelectBookManagement}
                                    value={field.value}
                                    onChange={field.onChange}
                                    />
                                )}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="rounded-lg p-4 bg-white border-b-1 border-gray-200 py-10 px-30">
                        <div className="text-xl font-light mb-6">Publishing Information</div>
                        {/* Form fields here */}
                        <div className="flex flex-wrap gap-5">

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Publisher</label>
                                <input
                                    type="text"
                                    {...register('publisher')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Year Of Publication</label>
                                <input
                                    type="text"
                                    {...register('year')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>


                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Edition</label>
                              

                                 <input
                                    type="text"
                                    {...register('edition')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">ISBN</label>
                              

                                 <input
                                    type="text"
                                    {...register('isbn')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="rounded-lg p-4 bg-white border-b-1 border-gray-200 py-10 px-30">
                        <div className="text-xl font-light mb-6">Library Information</div>
                        {/* Form fields here */}
                        <div className="flex flex-wrap gap-x-20 gap-y-10">

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Shelf / Locattion</label>
                                <input
                                    type="text"
                                    {...register('shelf')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Book ID / Barcode</label>
                                <input
                                    type="text"
                                    {...register('barcode')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>


                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Number of Copies</label>
                              

                                 <input
                                    type="text"
                                    {...register('copies')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Available of Copies</label>
                              

                                 <input
                                    type="text"
                                    {...register('availableofcopies')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Book Condition</label>
                            
                                 
                            <Controller
                                name="condition"
                                control={control}
                                render={({field}) => (
                                    <Select 
                                    {...field}
                                    options={bookConditions}
                                    isDisabled={!isEditable}
                                    styles={singleSelectBookManagement}
                                    value={field.value}
                                    onChange={field.onChange}
                                    />
                                )}
                                />
                            </div>

                        </div>


                    </div>

                    <div className="rounded-lg p-4 bg-white border-b-1 border-gray-200 py-10 px-30">
                        <div className="text-xl font-light mb-6">Meta Data</div>
                        {/* Form fields here */}
                        <div className="flex flex-wrap gap-x-20 gap-y-10">

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Date Added</label>
                                <input
                                    type="date"
                                    {...register('date_added')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Last Modified</label>
                                <input
                                    type="date"
                                    {...register('last_modified')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>


                            <div className="felx flex-col gap-1">
                                <label className="block text-lg font-medium">Added By</label>
                              

                                 <input
                                    type="text"
                                    {...register('added_by')}
                                    readOnly={!isEditable}
                                    className={clsx(
                                        "w-full text-lg",
                                        isEditable
                                            ? "border rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            : "border-none bg-transparent text-gray-800 cursor-default focus:outline-none"
                                    )}
                                />
                            </div>

                        </div>


                    </div>


                </form>


            </div>
        )
    }


}

export default BookDetails