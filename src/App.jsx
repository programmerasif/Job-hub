import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
     <Header />
     <div className='min-h-[calc(100vh-150px)]'>
     <Outlet />
     </div>
     <Footer />
    </div>
  )
}

export default App
