import { atom, selector } from 'recoil'
import greenAvatar from '../../assets/green-avatar.png'
import grayAvatar from '../../assets/gray-avatar.png'
import orangeAvatar from '../../assets/orange-avatar.png'

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
            userId: 2,
          },
          content: 'channelId 3',
          id: 0
        }
      ]
    }
  ]
})

export const currentSelectChannel = atom({
  key: 'currentSelectChanel',
  default: 0
})

export const channels = atom({
  key: 'channels',
  default: [
    {
      channelId: 1,
      username: 'Channel 1',
      photo_url: greenAvatar,
      id: 0
    },
    {
      channelId: 2,
      username: 'Channel 2',
      photo_url: grayAvatar,
      id: 1
    },
    {
      channelId: 3,
      username: 'Channel 3',
      photo_url: orangeAvatar,
      id: 2
    }
  ]
})

export const selectChannelMessage = selector({
  key: 'selectChannelMessage',
  get: ({ get }) => {
    const messages = get(channelsMessages)
    const selectChannel = get(currentSelectChannel)
    const allChannels = get(channels)
    const currentMessages = messages.filter((m) => m.channelId === selectChannel)[0]
    const selectChannelSelected = allChannels.filter((c) => c.channelId === selectChannel)[0] 
   
    return {
      messages: currentMessages, 
      channelSelect: selectChannelSelected
    }
  }
})
