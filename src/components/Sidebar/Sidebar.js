import React from 'react'
import BarUser from './BarUser'
import { 
    SidebarWrapper, 
    SidebarSearchBar, 
    SidebarOptions, 
    SidebarOptionsButtons 
} from './sidebarStyles'


function Sidebar () {
    return (
        <SidebarWrapper>
            <SidebarSearchBar placeholder="Search or initiate a conversation"/>
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
