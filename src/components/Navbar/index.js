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
                    <NavLogo onClick={toggleHome} exact to="/">W</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks exact to="/">Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks exact to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks exact to="/resume">Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
