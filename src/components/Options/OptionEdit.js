import { useState } from 'react'
import { useRecoilState } from 'recoil'
import User from '../../recoil/user'
import {
  OptionEditFormContainer,
  OptionEditBoxButtonContainer,
  OptionEditBox
} from './styles'
import Button from '../Button/Button'
import { Label, Input } from '../GlobalComponents/styles'
import EditAvatar from './EditAvatar'
import { createTagOfUser } from '../../utils'

function OptionEdit({ handleOptionView }) {
  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')
  const [user, setUser] = useRecoilState(User)
  const [latestImg, setLatestImg] = useState('')

  const setAvatar = (avatar) => {
    setLatestImg(user.avatar)
    setUser({
      ...user,
      avatar
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTag = tag ? createTagOfUser(parseInt(tag)) : user.tag

    const newUser = {
      ...user,
      username: username || user.username,
      tag: newTag
    }

    setUser(newUser)

    window.localStorage.setItem('user', JSON.stringify(newUser))

    handleOptionView()
  }

  const handleCancel = () => {
    setUser({
      ...user,
      photo_url: latestImg || user.avatar
    })
    handleOptionView()
  }

  return (
    <OptionEditBox>
      <Label>Avatar</Label>
      <EditAvatar avatar={user.avatar} setAvatar={setAvatar} />
      <OptionEditFormContainer onSubmit={handleSubmit}>
        <Label> Username </Label>
        <Input
          type='text'
          maxLength={15}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label> Tag </Label>
        <Input
          type='text'
          maxLength={4}
          onChange={(e) => setTag(e.target.value)}
        />
        <OptionEditBoxButtonContainer>
          <Button color='primary' size='small'>
            Ready
          </Button>
          <Button
            color='transparent'
            size='small'
            margin='0 5px'
            onClick={handleCancel}>
            Cancel
          </Button>
        </OptionEditBoxButtonContainer>
      </OptionEditFormContainer>
    </OptionEditBox>
  )
}

export default OptionEdit
