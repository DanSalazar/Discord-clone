import { atom, selector } from 'recoil'
import greenAvatar from '../../assets/green-avatar.png'
import grayAvatar from '../../assets/gray-avatar.png'
import orangeAvatar from '../../assets/orange-avatar.png'

export const channels = atom({
  key: 'channels',
  default: [
    {
      channelId: 1,
      username: 'Channel 1',
      avatar: greenAvatar,
      id: 0
    },
    {
      channelId: 2,
      username: 'Channel 2',
      avatar: grayAvatar,
      id: 1
    },
    {
      channelId: 3,
      username: 'Channel 3',
      avatar: orangeAvatar,
      id: 2
    }
  ]
})

export const channelsMessages = atom({
  key: 'allMessages',
  default: [
    {
      channelId: 1,
      messages: [
        {
          author: {
            avatar: greenAvatar,
            username: 'Channel 1',
            userId: 0
          },
          content: 'channelId 1',
          id: 0
        }
      ]
    },
    {
      channelId: 2,
      messages: [
        {
          author: {
            avatar: grayAvatar,
            username: 'Channel 2',
            userId: 1
          },
          content: 'channelId 2',
          id: 0
        }
      ]
    },
    {
      channelId: 3,
      messages: [
        {
          author: {
            avatar: orangeAvatar,
            username: 'Channel 3',
            userId: 2
          },
          content: 'channelId 3',
          id: 0
        }
      ]
    }
  ]
})

export const currentChannelIdSelected = atom({
  key: 'currentChannelIdSelected',
  default: 0
})

/**
 * Return the current messages and the current channel selected
 */
export const getCurrentChannelMessages = selector({
  key: 'getCurrentChannelMessages',
  get: ({ get }) => {
    const messages = get(channelsMessages)
    const channelSelected = get(currentChannelIdSelected)
    const allChannels = get(channels)
    const currentMessages = messages.find(
      (m) => m.channelId === channelSelected
    )
    const currentChannel = allChannels.find(
      (c) => c.channelId === channelSelected
    )

    return {
      currentMessages,
      currentChannel
    }
  }
})
