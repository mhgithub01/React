import React  from 'react'

import Profile  from './components/Props.jsx'
import PackingList from './components/Conditions.jsx'
import TextForm from './components/TextForm.jsx'

import './App.css'



export default function App() {

  return(
    <>
  
  
   <div><Profile/></div>
   <div><PackingList/></div>
   <div className="container">
   <TextForm heading="Enter the text to analyze below"/> 
   </div>
   
   </>
  )
}



