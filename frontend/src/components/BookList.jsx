import {useState} from "react"
import BookItem from "./BookItem"
import mockBooks from "../data/mockbooks"

const BookList = () => {
    const [books, setBooks] = useState(mockBooks)
    const [page, setPage] = useState(1)

    return(
        <div className="flex flex-wrap gap-4 justify-center">
            {books.map(book => <BookItem key={book.id} book={book}/>)}
        </div>
    )
}

export default BookList