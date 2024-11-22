import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import mongologo from "../images/mongo.png";
import firebaselogo from "../images/firebase.png";
import typescriptlogo from "../images/typescript.png";
import expresslogo from "../images/express.png";
import reduxLogo from "../images/redux.png";
import nextJslogo from "../images/nextjs.png";
import vsCodeLogo from "../images/vscode.png";
import npmlogo from "../images/npm.png";
import cssLogo from "../images/css.png";
import htmlLogo from "../images/html.png";
import javascriptLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import nativeLogo from "../images/native.png";
import githubLogo from "../images/github.png";
import netlifyLogo from "../images/netlify.png";
import herokuLogo from "../images/heroku.webp";
import "../styles/skills.css";

import LightSpeed from "react-reveal/LightSpeed";

// import sample from "../video/Glow2.mp4";

export const Skills = () => {
  let TechSkills = [
    {
      logo: reactLogo,
      tooltip: "ReactJs",
    },
    {
      logo: nextJslogo,
      tooltip: "Next JS",
    },
    {
      logo: nativeLogo,
      tooltip: "React Native",
    },
    {
      logo: htmlLogo,
      tooltip: "HTML",
    },
    {
      logo: cssLogo,
      tooltip: "CSS",
    },
    {
      logo: javascriptLogo,
      tooltip: "JavaScript",
    },

    {
      logo: typescriptlogo,
      tooltip: "TypeScript",
    },

    {
      logo: reduxLogo,
      tooltip: "Redux",
    },
    // {
    //   logo:
    //     "https://drive.google.com/uc?export=view&id=1ft72gIzlw6MB8kXTlwUYKolGZXQzkQgX",
    //   tooltip: "Node Js",
    // },
    // {
    //   logo: expresslogo,
    //   tooltip: "Express JS",
    // },
    // {
    //   logo: mongologo,
    //   tooltip: "Mongo DB",
    // },
    {
      logo: firebaselogo,
      tooltip: "Firebase",
    },
  ];
  let otherTools = [
    {
      logo: githubLogo,
      tooltip: "Github",
    },
    {
      logo: vsCodeLogo,
      tooltip: "VS Code",
    },
    {
      logo: npmlogo,
      tooltip: "NPM",
    },
    {
      logo: netlifyLogo,
      tooltip: "Netlify",
    },
    {
      logo: herokuLogo,
      tooltip: "Heroku",
    },
  ];
  return (
    <>
      <Box
        margin={"auto"}
        margin-top={{ lg: "100px", md: "100px", sm: "100px" }}
        w={{ lg: "80%", md: "90%", base: "90%" }}
        border="0px solid orange"
        id="skills"
        marginTop={"50px"}
        letterSpacing={"4px"}
      >
        <Heading
          color={"white"}
          textAlign={"center"}
          size={{ lg: "xl", md: "xl", base: "xl" }}
          fontFamily={"nanumBold"}
        >
          My Skills
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
              w={{ lg: "100%", md: "100%", base: "100%" }}
              border={"0px solid #ffc400"}
              display="grid"
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(4,1fr)",
                base: "repeat(2,1fr)",
              }}
              gap="20px"
              padding={"10px"}
              cursor={"pointer"}
            >
              {TechSkills.map((logo) => (
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
                        boxSize={{ lg: "100px", md: "90px", base: "60px" }}
                        src={logo.logo}
                      />
                      <Text color={"#ffc400"}>{logo.tooltip}</Text>
                    </div>
                  </Box>
                </LightSpeed>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          border="0px solid white"
          margin={"auto"}
          marginTop={{ lg: "60px", md: "0px" }}
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
              w={{ lg: "100%", md: "100%", base: "100%" }}
              border={"0px solid #ffc400"}
              display="grid"
              gridTemplateColumns={{
                lg: "repeat(5,1fr)",
                md: "repeat(5,1fr)",
                base: "repeat(2,1fr)",
              }}
              gap="20px"
              padding={"10px"}
              cursor={"pointer"}
            >
              {otherTools.map((logo) => (
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
                        boxSize={{ lg: "100px", md: "90px", base: "60px" }}
                        src={logo.logo}
                      />
                      <Text color={"#ffc400"}>{logo.tooltip}</Text>
                    </div>
                  </Box>
                </LightSpeed>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
