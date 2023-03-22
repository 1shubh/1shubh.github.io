import React from "react";
import { Box, Heading, Image, Text, Stack, Flex } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import mongologo from "../images/mongo.png"
import firebaselogo from "../images/firebase.png"
import typescriptlogo from "../images/typescript.png"
import expresslogo from "../images/express.png"
import reduxLogo from "../images/redux.png"
import nextJslogo from "../images/nextjs.png"
import vsCodeLogo from "../images/vscode.png"
import npmlogo from "../images/npm.png"
import "../styles/skills.css"
import { motion } from "framer-motion";
// import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';

// import sample from "../video/Glow2.mp4";

export const Skills = () => {

  let TechSkills = [
    {
      logo:"https://drive.google.com/uc?export=view&id=1pgI8xpQJLGsPcSmsIHW6KM1DGycJ5xLb",
      tooltip:"HTML"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1kWtZ5XRXL4OOFylACwbduu74fWtCSwBb",
      tooltip:"CSS"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1GGy-4r8QH1VTNQEwV_BsDZ_0ClhK2xQY",
      tooltip:"JavaScript"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1komhUgbTWnazURaojc5gKej0xshEMVxP",
      tooltip:"ReactJs"
    },
    {
      logo:typescriptlogo,
      tooltip:"TypeScript"
    },
    {
      logo:nextJslogo,
      tooltip:"Next JS"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1oRtnSRle6HIf2XdL2JJvkUBeBBWngOe2",
      tooltip:"GitBash"
    },
    {
      logo:reduxLogo,
      tooltip:"Redux"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1ft72gIzlw6MB8kXTlwUYKolGZXQzkQgX",
      tooltip:"Node Js"
    },
    {
      logo:expresslogo,
      tooltip:"Express JS"
    },
    {
      logo:mongologo,
      tooltip:"Mongo DB"
    },
    {
      logo:firebaselogo,
      tooltip:"Firebase"
    },
  ]
  let otherTools = [
    {
      logo:"https://drive.google.com/uc?export=view&id=1wDOHnWxvusjUROx4s_ncdHUoYyyXGV_9",
      tooltip:"Github"
    },
    {
      logo:vsCodeLogo,
      tooltip:"VS Code"
    },
    {
      logo:npmlogo,
      tooltip:"NPM"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=1ZcoXnXr6OJ5en1HxoD8r3HMDu6hrwCNn",
      tooltip:"Netlify"
    },
    {
      logo:"https://drive.google.com/uc?export=view&id=10uvtFnmbMUXTXVhEtsh9JivB_Cx8zG9O",
      tooltip:"Heroku"
    }
  ]
  return (
    <>
      <Box
        margin={"auto"}
        margin-top={{ lg: "100px", md: "100px", sm: "100px" }}
        w={{lg:"80%",md:"90%",base:"90%"}}
        border="0px solid orange"
        id="skills"
        marginTop={"50px"}
      >
        <Heading
          color={"white"}
          textAlign={"center"}
          size={{ lg: "2xl", md: "xl", base: "xl" }}
        >
          Technical Skills
        </Heading>
        <Box
          w={"100%"}
          border="0px solid white"
          margin={"auto"}
          marginTop="20px"
          // display={{ lg: "flex", md: "grid", base: "grid" }}
          justifyContent="center"
        >
          <Box
            textAlign={"center"}
            border="0px solid white"
            w={{ lg: "100%", md: "100%", base: "100%" }}
          >
            <Text
              color={"#ffc400"}
              fontSize={{ lg: "40px", md: "35px", base: "25px" }}
            >
              Full Stack Development
            </Text>
            <Box
            margin="auto"
            w={{ lg: "100%", md: "100%",base:"100%" }}
            border={"0px solid #ffc400"}
            display="grid"
            gridTemplateColumns={{lg:"repeat(6,1fr)",md:"repeat(4,1fr)",base:"repeat(2,1fr)"}}
            gap="20px"
            padding={"10px"}
            cursor={"pointer"}
            >
              {
                TechSkills.map((logo)=>(
                  <LightSpeed left>
                  <Box 
                  border={"0px solid #ffc400"}
                  paddingTop="20px"
                  paddingBottom={"20px"}
                  id="logoImages"
                  >
                  <div id="skillslogo">
                  <Image
                   
                   display={"block"}
                   margin="auto"
                   boxSize={{ lg: "100px", md: "60px", base: "60px" }}
                   src={logo.logo}
                  />
                  <Text color={"#ffc400"}>{logo.tooltip}</Text>
                  </div>
                 </Box>
                 </LightSpeed>
                ))
              }
            </Box>
          </Box>
        </Box>
        <Box
          border="0px solid white"
          margin={"auto"}
          marginTop={{lg:"60px",md:"0px"}}
          display={{ lg: "flex", md: "grid", sm: "grid" }}
          justifyContent="center"
        >
          <Box
            textAlign={"center"}
            border="0px solid white"
            w={{ lg: "100%", md: "100%", base: "100%" }}
          >
            <Text
              color={"#ffc400"}
              fontSize={{ lg: "40px", md: "35px", base: "25px" }}
            >
              Other Tools
            </Text>
            <Box
              margin="auto"
              w={{ lg: "100%", md: "100%",base:"100%" }}
              border={"0px solid #ffc400"}
              display="grid"
              gridTemplateColumns={{lg:"repeat(5,1fr)",md:"repeat(4,1fr)",base:"repeat(2,1fr)"}}
              gap="20px"
              padding={"10px"}
              cursor={"pointer"}
            >
              {
                otherTools.map((logo)=>(
                  <Box 
                  border={"1px solid #ffc400"}
                  paddingTop="20px"
                  paddingBottom={"20px"}
                  id="logoImages"
                  >
                  <div id="skillslogo">
                  <Image
                   
                   display={"block"}
                   margin="auto"
                   boxSize={{ lg: "100px", md: "60px", base: "60px" }}
                   src={logo.logo}
                  />
                  <Text color={"#ffc400"}>{logo.tooltip}</Text>
                  </div>
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
