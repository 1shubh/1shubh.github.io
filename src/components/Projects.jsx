import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "@chakra-ui/react";
import { Box, Image, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Zoom from "react-reveal/Zoom";
import { projectsData } from "../lib/projects";
export const Projects = () => {
  return (
    <div style={{ color: "white" }} id="projects">
      <Heading
        color={"white"}
        textAlign="center"
        marginTop="20px"
        fontSize={{ lg: "4xl", md: "3xl", sm: "xl" }}
        letterSpacing={"4px"}
        fontFamily={"nanumBold"}
      >
        Build By Me !
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          base: "repeat(1,1fr)",
        }}
        width={{ lg: "80%", md: "80%", base: "90%" }}
        margin="auto"
        marginTop={{ lg: "50px", md: "40px", base: "20px" }}
        gap="20px"
      >
        {projectsData.map((ele) => (
          <Zoom>
            <Box
              border={"2px solid #ffc400"}
              borderRadius="10px"
              height={"full"}
              justifyContent={"space-between"}
              display={"grid"}
              pb={"20px"}
            >
              <Box w={"100%"} h={"250px"}>
                <Image
                  w={"100%"}
                  h={"full"}
                  borderTopRadius="7px"
                  src={ele.imgUrl}
                  alt="img"
                  objectFit={"cover"}
                />
                {/* <video
                    style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }}
                    autoPlay
                    loop
                    muted
                  >
             <source src={ele.imgUrl} type="video/mp4" />
           </video> */}
              </Box>
              <Grid
                border="0px solid #ffc400"
                w={"100%"}
                h={"full"}
                margin="auto"
                padding={"10px"}
                gap="10px"
                justifyContent={"space-between"}
              >
                <Text
                  fontFamily={"sans-serif"}
                  letterSpacing={"4px"}
                  color="#ffc400"
                  fontSize={{ lg: "25px", md: "25px", base: "18px" }}
                >
                  {ele.title}
                </Text>
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "14px", lg: "md", md: "17px" }}
                >
                  {ele.discription}
                </Text>
                <Box>
                  <Text
                    style={{ color: "#ffc400", fontSize: "18px" }}
                    fontSize={{ base: "14px", lg: "md", md: "17px" }}
                    letterSpacing={"3px"}
                  >
                    Tech Stack :
                  </Text>
                  <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                    w={"60%"}
                    border="0px solid white"
                    marginTop={"10px"}
                  >
                    {ele.techStack.map((image) => (
                      <Tooltip label={image.tooltip}>
                        <Image
                          border={"0px solid blue"}
                          boxSize="20%"
                          cursor={"pointer"}
                          marginRight="10px"
                          display={"block"}
                          margin={"auto"}
                          src={image.tech}
                        />
                      </Tooltip>
                    ))}
                  </Box>
                </Box>
                <Box
                  border="0px solid red"
                  w={{ lg: "60%", md: "42%", base: "80%" }}
                  display={"flex"}
                  // justifyContent={{sm:"space-between"}}
                  gap={"20px"}
                  mt={"10px"}
                >
                  <a href={ele.github} target="_blank">
                    <Button
                      backgroundColor={"#ffc400"}
                      color="black"
                      leftIcon={<FaGithub />}
                      size={{ base: "sm", lg: "lg", md: "md" }}
                      disabled={ele.github === "" ? true : false}
                    >
                      Github
                    </Button>
                  </a>
                  <a href={ele.deployed}  target="_blank">
                    <Button
                      backgroundColor={"#ffc400"}
                      color="black"
                      leftIcon={<SiNetlify />}
                      size={{ base: "sm", lg: "lg", md: "md" }}
                    >
                      {ele.type === "app" ? "Apk file" : "Deployed"}
                    </Button>
                  </a>
                </Box>
              </Grid>
            </Box>
          </Zoom>
        ))}
      </Box>
      {/* Git Stats */}
      <Box width={"80%"} margin="auto">
        <Heading
          textAlign={"center"}
          marginTop={"50px"}
          fontSize={{ lg: "4xl", md: "3xl", sm: "xl" }}
          fontFamily={"nanumBold"}
        >
          My Git Stats
        </Heading>
        <GitHubCalendar
          style={{
            margin: "auto",
            marginTop: "20px",
            padding: "20px",
            border: "2px solid #ffc400",
            borderRadius: "10px",
          }}
          username="1shubh"
        />
        <Box
          display={{ lg: "flex", md: "grid", base: "grid" }}
          gap={{ lg: "0px", md: "20px", base: "20px" }}
          justifyContent="space-around"
          border="0px solid white"
          marginTop={"20px"}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=1shubh&show_icons=true&locale=en"
            alt="1shubh"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=1shubh&"
            alt="1shubh"
          />
        </Box>
      </Box>
    </div>
  );
};

// https://drive.google.com/file/d/1tX-s0lUhUkYX-KyCdcCGEbmeuD9pnEYb/view?usp=sharing
