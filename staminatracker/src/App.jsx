import { useState } from 'react'
import './index.css'
import Header from './Header'
import Hero from './Hero'
import SkillList from './SkillList'
import Staminaburner from './Staminaburner'

function App(){
  
  const skill=[{ name:"JS ", level:"moderate "},
               {name :"React" ,level:"moderate"},
               {name :"Tailwind CSS ",level:"moderate"},
  ]

  return(
   <>
   <Header/>
   <Hero/>
   <SkillList skill={skill}/>
   <Staminaburner/>
   </>
    
  )
}


export default App 