import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
     <Header />
     <Outlet />
     <div className='flex mt-40'>
     <Footer />
     </div>
    </div>
  )
}

export default App
