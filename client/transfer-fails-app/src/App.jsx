import Home from './components/Home'
import './App.css'
import Landing from './components/landing'
import  AddPlayer  from './components/Form'
import { Link,Route,Routes } from 'react-router-dom'
import UpdatePlayer from './components/Update'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<AddPlayer/>}/>
          <Route path = '/update/:id' element = {<UpdatePlayer/>}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/signup' element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App
