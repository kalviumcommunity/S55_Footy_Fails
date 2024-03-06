import Home from './components/Home'
import './App.css'
import Landing from './components/landing'
import  AddPlayer  from './components/Form'
import { Link,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<AddPlayer/>}/>
        </Routes>
    </>
  )
}

export default App
