import Home from './components/Home'
import './App.css'
import Landing from './components/landing'
import { Link,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
