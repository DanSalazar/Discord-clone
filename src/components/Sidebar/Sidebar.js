import { Add, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import UserPanel from './UserPanel'
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

function Sidebar ({ handleOptionView }) {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <SidebarSearchBar>
                  Search or initiate a conversation
                </SidebarSearchBar>
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
                    </SidebarChannels>

                </SidebarChannelsWrapper>
                
            </SidebarContent>
            
            <UserPanel handleOptionView={handleOptionView} />
        </SidebarWrapper>
    )
}

export default Sidebar
