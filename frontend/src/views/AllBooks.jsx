import ActionBar from "../components/ActionBar"
import Breadcrumbs from "../components/Breadcrumbs"
import BookList from "../components/BookList"
import { Link, Outlet } from "react-router-dom"
import SingleSelect from "../components/SingleSelect"

import { languages, categories } from "../data/selectConstants"
import { singleSelectBookManagement } from "../customStyles"
const AllBooks = () => {
    return (
        <>
            <div className="fixed bg-white w-full">
                <Breadcrumbs />

                <ActionBar>
                    <Link to="add_book/"
                        className="py-2 px-4 bg-emerald-700 text-white rounded font-bold
                     hover:bg-emerald-900 hover:text-white transition shadow-emerald-950 shadow-s">
                        Add Book
                    </Link>

                    <SingleSelect
                        name={'language'}
                        options={languages}
                        styles={singleSelectBookManagement}
                        placeholder="Language"
                    />

                    <SingleSelect
                        name={'category'}
                        options={categories}
                        styles={singleSelectBookManagement}
                        placeholder="Category"
                    />




                    <div className="flex gap-1 min-w-lg">
                        <input placeholder="search for book..."
                            className="rounded py-2 px-4 border-1 border-gray-300 w-[80%] focus:outline-1 focus:outline-green-500" />
                        <button className="bg-gray-300 border-1 border-gray-700 py-2 px-4 rounded
                    hover:bg-green-800 hover:text-white transition">Search</button>
                    </div>

                </ActionBar>
            </div>


            {/* Book List View */}
            <div className="mt-35 py-2 px-4">
                <BookList />
            </div>

        </>
    )
}

export default AllBooks