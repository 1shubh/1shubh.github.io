import React from 'react'
import style from "../styles/navbar.css"

export const Navbar = () => {
  return (
    <div className='nav'>
    <div id='navbar'>
        <div id='logo'>
           <img width={"55%"} src="https://drive.google.com/uc?export=view&id=1m9E_BCvRql29Xr9Goe9LsbjYf3L0pxrr" alt="logo" />
        </div>
        <div id='menu'>
            <p>About</p>
            <p>Contact</p>
            <p>Resume</p>
        </div>
    </div>
    </div>
  )
}
