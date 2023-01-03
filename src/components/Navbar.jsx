import { Box,Image,Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import style from "../styles/navbar.css"

export const Navbar = () => {
  const [navbar,setNavbar] = useState(false);

  const ChangeNavbar = () =>{
      if(window.scrollY >= 80){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
  }

  window.addEventListener("scroll",ChangeNavbar)
  return (
    <Box className={navbar ? "nav active" : "nav"}>
    <Box id='navbar' 
        display={{base: 'grid', md: 'flex', lg: 'flex'}}
        justifyContent={{lg:"space-between",md:"space-between"}} 
        margin={{lg:"auto",md:"auto",base:"auto"}}>
        
        <Box id='logo'display={{base:"center"}} 
        justifyContent={{base:"center",md:"left"}} 
        alignItems={{base:"center",md:"start"}} 
        width={{base:"100%",md:"50%",lg:"32%"}}>
           
           <Image 
           width={{base:"50%",md:"70%",lg:"85%"}} 
           src="https://drive.google.com/uc?export=view&id=1m9E_BCvRql29Xr9Goe9LsbjYf3L0pxrr" 
           alt="logo" 
           />

        </Box>
        <Box id='menu' 
         width={{base:"100%",md:"40%",lg:"36%"}}>
            <Text fontSize={{base:"15px",md:"18px",lg:"18"}}>About</Text>
            <Text fontSize={{base:"15px",md:"18px",lg:"18"}}>Skills</Text>
            <Text fontSize={{base:"15px",md:"18px",lg:"18"}}>Projects</Text>
            <Text fontSize={{base:"15px",md:"18px",lg:"18"}}>Contact & Resume</Text>
        </Box>
    </Box>
    </Box>
  )
}
