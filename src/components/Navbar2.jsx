import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "../styles/navbar2.css";

export const Navbar2 = () => {
    const [navbar, setNavbar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [activeSection, setActiveSection] = useState("home"); // State to track active link

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
        return () => window.removeEventListener("scroll", changeNavbar);
    }, []);

    useEffect(() => {
        const sections = ["home", "about", "skills", "projects", "contact"];

        const handleScroll = () => {
            let currentSection = "";
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Box className={navbar ? "nav activeNav" : "nav"}>
                <Box
                    id="navbar"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="auto"
                    w={{ lg: "85%", md: "100%", base: "100%" }}
                >
                    {/* Logo */}
                    <Box id="logo" width={{ base: "60%", md: "50%", lg: "32%" }}>
                        <Image width={{ base: "100%", md: "70%", lg: "85%" }} src={logo} alt="logo" />
                    </Box>

                    {/* Desktop Navbar */}
                    <Box id="nav_menu" width={{ base: "100%", md: "70%", lg: "40%" }} display={{ base: "none", md: "flex" }} justifyContent="space-around">
                        {["home", "about", "skills", "projects", "contact"].map((section) => (
                            <Text
                                key={section}
                                fontSize={{ base: "10px", md: "16px", lg: "18px" }}
                                className={activeSection === section ? "active-link" : ""}
                            >
                                <Link to={section} smooth={true} offset={-100} duration={400}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </Text>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box className="menu-icon" onClick={handleShowNavbar}>
                        {showNavbar ? <IoClose /> : <GiHamburgerMenu />}
                    </Box>
                </Box>
            </Box>

            {/* Mobile Navbar */}
            <Box className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                    <Text
                        key={section}
                        fontSize="18px"
                        className={activeSection === section ? "active-link" : ""}
                    >
                        <Link to={section} smooth={true} offset={-100} duration={400} onClick={() => setShowNavbar(false)}>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    </Text>
                ))}
            </Box>
        </>
    );
};
