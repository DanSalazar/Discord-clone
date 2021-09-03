import { Add, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import PrivatesChannels from '../PrivateChannels/PrivatesChannels'
import BarUser from './BarUser'
import { 
    SidebarWrapper, 
    SidebarSearchBar,
    SidebarHeader,
    SidebarContent,
    SidebarChannels, 
    SidebarChannelsWrapper,
    SidebarChannelsButton,
    SidebarPrivateChannelsTitle,
    SidebarOptionButtons,
    SidebarOptionButtonTitle
} from './sidebarStyles'

const helper = [1, 2, 3]

function Sidebar () {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <SidebarSearchBar placeholder="Search or initiate a conversation"/>
            </SidebarHeader>

            <SidebarContent>
                <SidebarOptionButtons>
                    <PeopleAlt/>
                    <SidebarOptionButtonTitle>
                        Friends
                    </SidebarOptionButtonTitle>
                </SidebarOptionButtons>

                <SidebarChannelsWrapper>
                        
                    <SidebarChannelsButton>
                        <SidebarPrivateChannelsTitle>
                            DIRECT MESSAGE
                        </SidebarPrivateChannelsTitle>
                        <Add/>
                    </SidebarChannelsButton>
                        
                    <SidebarChannels>
                        {helper.map(item => (
                            <PrivatesChannels key={item} />
                        )) }
                    </SidebarChannels>

                </SidebarChannelsWrapper>
                
            </SidebarContent>
            
            <BarUser/>
        </SidebarWrapper>
    )
}

export default Sidebar
