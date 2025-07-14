import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
    return (
        <Link to={`book_details/${book.id}`}
         className="w-full max-w-xs bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
        <div >
            <div className="h-48 flex justify-center items-center overflow-hidden rounded-md bg-gray-50 mb-4">
                {book.coverImageUrl ? (
                    <img
                        src={book.coverImageUrl}
                        alt={book.title}
                        className="h-full object-contain"
                    />
                ) : (
                    <span className="text-gray-400 italic text-sm">No Image</span>
                )}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                {book.title}
            </h3>

            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Author:</span> {book.author || 'Unknown'}
            </p>

            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Category:</span> {book.category}
            </p>
          
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Language:</span> {book.language}
            </p>

            {book.shelfCode && (
                <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Shelf:</span> {book.shelfCode}
                </p>
            )}

            <p className={`text-sm ${book.available ? 'text-green-600' : 'text-red-500'} mb-3`}>
                {book.available ? 'Available' : 'Unavailable'}
            </p>
        </div>
        </Link>
    );
}

export default BookItem