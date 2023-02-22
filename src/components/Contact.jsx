import React from 'react'
import sample from "../video/Glow2.mp4"
import { Heading, Text, Image, Stack, Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Box id='contact' style={{color:"white"}}>
       <video width={"100%"} style={{position:"relative"}} autoPlay loop muted>
           <source src={sample} type='video/mp4' />
        </video>
      <Box 
        position={"absolute"}
        border={"0px solid #ffc400"}
        borderRadius="10px"
        w="80%" 
        margin={"auto"}
        textAlign="center"
        bottom={{lg:"2%",md:"",base:"0"}}
        left="10%"
        display={"grid"}
        gap={{lg:"20px",md:"10px",base:"1px"}}
        >
          <Heading size={{ lg: "xl", md: "md",base: "sm" }}>Contact Me</Heading>
         
          <Text fontSize={{ base: "10px", md: "14px", lg: "xl" }}>Contact Number : +917701973670</Text>
        
          <Text fontSize={{ base: "10px", md: "14px", lg: "xl" }}>Email : shubhkmr1806@gmail.com</Text>
    
          <Text fontSize={{ base: "10px", md: "14px", lg: "xl" }}>Address : Saharanpur, Uttar Pradesh</Text>
        
        <Stack
            direction={"row"}
            border="0px solid white"
            width={{ lg: "80%", md: "50%", base: "50%" }}
            gap={{ lg: "10px", md: "10px", base: "2px" }}
            margin="auto"
            cursor={"pointer"}
            display="flex"
            justifyContent={"center"}
          > 
          <a href="https://github.com/1shubh">
          <Tooltip label="GitHub">
            <Image
              className="contactLogoGit"
              boxSize={{ base: "20px", md: "40px", lg: "70px" }}
              borderRadius={"50%"}
              src="https://drive.google.com/uc?export=view&id=1D8GEGxYhBT2rAB1lvQb4mY0M_juqQnYX"
            />
            </Tooltip></a>
            <a href="https://www.linkedin.com/in/shubham-kumar-b617a4171/">
            <Tooltip label="LinkedIn">
            <Image
              className="contactLogolink"
              boxSize={{ base: "20px", md: "40px", lg: "70px" }}
              borderRadius={"50%"}
              backgroundColor={"transparent"}
              src="https://drive.google.com/uc?export=view&id=1M50PI9GrYjJz8KrNVf-HG4i2KsSFiRd5"
            /></Tooltip></a>
            <a href="mailto:shubhkmr1806@gmail.com">
            <Tooltip label="Email">
            <Image
              className="contactLogoMail"
              boxSize={{ base: "20px", md: "40px", lg: "70px" }}
              borderRadius={"50%"}
              backgroundColor={"transparent"}
              src="https://drive.google.com/uc?export=view&id=1LYOgV4Mmt7ZPSKJuc0YkW039M4uwDd-P"
            /></Tooltip></a>
          </Stack>
          <br />
          
       </Box>
    </Box>
  )
}
