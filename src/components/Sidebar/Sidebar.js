import { Add, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import UserPanel from './UserPanel'
import { useRecoilValue } from 'recoil'
import { channels } from '../../recoil/channels'
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
import PrivateChannel from '../PrivateChannels/PrivateChannel'

function Sidebar({ handleOptionView }) {
  const channelsData = useRecoilValue(channels)
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <SidebarSearchBar>Search or initiate a conversation</SidebarSearchBar>
      </SidebarHeader>

      <SidebarContent>
        <SidebarOptionButtons>
          <PeopleAlt />
          <SidebarOptionButtonTitle>Friends</SidebarOptionButtonTitle>
        </SidebarOptionButtons>

        <SidebarChannelsWrapper>
          <SidebarChannelsButton>
            <SidebarPrivateChannelsTitle>
              DIRECT MESSAGE
            </SidebarPrivateChannelsTitle>
            <Add />
          </SidebarChannelsButton>

          <SidebarChannels>
            {channelsData.map(channel => (
              <PrivateChannel
                key={channel.id}
                id={channel.channelId} 
                username={channel.username}
                photo_url={channel.photo_url} />
             ))}
          </SidebarChannels>
        </SidebarChannelsWrapper>
      </SidebarContent>

      <UserPanel handleOptionView={handleOptionView} />
    </SidebarWrapper>
  )
}

export default Sidebar
