import React from 'react'
import './style.css'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Cardcomp from './Components/Cardcomp'

export default function App() {
  return (
   <div className='Business-card'>
    <Cardcomp/>
    <Main />
    <Footer/>
   </div>
  )
}


