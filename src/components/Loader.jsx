import React from 'react'
import loader from "../images/loader.gif"
import "../styles/loader.css"

export const Loader = () => {
  return (
    <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img id='loaderImage' src={loader} alt=''/>
    </div>
  )
}
