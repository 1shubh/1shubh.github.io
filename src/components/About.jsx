import React from "react";
import "../styles/About.css";
// import myImage from "../images/new.png"
// import Resume from "../Resume/Shubham_Kumar_Resume.pdf"
// import sample from "../video/Abstract3.mp4";
import { Heading, Text, Image, Stack, Button, Box } from "@chakra-ui/react";
// import { Tooltip } from "@chakra-ui/react";
// import {FaRegFilePdf} from "react-icons/fa"
import pic from "../images/aboutgif.gif";
import Reveal from "react-reveal/Reveal";

export const About = () => {
  return (
    <div id="about">
      <Box letterSpacing={"4px"}>
        <Heading
          textAlign={"center"}
          color={"white"}
          size={{ lg: "xl", md: "xl", base: "xl" }}
          fontFamily={"nanumBold"}
        >
          About Me
        </Heading>
      </Box>
      <Box
        id="aboutContent"
        margin="auto"
        w={{ lg: "80%", md: "100%", base: "100%" }}
      >
        <div id="aboutLogo">
          <img src={pic} alt="" />
        </div>
        <div id="aboutText">
          <Reveal effect="fadeInUp">
            <Text color={"white"}>
              I am a results-driven Full Stack Developer and Mobile App
              Developer with 2 years of experience, passionate about building
              user-friendly web and mobile applications using React.js and React
              Native.
            </Text>
          </Reveal>
          <Text color={"white"}>
            I have developed multiple web applications, including four major
            projects, gaining valuable experience in teamwork, leadership, and
            communication. After months of rigorous training, I am now seeking
            an opportunity as a Full Stack Developer or Mobile App Developer.
          </Text>
        </div>
      </Box>
    </div>
  );
};
