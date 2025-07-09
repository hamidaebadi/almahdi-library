
import { Outlet } from "react-router-dom"

const BookManagement = () => {

    return (
        <div className="flex flex-col">
            <Outlet />
        </div>
    )
}

export default BookManagement