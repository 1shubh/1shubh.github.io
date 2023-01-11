import React from 'react'
import { Box,Image,Heading,Text, Button } from '@chakra-ui/react'
import {FaGithub} from "react-icons/fa"
import { SiNetlify } from "react-icons/si";

export const Projects = () => {
  const url = "https://drive.google.com/uc?export=view&id="
  return (
    <div style={{color:"white"}}>
      <Heading color={"white"} textAlign="center" size={"2xl"}>Projects</Heading>
      <Box display={"grid"} gridTemplateColumns="repeat(2,1fr)" width={"90%"} margin="auto" marginTop={"50px"} gap="20px">
        <Box border={"2px solid #ffc400"} borderRadius="10px">
             <Box w={"100%"}>
             <Image w={"100%"} borderTopRadius="7px" src={`${url}1q180PKNykuZ44HTR2D9o9G7h_Rye40HT`} alt="img"/>
             </Box>
          <Box border="0px solid #ffc400" w={"90%"} margin="auto" padding={"10px"}>
             <Text fontFamily={"sans-serif"} color="#ffc400"  fontSize={"25px"}>Travelocity.com</Text>
             <Text fontFamily={"sans-serif"}>Travelocity.com is an online travel agency owned by Expedia Group.Where a user can book Hotels.</Text>
             <Text><span style={{color:'#ffc400',fontSize:"18px"}}>Tech Stack :</span> ReactJs, Chakra UI</Text>
             <Box border="0px solid red" w="42%" display={"flex"} justifyContent={"space-between"} >
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<FaGithub/>}>Github</Button>
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<SiNetlify/>}>Deployed</Button>
             </Box>
          </Box>
        </Box>
        <Box border={"2px solid #ffc400"} borderRadius="10px">
        <Box w={"100%"}>
          <Image w={"100%"} borderTopRadius="7px" src={`${url}1ZjKgDg4qsesXVxJktjJlJ64qoh2bnN-9`} alt="img"/></Box>
          <Box border="0px solid #ffc400" w={"90%"} margin="auto" padding={"10px"}>
             <Text fontFamily={"sans-serif"} color="#ffc400"  fontSize={"25px"}>Booking.com</Text>
             <Text fontFamily={"sans-serif"}>Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holding.</Text>
             <Text><span style={{color:'#ffc400',fontSize:"18px"}}>Tech Stack :</span>HTML, CSS, JavaScript</Text>
             <Box border="0px solid red" w="42%" display={"flex"} justifyContent={"space-between"} >
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<FaGithub/>}>Github</Button>
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<SiNetlify/>}>Deployed</Button>
             </Box>
          </Box>
        </Box>
        <Box border={"2px solid #ffc400"} borderRadius="10px">
          <Box w={"100%"}>
          <Image borderTopRadius="7px" src={`${url}1jipT1ryZT2fKWwY9Zz-ArIsTYgNJQ077`} alt="img"/></Box>
          <Box border="0px solid #ffc400" w={"90%"} margin="auto" padding={"10px"}>
             <Text fontFamily={"sans-serif"} color="#ffc400"  fontSize={"25px"}>Lovoda.com</Text>
             <Text fontFamily={"sans-serif"}>Lovoda.com is an American based E-commerse website where users can buy jwellery.</Text>
             <Text><span style={{color:'#ffc400',fontSize:"18px"}}>Tech Stack : </span>HTML, CSS, JavaScript</Text>
             <Box border="0px solid red" w="42%" display={"flex"} justifyContent={"space-between"} >
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<FaGithub/>}>Github</Button>
             <Button backgroundColor={"#ffc400"} color="black" leftIcon={<SiNetlify/>}>Deployed</Button>
             </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
//https://drive.google.com/file/d/1jipT1ryZT2fKWwY9Zz-ArIsTYgNJQ077/view?usp=sharing