import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import {Link} from "react-scroll"
import logo from "../images/logo.png"
import {FaBars} from "react-icons/fa"

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  // const navigate = useNavigate();
  const ChangeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", ChangeNavbar);

  return (
    <Box className={navbar ? "nav active" : "nav"}>
      <Box
        id="navbar"
        display={{ base: "grid", md: "flex", lg: "flex" }}
        justifyContent={{ lg: "space-between", md: "space-between" }}
        margin={{ lg: "auto", md: "auto", base: "auto" }}
        w={{ lg: "85%", md: "100%", base: "100%" }}
        alignItems={{ md: "center", base: "center" }}
      >
        <Box
          id="logo"
          display={{ base: "center" }}
          justifyContent={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "start" }}
          width={{ base: "100%", md: "50%", lg: "32%" }}
        >
          <Image
            width={{ base: "40%", md: "70%", lg: "85%" }}
            src={logo}
            alt="logo"
          />
        </Box>
        <Box id="nav_menu"  width={{ base: "100%", md: "70%", lg: "40%" }} >
            <Text fontSize={{ base: "10px", md: "16px", lg: "18" }} >
                <Link  to="home"  smooth={true} offset={-100} duration={400}>Home</Link>
            </Text>
            <Text fontSize={{ base: "10px", md: "16px", lg: "18" }}>
            <Link to="about"  smooth={true} offset={-100} duration={400}>About </Link>
            </Text>
            <Text fontSize={{ base: "10px", md: "16px", lg: "18" }}>
            <Link to="skills"  smooth={true} offset={-100} duration={400}>Skills</Link>
            </Text>
            <Text fontSize={{ base: "10px", md: "16px", lg: "18" }}>
            <Link to="projects" smooth={true} offset={-100} duration={400}> Projects</Link>
            </Text>
            <Text fontSize={{ base: "10px", md: "16px", lg: "18" }}>
            <Link to="contact"  smooth={true} offset={-100} duration={400}>Contact</Link>
          </Text>
        </Box>
        <Box id="bar" onClick={handleShowNavbar}>
            <FaBars/>
        </Box>
      </Box>
    </Box>
  );
};
