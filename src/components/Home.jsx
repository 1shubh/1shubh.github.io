import React from "react";
import "../styles/Home.css";
// import myImage from "../images/new.png"
import Resume from "../Resume/Shubham_Kumar_Resume.pdf";
import sample from "../video/Abstract3.mp4";
import video2 from "../video/background.mp4";
import { Heading, Text, Image, Stack, Button, Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { FaRegFilePdf } from "react-icons/fa";
import pic from "../images/pic.jpg";
import linkedinlogo from "../images/linkedin.png";
import gmaillogo from "../images/gmail.png";
import githublogo from "../images/github.png";
import fiverLogo from "../images/fiverr.png";

export const Home = () => {
  return (
    <Box border={"0px solid white"} height="100vh">
      <video autoPlay loop muted id="homeVideo">
        <source src={sample} type="video/mp4" />
      </video>
      <video autoPlay loop muted className="homevideo2">
        <source src={video2} type="video/mp4" />
      </video>
      <Box
        id="home"
        top={{ lg: "3%", md: "1%", base: "0%" }}
        w={{ lg: "80%", md: "80%", base: "100%" }}
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
            size={{ base: "xl", md: "xl", lg: "4xl" }}
            border="0px solid white"
            fontFamily={"nanumBold"}
          >
            Hello{" "}
            <Image
              border={"0px solid white"}
              marginLeft={"10px"}
              width={{ lg: "10%", md: "10%", base: "15%" }}
              src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif"
              alt="emoji"
            />
          </Heading>
          <Text
            textAlign={"justify"}
            fontFamily={"nanumBold"}
            color={"white"}
            fontSize={{ base: "16px", md: "17px", lg: "2xl" }}
          >
            I'm <span className="name">Shubham Kumar</span>. A passionate and
            self-motivated Full Stack Developer and Mobile App Developer with 2
            years of experience, strong technical skills, and a keen ability to
            learn and adapt across various technologies and domains.
          </Text>
          <Stack
            direction={"row"}
            align={"center"}
            border="0px solid white"
            width={{ lg: "50%", md: "50%", base: "80%" }}
            gap={{ lg: "10px", md: "10px", base: "2px" }}
            cursor={"pointer"}
          >
            <a href="https://github.com/1shubh" target="blank">
              <Tooltip label="GitHub">
                <Image
                  className="contactLogoGit"
                  boxSize={{ base: "50px", md: "40px", lg: "60px" }}
                  borderRadius={"50%"}
                  //   src="https://drive.google.com/uc?export=view&id=1D8GEGxYhBT2rAB1lvQb4mY0M_juqQnYX"
                  src={githublogo}
                />
              </Tooltip>
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-kumar-b617a4171/"
              target="blank"
            >
              <Tooltip label="LinkedIn">
                <Image
                  className="contactLogolink"
                  boxSize={{ base: "50px", md: "40px", lg: "60px" }}
                  borderRadius={"50%"}
                  backgroundColor={"transparent"}
                  //   src="https://drive.google.com/uc?export=view&id=1M50PI9GrYjJz8KrNVf-HG4i2KsSFiRd5"
                  src={linkedinlogo}
                />
              </Tooltip>
            </a>
            <a href="mailto:shubhkmr1806@gmail.com" target="blank">
              <Tooltip label="Email">
                <Image
                  className="contactLogoMail"
                  boxSize={{ base: "50px", md: "40px", lg: "60px" }}
                  borderRadius={"50%"}
                  backgroundColor={"transparent"}
                  //   src="https://drive.google.com/uc?export=view&id=1LYOgV4Mmt7ZPSKJuc0YkW039M4uwDd-P"
                  src={gmaillogo}
                />
              </Tooltip>
            </a>
            <a
              href="https://www.fiverr.com/shubhkmr18?up_rollout=true"
              target="blank"
            >
              <Tooltip label="Fiverr Profile">
                <Image
                  className="contactLogoMail"
                  boxSize={{ base: "50px", md: "40px", lg: "60px" }}
                  borderRadius={"50%"}
                  backgroundColor={"transparent"}
                  //   src="https://drive.google.com/uc?export=view&id=1LYOgV4Mmt7ZPSKJuc0YkW039M4uwDd-P"
                  src={fiverLogo}
                />
              </Tooltip>
            </a>
          </Stack>
          <a href={Resume} target="blank">
            <Button
              w={{ lg: "28%", md: "28%", base: "40%" }}
              h={{ base: "45px", lg: "50px", md: "30px" }}
              fontSize={{ lg: "20px", md: "14px", base: "15px" }}
              rightIcon={<FaRegFilePdf />}
              backgroundColor={"#ffc400"}
            >
              Resume
            </Button>
          </a>
        </Box>
        <Box
          id="avatar"
          w={{ base: "50%", md: "25%", lg: "30%" }}
          backgroundColor="#ffc400"
          borderRadius={"55%"}
          margin="auto"
        >
          <Image
            //  src="https://drive.google.com/uc?export=view&id=1ha1AqeEXSN713mRO0ddgHsLfW0qseY6r"
            src={pic}
            alt="avatar"
            objectFit={"cover"}
          />
        </Box>
      </Box>
    </Box>
  );
};
