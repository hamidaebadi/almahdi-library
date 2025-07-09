import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Management from './views/Management'
import BookDetails from './views/BookDetails'
import AllBooks from './views/AllBooks'
import BookManagement from './views/BookManagement'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/management' element={<Management />}>
          <Route path='books_management' element={<BookManagement />}>
            <Route index element={<AllBooks />} />
            <Route path='book_details' element={<BookDetails />} />
          </Route>
        </Route >
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App