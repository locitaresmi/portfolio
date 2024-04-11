import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'

const Sidebar = ({ $isOpen, toggle }) => {
    return (
        <SidebarContainer $isOpen={$isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Project
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/resume" onClick={toggle}>
                        Resume
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
