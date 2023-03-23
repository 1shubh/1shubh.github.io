import React from "react";
import "../styles/Home.css";
// import myImage from "../images/new.png"
import Resume from "../Resume/Shubham_Kumar_Resume.pdf"
import sample from "../video/Abstract3.mp4";
import { Heading, Text, Image, Stack, Button, Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import {FaRegFilePdf} from "react-icons/fa"
import pic from "../images/pic.png"
import linkedinlogo from "../images/linkedin.png"
import gmaillogo from  "../images/gmail.png"
import githublogo from "../images/github.png"


export const Home = () => {
  return (
    <>
      <video
        style={{ position: "relative" }}
        autoPlay
        loop
        muted
        id="homeVideo"
      >
        <source src={sample} type="video/mp4" />
      </video>
    
      <Box
        id="home"
        top={{ lg: "3%", md: "1%", base: "0%" }}
        w={{ lg: "80%", md: "80%", base: "95%" }}
        left={{ lg: "10%", md: "10%", base: "2%" }}
        alignItems={{ md: "center", base: "center" }}
      >
        <Box
          className="about"
          display={"grid"}
          gap={{ lg: "20px", md: "15px", sm: "5px" }}
        >
          <Heading
            display={"flex"}
            color={"white"}
            size={{ base: "sm", md: "xl", lg: "4xl" }}
            border="0px solid white"
          >
            Hello{" "}
            <img
              style={{ marginLeft: "10px" }}
              width={"10%"}
              src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif"
              alt="emoji"
            />
            {/* <Box border={"0px solid white"}>
             <Image border={"0px solid blue"} marginTop="20px" src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=30&duration=3000&pause=1000&color=ffc400&width=435&lines=I'm+Shubham+Kumar;Full+Stack+Web+Developer;Welcome+to+My+profile" alt="my"/>
            </Box> */}
            </Heading>
          <Text
            textAlign={"justify"}
            fontFamily={"sans-serif"}
            color={"white"}
            fontSize={{ base: "10px", md: "17px", lg: "2xl" }}
          >
            I'm <span className="name">Shubham Kumar</span>. I am an
            enthusiastic and self-driven FullStack Web Developer. My skills
            include HTML, CSS, JavaScript, and ReactJS.
          </Text>

          <Stack
            direction={"row"}
            border="0px solid white"
            width={{ lg: "50%", md: "50%", base: "50%" }}
            gap={{ lg: "10px", md: "10px", base: "2px" }}
            cursor={"pointer"}
          > 
          <a href="https://github.com/1shubh">
          <Tooltip label="GitHub">
            <Image
              className="contactLogoGit"
              boxSize={{ base: "20px", md: "40px", lg: "60px" }}
              borderRadius={"50%"}
            //   src="https://drive.google.com/uc?export=view&id=1D8GEGxYhBT2rAB1lvQb4mY0M_juqQnYX"
             src={githublogo}
            />
            </Tooltip></a>
            <a href="https://www.linkedin.com/in/shubham-kumar-b617a4171/">
            <Tooltip label="LinkedIn">
            <Image
              className="contactLogolink"
              boxSize={{ base: "20px", md: "40px", lg: "60px" }}
              borderRadius={"50%"}
              backgroundColor={"transparent"}
            //   src="https://drive.google.com/uc?export=view&id=1M50PI9GrYjJz8KrNVf-HG4i2KsSFiRd5"
            src={linkedinlogo}
            /></Tooltip></a>
            <a href="mailto:shubhkmr1806@gmail.com">
            <Tooltip label="Email">
            <Image
              className="contactLogoMail"
              boxSize={{ base: "20px", md: "40px", lg: "60px" }}
              borderRadius={"50%"}
              backgroundColor={"transparent"}
            //   src="https://drive.google.com/uc?export=view&id=1LYOgV4Mmt7ZPSKJuc0YkW039M4uwDd-P"
            src={gmaillogo}
            /></Tooltip></a>
          </Stack>
          <a href={Resume} download><Button
            w={{ lg: "28%", md: "28%", base: "28%" }}
            h={{ base: "15px", lg: "50px", md:"30px" }}
            fontSize={{ lg: "20px", md: "14px", base: "5px" }}
            rightIcon={<FaRegFilePdf/>}
            backgroundColor={"#ffc400"}
          >
            Resume
          </Button></a>
        </Box>
        <Box
          id="avatar"
          w={{ base: "20%", md: "25%", lg: "30%" }}
          marginTop={{ base: "35px" }}
          backgroundColor="#ffc400"
          borderRadius={"55%"}
          height="20%"
        >
          <Image
            //  src="https://drive.google.com/uc?export=view&id=1ha1AqeEXSN713mRO0ddgHsLfW0qseY6r"
            src={pic}
            alt="avatar"
          />
        </Box>
      </Box>
    </>
  );
};
