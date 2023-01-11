import React from 'react'
import {Routes,Route} from "react-router-dom"
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'


export const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
       </Routes>
    </div>
  )
}
