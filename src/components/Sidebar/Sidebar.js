import React from 'react'
import BarUser from './BarUser'
import { 
    SidebarWrapper, 
    SidebarSearchBar, 
    SidebarOptions,
    SidebarHeader, 
    SidebarOptionsButtons 
} from './sidebarStyles'


function Sidebar () {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <SidebarSearchBar placeholder="Search or initiate a conversation"/>
            </SidebarHeader>
            {/* <SidebarOptions>
                <SidebarOptionsButtons>
                    Friends
                </SidebarOptionsButtons>
            </SidebarOptions> */}
            <BarUser/>
        </SidebarWrapper>
    )
}

export default Sidebar
