import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Management from './views/Management'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/management' element={<Management />}>
          
        </Route >
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App