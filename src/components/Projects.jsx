import React from "react";
import { Box, Image, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const projectsData = [
  {
    imgUrl : "1q180PKNykuZ44HTR2D9o9G7h_Rye40HT",
    title : "Travelocity.com",
    discription : "Travelocity.com is an online travel agency owned by Expedia Group.Where a user can book Hotels.",
    techStack : " ReactJs, Chakra UI",
    github : "https://github.com/1shubh/-defiant-wall-1211",
    deployed : "https://melodic-dasik-b53159.netlify.app/"
  },
  {
    imgUrl : "1ZjKgDg4qsesXVxJktjJlJ64qoh2bnN-9",
    title : "Booking.com",
    discription : "Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holding.",
    techStack : " HTML, CSS, JavaScript",
    github : "https://github.com/1shubh/Bookit.com",
    deployed : "https://regal-youtiao-ed791b.netlify.app/"
  },
  {
    imgUrl : "1jipT1ryZT2fKWwY9Zz-ArIsTYgNJQ077",
    title : "Lovoda.com",
    discription : "Lovoda.com is an American based E-commerse website where users can buy jwellery.",
    techStack : "HTML CSS JavaScript",
    github : "https://github.com/1shubh/cynical-party-1080",
    deployed : "https://sage-rabanadas-8b10c9.netlify.app/"
  },
  {
    imgUrl : "1tX-s0lUhUkYX-KyCdcCGEbmeuD9pnEYb",
    title : "Youtube.com",
    discription : "Youtube.com is a video streaming website where a user can search and watch videos",
    techStack : "HTML CSS JavaScript Api",
    github : "https://github.com/1shubh/Youtube.com-clone-",
    deployed : "https://dazzling-kitten-99ca71.netlify.app/"
  },
]

export const Projects = () => {
  const url = "https://drive.google.com/uc?export=view&id=";
  return (
    <div style={{ color: "white" }} id="projects">
      <Heading color={"white"} textAlign="center" size={"2xl"} marginTop="20px">
         Build By Me !
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
        width={{lg:"80%",md:"80%",base:"90%"}}
        margin="auto"
        marginTop={"50px"}
        gap="20px"
      >
        {projectsData.map((ele)=>(
          <Box border={"2px solid #ffc400"} borderRadius="10px">
          <Box w={"100%"}>
            <Image
              w={"100%"}
              borderTopRadius="7px"
              src={`${url}${ele.imgUrl}`}
              alt="img"
            />
          </Box>
          <Grid
            border="0px solid #ffc400"
            w={"90%"}
            margin="auto"
            padding={"10px"}
            gap="10px"
          >
            <Text fontFamily={"sans-serif"} color="#ffc400" fontSize={{lg:"25px",md:"25px",base:"18px"}}>
              {ele.title}
            </Text>
            <Text fontFamily={"sans-serif"} fontSize={{base:"14px",lg:"md",md:"17px"}}>
             {ele.discription}
            </Text>
            <Text fontSize={{base:"14px",lg:"md",md:"17px"}}>
              <span style={{ color: "#ffc400", fontSize: "18px" }}>
                Tech Stack :
              </span> {ele.techStack}</Text>
            <Box
              border="0px solid red"
              w={{lg:"60%",md:"42%",base:"80%"}}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <a href={ele.github}><Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<FaGithub />}
                size={{base:"sm",lg:"lg",md:"md"}}
              >
                Github
              </Button></a>
              <a href={ele.deployed}><Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<SiNetlify />}
                size={{base:"sm",lg:"lg",md:"md"}}
              >
                Deployed
              </Button></a>
            </Box>
          </Grid>
        </Box>
        ))}
      </Box>
    </div>
  );
};

// https://drive.google.com/file/d/1tX-s0lUhUkYX-KyCdcCGEbmeuD9pnEYb/view?usp=sharing