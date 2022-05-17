import { useRecoilState } from 'recoil'
import User from '../../recoil/user'
import {
  OptionEditFormContainer,
  OptionEditBoxButtonContainer,
  OptionEditBox
} from './stylesOptionsView'
import Button from '../Button/Button'
import useField from '../../hooks/useField'
import { Label, Input } from '../GlobalComponents/styles'
import EditAvatar from './EditAvatar'
import { createTagOfUser } from '../../utils'

function OptionEdit({ handleOptionView }) {
  const username = useField({ type: 'text', maxLength: '15' })
  const tag = useField({ type: 'text', maxLength: '4' })
  const [user, setUser] = useRecoilState(User)
 
  const setAvatar = (photo_url) => {
    setUser({
      ...user,
      photo_url
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.value === '') {
      handleOptionView()
      return
    }

    if (username.value !== '' && tag.value === '') {
      setUser({
        ...user,
        username: username.value,
      })
      handleOptionView()
      return
    }
 
    const newTag = createTagOfUser(tag.value)
    setUser({
      ...user,
      username: username.value,
      tag: newTag
    })
    handleOptionView()
  }

  return (
    <OptionEditBox>
      <Label>Avatar</Label>
      <EditAvatar avatar={user.photo_url} setAvatar={setAvatar} />
      <OptionEditFormContainer onSubmit={handleSubmit}>
        <Label> Username </Label>
        <Input {...username} />
        <Label> Tag </Label>
        <Input {...tag} />
        <OptionEditBoxButtonContainer>
          <Button color='primary' size='small'>
            Ready
          </Button>
          <Button
            color='transparent'
            size='small'
            margin='0 5px'
            onClick={handleOptionView}>
            Cancel
          </Button>
        </OptionEditBoxButtonContainer>
      </OptionEditFormContainer>
    </OptionEditBox>
  )
}

export default OptionEdit
