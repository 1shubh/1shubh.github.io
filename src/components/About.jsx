import React from 'react'
import style from "../styles/About.css"
import sample from "../video/Abstract3.mp4"
import { Heading,Text,Image,Stack,Button, Box } from '@chakra-ui/react'

export const About = () => {
  return (<>
   <video width={"100%"} style={{position:"relative"}} autoPlay loop muted>
      <source src={sample} type='video/mp4' /></video>
    <Box id="about">
      <Box className='about'>
        <Heading display={"flex"} color={"white"} size="4xl">Hello <img style={{marginLeft:"10px"}} width={"10%"} src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif" alt="emoji"/></Heading>
        <br />
        <Text textAlign={"justify"} fontFamily={"sans-serif"} color={"white"} fontSize="2xl">I'm <span className='name'>Shubham Kumar</span>. I am an enthusiastic and self-driven FullStack Web Developer. My skills include HTML, CSS, JavaScript, and ReactJS.</Text>
        <br />
        <Stack direction={"row"} border="0px solid white" width={"50%"} gap="10px" cursor={"pointer"}>
          <Image className='contactLogoGit'  boxSize='60px' borderRadius={"50%"} src='https://drive.google.com/uc?export=view&id=1D8GEGxYhBT2rAB1lvQb4mY0M_juqQnYX'/>
          <Image className='contactLogolink' boxSize='60px' borderRadius={"50%"} backgroundColor={"transparent"} src='https://drive.google.com/uc?export=view&id=1M50PI9GrYjJz8KrNVf-HG4i2KsSFiRd5'/>
          <Image className='contactLogoMail' boxSize='60px' borderRadius={"50%"} backgroundColor={"transparent"} src='https://drive.google.com/uc?export=view&id=1LYOgV4Mmt7ZPSKJuc0YkW039M4uwDd-P'/>
        </Stack>
        <br />
        <Button w={"28%"}>Contact Me</Button>
      </Box>
      <Box id='avatar'>
       <Image src="https://drive.google.com/uc?export=view&id=1ha1AqeEXSN713mRO0ddgHsLfW0qseY6r" alt="avatar" />
      </Box>
     </Box>
     
     </>
  )
}
