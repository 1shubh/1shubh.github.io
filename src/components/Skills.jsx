import React from 'react'
import {Box,Heading,Image,Text,Stack} from "@chakra-ui/react"
import { Tooltip } from '@chakra-ui/react'
import sample from "../video/Glow2.mp4"



export const Skills = () => {
  return (<>
  <video width={"100%"} style={{position:"relative"}} autoPlay loop muted>
      <source src={sample} type='video/mp4' /></video>
    <Box position={"absolute"} margin-top={{lg:"100px",md:"100px",sm:"100px"}} w="80%" top="46%" left={"10%"} border="0px solid white">
         <Heading color={"white"} textAlign={"center"} size={{lg:"3xl",md:"2xl",sm:"xl"}}>Here's what I do</Heading>
         <Box w={"90%"} border="0px solid white" margin={"auto"} marginTop="60px" display={{lg:"flex",md:"grid",sm:"grid"}} justifyContent="center">
            <Box border={"0px solid red"} w={{lg:"50%",md:"100%",sm:"100%"}}>
              <Image w={"100%"} src="https://drive.google.com/uc?export=view&id=1Urho4gOtxrzxJzp8N-RH2qOAUMnvvPX2"/>
            </Box>
             <Box textAlign={"center"} border="0px solid white" w={{lg:"50%",md:"100%",base:"100%"}}>
               <Text color={"#ffc400"} fontSize={{lg:"40px",md:"30px",sm:"20px"}}>Full Stack Development</Text>
               <Stack direction={"row"} margin="auto" w={{lg:"80%",md:"80%",}} border={"0px solid blue"} gap="10px" padding={"10px"} justifyContent="space-around" cursor={"pointer"}>
                  <Tooltip label="HTML">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1pgI8xpQJLGsPcSmsIHW6KM1DGycJ5xLb'/>
                  </Tooltip>
                  <Tooltip label="CSS">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1kWtZ5XRXL4OOFylACwbduu74fWtCSwBb'/>
                  </Tooltip>
                  <Tooltip label="JavaScript">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1GGy-4r8QH1VTNQEwV_BsDZ_0ClhK2xQY'/>
                  </Tooltip>
                  <Tooltip label="ReactJS">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1komhUgbTWnazURaojc5gKej0xshEMVxP'/>
                  </Tooltip>
                  <Tooltip label="NodeJS">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1ft72gIzlw6MB8kXTlwUYKolGZXQzkQgX'/>
                  </Tooltip>
                  <Tooltip label="GitBash">
                    <Image boxSize={{lg:"75px", md:"60px", base:"40px"}} src='https://drive.google.com/uc?export=view&id=1oRtnSRle6HIf2XdL2JJvkUBeBBWngOe2'/>
                  </Tooltip>
               </Stack>
            </Box>
         </Box>
    </Box>
    </>
  )
}
// https://drive.google.com/file/d/1oRtnSRle6HIf2XdL2JJvkUBeBBWngOe2/view?usp=sharing