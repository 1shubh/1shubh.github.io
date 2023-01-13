import React from "react";
import { Box, Image, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export const Projects = () => {
  const url = "https://drive.google.com/uc?export=view&id=";
  return (
    <div style={{ color: "white" }} id="projects">
      <Heading color={"white"} textAlign="center" size={"2xl"} marginTop="20px">
        Projects
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
        width={{lg:"90%",md:"80%",base:"90%"}}
        margin="auto"
        marginTop={"50px"}
        gap="20px"
      >
        <Box border={"2px solid #ffc400"} borderRadius="10px">
          <Box w={"100%"}>
            <Image
              w={"100%"}
              borderTopRadius="7px"
              src={`${url}1q180PKNykuZ44HTR2D9o9G7h_Rye40HT`}
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
              Travelocity.com
            </Text>
            <Text fontFamily={"sans-serif"} fontSize={{base:"14px"}}>
              Travelocity.com is an online travel agency owned by Expedia
              Group.Where a user can book Hotels.
            </Text>
            <Text fontSize={{base:"14px"}}>
              <span style={{ color: "#ffc400", fontSize: "18px" }}>
                Tech Stack :
              </span>{" "}
              ReactJs, Chakra UI
            </Text>
            <Box
              border="0px solid red"
              w={{lg:"42%",md:"42%",base:"80%"}}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<FaGithub />}
                size={{base:"sm"}}
              >
                Github
              </Button>
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<SiNetlify />}
                size={{base:"sm"}}
              >
                Deployed
              </Button>
            </Box>
          </Grid>
        </Box>
        <Box border={"2px solid #ffc400"} borderRadius="10px">
          <Box w={"100%"}>
            <Image
              w={"100%"}
              borderTopRadius="7px"
              src={`${url}1ZjKgDg4qsesXVxJktjJlJ64qoh2bnN-9`}
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
              Booking.com
            </Text>
            <Text fontFamily={"sans-serif"} fontSize={{base:"14px"}}>
              Booking.com is a Dutch online travel agency for lodging
              reservations & other travel products, and a subsidiary of Booking
              Holding.
            </Text>
            <Text fontSize={{base:"14px"}}>
              <span style={{ color: "#ffc400", fontSize: "18px" }}>
                Tech Stack :
              </span>{" "}
              HTML, CSS, JavaScript
            </Text>
            <Box
              border="0px solid red"
              w={{lg:"42%",md:"42%",base:"80%"}}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<FaGithub />}
                size={{base:"sm"}}
              >
                Github
              </Button>
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<SiNetlify />}
                size={{base:"sm"}}
              >
                Deployed
              </Button>
            </Box>
          </Grid>
        </Box>
        <Box border={"2px solid #ffc400"} borderRadius="10px">
          <Box w={"100%"}>
            <Image
              borderTopRadius="7px"
              src={`${url}1jipT1ryZT2fKWwY9Zz-ArIsTYgNJQ077`}
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
              Lovoda.com
            </Text>
            <Text fontFamily={"sans-serif"} fontSize={{base:"14px"}}>
              Lovoda.com is an American based E-commerse website where users can
              buy jwellery.
            </Text>
            <Text fontSize={{base:"14px"}}>
              <span style={{ color: "#ffc400", fontSize: "18px" }}>
                Tech Stack :{" "}
              </span>
              HTML, CSS, JavaScript
            </Text>
            <Box
              border="0px solid red"
              w={{lg:"42%",md:"42%",base:"80%"}}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<FaGithub />}
                size={{base:"sm"}}
              >
                Github
              </Button>
              <Button
                backgroundColor={"#ffc400"}
                color="black"
                leftIcon={<SiNetlify />}
                size={{base:"sm"}}
              >
                Deployed
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
//https://drive.google.com/file/d/1jipT1ryZT2fKWwY9Zz-ArIsTYgNJQ077/view?usp=sharing
