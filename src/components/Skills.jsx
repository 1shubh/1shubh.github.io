import React from "react";
import { Box, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
// import sample from "../video/Glow2.mp4";

export const Skills = () => {
  return (
    <>
      {/* <video width={"100%"} style={{position:"relative"}} autoPlay loop muted>
      <source src={sample} type='video/mp4' /></video> */}
      <Box
        margin={"auto"}
        margin-top={{ lg: "100px", md: "100px", sm: "100px" }}
        w="80%"
        border="0px solid orange"
        id="skills"
        marginTop={"50px"}
      >
        <Heading
          color={"white"}
          textAlign={"center"}
          size={{ lg: "2xl", md: "xl", sm: "xl" }}
        >
          My Skills
        </Heading>
        <Box
          w={"100%"}
          border="0px solid white"
          margin={"auto"}
          marginTop="20px"
          display={{ lg: "flex", md: "grid", base: "grid" }}
          justifyContent="center"
        >
          <Box
            border={"0px solid red"}
            w={{ lg: "50%", md: "70%", base: "70%" }}
            margin="auto"
          >
            <Image
              w={"100%"}
              margin="auto"
              src="https://drive.google.com/uc?export=view&id=1Urho4gOtxrzxJzp8N-RH2qOAUMnvvPX2"
            />
          </Box>
          <Box
            textAlign={"center"}
            border="0px solid white"
            w={{ lg: "50%", md: "100%", base: "100%" }}
          >
            <Text
              color={"#ffc400"}
              fontSize={{ lg: "40px", md: "30px", base: "15px" }}
            >
              Full Stack Development
            </Text>
            <Stack
              direction={"row"}
              margin="auto"
              w={{ lg: "80%", md: "100%",base:"80%" }}
              border={"0px solid blue"}
              gap="10px"
              padding={"10px"}
              justifyContent="space-around"
              cursor={"pointer"}
            >
              <Tooltip label="HTML">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1pgI8xpQJLGsPcSmsIHW6KM1DGycJ5xLb"
                />
              </Tooltip>
              <Tooltip label="CSS">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1kWtZ5XRXL4OOFylACwbduu74fWtCSwBb"
                />
              </Tooltip>
              <Tooltip label="JavaScript">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1GGy-4r8QH1VTNQEwV_BsDZ_0ClhK2xQY"
                />
              </Tooltip>
              <Tooltip label="ReactJS">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1komhUgbTWnazURaojc5gKej0xshEMVxP"
                />
              </Tooltip>
              <Tooltip label="NodeJS">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1ft72gIzlw6MB8kXTlwUYKolGZXQzkQgX"
                />
              </Tooltip>
              <Tooltip label="GitBash">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1oRtnSRle6HIf2XdL2JJvkUBeBBWngOe2"
                />
              </Tooltip>
            </Stack>
            <Stack
              direction={"row"}
              w={{ lg: "80%", md: "100%" }}
              border={"0px solid blue"}
              gap={{lg:"10px",md:"30px",base:"10px"}}
              marginLeft={{md:"15px",lg:"25px",base:"15px"}}
              padding={"10px"}
              justifyContent="left"
              cursor={"pointer"}
            >
              <Tooltip label="NextJs">
                <Image
                  backgroundColor={"white"}
                  borderRadius="50%"
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1XIHWUvYzO4dGZCac9VIWt0idoSrJGbts"
                />
              </Tooltip>
              <Tooltip label="TypeScript">
                <Image
                  backgroundColor={"white"}
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1bYcefReF6tj9Css_oR9VohxckrrQNiMY"
                />
              </Tooltip>
              <Tooltip label="Redux">
                <Image
                  backgroundColor={"white"}
                  borderRadius="50%"
                  boxSize={{ lg: "75px", md: "60px", base: "30px" }}
                  src="https://drive.google.com/uc?export=view&id=1jir62F3Fzzr-Dyo3gm_eztOVAMMNA2Dk"
                />
              </Tooltip>
            </Stack>
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
            w={{ lg: "50%", md: "100%", base: "100%" }}
            marginTop="20px"
          >
            <Text
              color={"#ffc400"}
              fontSize={{ lg: "40px", md: "30px", sm: "20px" }}
            >
              Cloud Infra-Architecture
            </Text>
            <Stack
              direction={"row"}
              w={{ lg: "60%", md: "100%",base:"60%" }}
              margin="auto"
              border={"0px solid blue"}
              gap="10px"
              padding={"10px"}
              justifyContent="space-between"
              cursor={"pointer"}
            >
              <Tooltip label="Netlify">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "40px" }}
                  src="https://drive.google.com/uc?export=view&id=1ZcoXnXr6OJ5en1HxoD8r3HMDu6hrwCNn"
                />
              </Tooltip>
              <Tooltip label="Heroku">
                <Image
                  boxSize={{ lg: "75px", md: "60px", base: "40px" }}
                  src="https://drive.google.com/uc?export=view&id=10uvtFnmbMUXTXVhEtsh9JivB_Cx8zG9O"
                />
              </Tooltip>
              <Tooltip label="GitHub">
                <Image
                  backgroundColor={"white"}
                  borderRadius="50%"
                  boxSize={{ lg: "75px", md: "60px", base: "40px" }}
                  src="https://drive.google.com/uc?export=view&id=1wDOHnWxvusjUROx4s_ncdHUoYyyXGV_9"
                />
              </Tooltip>
            </Stack>
          </Box>
          <Box
            border={"0px solid red"}
            w={{ lg: "50%", md: "100%", sm: "100%" }}
          >
            <Image
              w={"100%"}
              margin="auto"
              boxSize={{lg:"350px",md:"300px",base:"180px"}}
              src="https://drive.google.com/uc?export=view&id=1NAl6qm1QgO5Wr_E3VK4J4HewryYhGiaO"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
