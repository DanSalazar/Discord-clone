import React, { useContext } from 'react'
import {
  OptionEditFormContainer,
  OptionEditBoxButtonContainer,
  OptionEditBox
} from './stylesOptionsView'
import Button from '../Button/Button'
import { UserState } from '../../Store/store'
import useField from '../../hooks/useField'
import { Label, Input } from '../GlobalComponents/styles'

function OptionEdit({ handleOptionView }) {
  const username = useField({ type: 'text', maxLength: '15' })
  const tag = useField({ type: 'text', maxLength: '4' })
  const user = useContext(UserState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.value === '') {
      handleOptionView()
      return
    }

    if (username.value !== '' && tag.value === '') {
      user.setUsername(username.value)
      handleOptionView()
      const randomTag = `${Math.ceil(Math.random() * 9999)}`
      user.setTagOfUser(randomTag)
      return
    }

    user.setUsername(username.value)
    user.setTagOfUser(tag.value)
    handleOptionView()
  }

  return (
    <OptionEditBox>
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
