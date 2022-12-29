import React from 'react'
import style from "../styles/navbar.css"

export const Navbar = () => {
  return (
    <div className='nav'>
    <div id='navbar'>
        <div id='logo'>
           <img width={"45%"} src="https://drive.google.com/uc?export=view&id=1fz03eh6uKWkQmFJYVfCfZfXZTCeaUe3v" alt="logo" />
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
