import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="/">W</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/resume">Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
