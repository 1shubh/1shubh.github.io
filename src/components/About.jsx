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
              I am a Result-Oriented Frontend Web Developer with appropriate
              skills who's passionate about developing user-friendly web
              applications using MERN Stack.
            </Text>
          </Reveal>
          <Text color={"white"}>
            I built a number of web applications and 4 major projects. Learned a
            great deal about teamwork, leadership, and communication. After
            months of rigorous training, here I am looking for an opportunity as
            a Frontend Web Developer.
          </Text>
        </div>
      </Box>
    </div>
  );
};
