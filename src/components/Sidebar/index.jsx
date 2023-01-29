import { Add, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import UserPanel from '../UserPanel'
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
} from './styles'
import PrivateChannel from '../PrivateChannels'

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
            {channelsData.map((channel, i) => (
              <PrivateChannel
                key={channel.id}
                position={i + 1}
                id={channel.channelId}
                username={channel.username}
                avatar={channel.avatar}
              />
            ))}
          </SidebarChannels>
        </SidebarChannelsWrapper>
      </SidebarContent>

      <UserPanel handleOptionView={handleOptionView} />
    </SidebarWrapper>
  )
}

export default Sidebar
