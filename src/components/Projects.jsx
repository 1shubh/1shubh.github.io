import React from "react";
import wallmart from "../video/wallmart.png";
import travelocity from "../video/travelocity.png";
import bookit from "../video/bookit.png";
import lovoda from "../video/lovoda.png";
import antony from "../video/antony.png";
import GitHubCalendar from "react-github-calendar";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import js from "../images/js.png";
import redux from "../images/redux.png";
import chakra from "../images/chakra.png";
import rest from "../images/rest.png";
import nextjs from "../images/nextjs.png";
import tailwind from "../images/tailwind.png";
import { Tooltip } from "@chakra-ui/react";
import { Box, Image, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Zoom from "react-reveal/Zoom";
import ar from "../images/ar.png";
import toyota from "../images/toyota.png";
const projectsData = [
  {
    imgUrl: toyota,
    title: "Toyota India Urban Cruiser page",
    discription:
      "Developed a static information page for Toyota India, showcasing all the details of the newly launched Urban Cruiser. This page provides users with a comprehensive overview of the car's features, specifications, and highlights, ensuring an engaging and informative experience.",
    techStack: [
      {
        tech: html,
        tooltip: "HTML5",
      },
      {
        tech: css,
        tooltip: "CSS",
      },
      { tech: js, tooltip: "JavaScript" },
    ],
    github: "",
    deployed: "https://artificialreality.in/",
  },
  {
    imgUrl: ar,
    title: "Artificial Reality",
    discription:
      "Artificial Reality is a creative content production studio specializing in CGI, Print, Promotional Materials , Web Applications, Films and Videos.",
    techStack: [
      {
        tech: nextjs,
        tooltip: "Next.JS",
      },
      {
        tech: tailwind,
        tooltip: "Tailwind CSS",
      },
      { tech: chakra, tooltip: "Chakra UI" },
    ],
    github: "",
    deployed: "https://artificialreality.in/",
  },
  {
    imgUrl: antony,
    title: "Antony Waste",
    discription:
      "Antony Waste is an indian waste Management company which focuses on Green Future, Clean Energy Generation, Recycling.",
    techStack: [
      {
        tech: nextjs,
        tooltip: "Next.JS",
      },
      {
        tech: tailwind,
        tooltip: "Tailwind CSS",
      },
      { tech: chakra, tooltip: "Chakra UI" },
    ],
    github: "",
    deployed: "https://antony-waste.web.app/",
  },
  {
    imgUrl: wallmart,
    title: "Wallmart.com (clone)",
    discription:
      "Wallmart.com is an American based ecommerce website where a user can buy products from multiple categories like fashion, electronics etc.",
    techStack: [
      { tech: react, tooltip: "ReactJS" },
      { tech: css, tooltip: "CSS" },
      { tech: redux, tooltip: "Redux" },
      { tech: chakra, tooltip: "Chakra UI" },
      { tech: rest, tooltip: "REST API" },
    ],
    github: "https://github.com/1shubh/wallmart",
    deployed: "https://zingy-muffin-f72b2f.netlify.app/",
  },
  {
    imgUrl: travelocity,
    title: "Travelocity.com",
    discription:
      "Travelocity.com is an online travel agency owned by Expedia Group.Where a user can book Hotels.",
    techStack: [
      { tech: react, tooltip: "ReactJS" },
      { tech: css, tooltip: "CSS" },
      { tech: chakra, tooltip: "Chakra UI" },
      { tech: rest, tooltip: "REST API" },
    ],
    github: "https://github.com/1shubh/-defiant-wall-1211",
    deployed: "https://melodic-dasik-b53159.netlify.app/",
  },
  {
    imgUrl: bookit,
    title: "Booking.com",
    discription:
      "Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holding.",
    techStack: [
      { tech: html, tooltip: "HTML" },
      { tech: css, tooltip: "CSS" },
      { tech: js, tooltip: "JavaScript" },
      { tech: rest, tooltip: "REST API" },
    ],
    github: "https://github.com/1shubh/Bookit.com",
    deployed: "https://regal-youtiao-ed791b.netlify.app/",
  },
  {
    imgUrl: lovoda,
    title: "Lovoda.com",
    discription:
      "Lovoda.com is an American based E-commerce website where users can buy jwellery.",
    techStack: [
      { tech: html, tooltip: "HTML" },
      { tech: css, tooltip: "CSS" },
      { tech: js, tooltip: "JavaScript" },
    ],
    github: "https://github.com/1shubh/cynical-party-1080",
    deployed: "https://sage-rabanadas-8b10c9.netlify.app/",
  },
];

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
            <Box border={"2px solid #ffc400"} borderRadius="10px" height={"full"}>
              <Box w={"100%"}>
                <Image
                  w={"100%"}
                  borderTopRadius="7px"
                  src={ele.imgUrl}
                  alt="img"
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
                w={"90%"}
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
                  <Box display={"flex"} w={"60%"} border="0px solid white">
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
                  justifyContent={"space-between"}
                >
                  <a href={ele.github}>
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
                  <a href={ele.deployed}>
                    <Button
                      backgroundColor={"#ffc400"}
                      color="black"
                      leftIcon={<SiNetlify />}
                      size={{ base: "sm", lg: "lg", md: "md" }}
                    >
                      Deployed
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
