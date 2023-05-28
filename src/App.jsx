import Login from './components/Login'
import Register from './components/Register'
import List from './components/List'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {

  return (
    <div className="center">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='dashboard' element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
