import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import {Book, Users, Repeat, CheckCircle, UserCog} from 'lucide-react'
Navbar
const Management = () => {
    const title = "Al-Mahdi Library"
    const menuObj = [{
        id: 1,
        text: "Books",
        url: "books_management",
        icon: <Book />
    },
    {
        id: 2,
        text: "Users",
        url: "users_management",
        icon: <Users />
    },
    {
        id: 3,
        text: "Borrowings",
        url: "borrowings",
        icon: <Repeat />
    },
    {
        id: 4,
        text: "Returns",
        url: "returns",
        icon: <CheckCircle />
    },
    {
        id: 5,
        text: "My Account",
        url: "my_account",
        icon: <UserCog />
    },
]
    return(
        <>
        <Navbar />
        <Sidebar menuObj={menuObj} title={title}/>
        <div className="flex">
            <div className="ml-[15%] w-[calc(100%-15%)]  bg-gray-50 mt-19">
            {/* Navbar fixed at the top of the content area */}
            {/* Main content with margin-top to account for navbar height */}
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
        </>
    )

}

export default Management