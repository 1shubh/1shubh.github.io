import React, { useState } from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import logo from "../images/logo.png"
import {FaBars} from "react-icons/fa"
import {Link} from "react-scroll"
import "../styles/navbar2.css"
import {GiHamburgerMenu,GiSplitCross} from "react-icons/gi"
import {IoClose,IoChevronBackCircle,IoChevronForwardCircleSharp,IoChevronBack,IoChevronForwardSharp} from "react-icons/io5"
export const Navbar2 = () => {
    const [navbar, setNavbar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
      }
      const ChangeNavbar = () => {
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
    };
    window.addEventListener("scroll", ChangeNavbar);
  return (
    <>
    <Box className={navbar ? "nav activeNav" : "nav"}>
      <Box
        id="navbar"
        display={{ base: "flex", md: "flex", lg: "flex" }}
        justifyContent={{ lg: "space-between", md: "space-between",base:"space-between" }}
        margin={{ lg: "auto", md: "auto", base: "auto" }}
        w={{ lg: "85%", md: "100%", base: "100%" }}
        alignItems={{ md: "center", base: "center" }}
      >
        <Box
          id="logo"
          justifyContent={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "start" }}
          width={{ base: "60%", md: "50%", lg: "32%" }}
        >
          <Image
            width={{ base: "100%", md: "70%", lg: "85%" }}
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
        <Box className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar ? (
            <IoClose/>
          ) : (
            <GiHamburgerMenu/>
          )}
            {/* <GiHamburgerMenu  fontSize={"25px"}/> */}
        </Box>
      </Box>
    </Box>
    <Box className={`nav-elements  ${showNavbar && 'active'}`}>
            <Text fontSize={{ base: "18px", md: "16px", lg: "18" }} >
                <Link  to="home"  smooth={true} offset={-100} duration={400}>Home</Link>
            </Text>
            <Text fontSize={{ base: "18px", md: "16px", lg: "18" }}>
            <Link to="about"  smooth={true} offset={-100} duration={400}>About </Link>
            </Text>
            <Text fontSize={{ base: "18px", md: "16px", lg: "18" }}>
            <Link to="skills"  smooth={true} offset={-100} duration={400}>Skills</Link>
            </Text>
            <Text fontSize={{ base: "18px", md: "16px", lg: "18" }}>
            <Link to="projects" smooth={true} offset={-100} duration={400}> Projects</Link>
            </Text>
            <Text fontSize={{ base: "18px", md: "16px", lg: "18" }}>
            <Link to="contact"  smooth={true} offset={-100} duration={400}>Contact</Link>
          </Text>
    </Box>
   </>
  )
}
