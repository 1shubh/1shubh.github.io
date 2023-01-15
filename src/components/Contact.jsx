import React from 'react'
import sample from "../video/Glow2.mp4"

export const Contact = () => {
  return (
    <div id='contact' style={{color:"white"}}>
       <video width={"100%"} style={{position:"relative"}} autoPlay loop muted>
           <source src={sample} type='video/mp4' />
        </video>
    </div>
  )
}
