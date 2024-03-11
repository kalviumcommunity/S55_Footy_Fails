import Home from './components/Home'
import './App.css'
import Landing from './components/landing'
import  AddPlayer  from './components/Form'
import { Link,Route,Routes } from 'react-router-dom'
import UpdatePlayer from './components/Update'


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<AddPlayer/>}/>
          <Route path = '/update/:id' element = {<UpdatePlayer/>}/>
        </Routes>
    </>
  )
}

export default App
