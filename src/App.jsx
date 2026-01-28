import { createContext, useState } from 'react'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './components/Footer/Footer'
import { UpdateMini } from './components/Updates/Mini/UpdateMini'
import { links } from './components/Common/Components/LinkTree/links'
import { About } from './components/About/About'
import { ECommerce } from './components/Projects/ECommerce/ECommerce'

export const LinksContext = createContext();

function App() {
  const [page,setPage] = useState('welcome')

  const mainPages = {
    welcome:  <Welcome />,
    about: <About />,
    contact: <div>Contact Us</div>,
    project_1: <ECommerce/>
  };
  
  return (
    <div className="container">
        <div className='hero'><Hero /></div>
      <div className="container-body">
        <LinksContext.Provider value={{ links ,page,setPage }}>
        <div className='navbar'><Navbar /></div>
        </LinksContext.Provider>
         <div className='main-content'>
          {mainPages[page]}      {/* main part  */}
        </div>
        <div className="update"><UpdateMini /></div>
      </div>
        <div className="footer"> <Footer/></div>
    </div>
  )
}

export default App
