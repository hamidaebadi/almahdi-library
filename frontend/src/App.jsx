import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Management from './views/Management'
import BookManagement from './views/BookManagement'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/management' element={<Management />}>
          <Route path='books_management' element={<BookManagement />}/>
        </Route >
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App