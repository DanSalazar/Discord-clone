import React from 'react'
import { OptionEditBox, OptionEditBoxButtonContainer } from './stylesOptionsView'
import { OptionEditFormContainer } from './stylesOptionEdit'
import Button from '../Button/Button'
import { Label, Input } from '../GlobalComponents/styles'

function OptionEditUser ({ handleEditView }) {
    return (
        <OptionEditBox>
            <OptionEditFormContainer>
                <Label> Username </Label>
                <Input type='text' />
                <Label> Tag </Label>
                <Input type='text' maxLength='4' />
            </OptionEditFormContainer>
            <OptionEditBoxButtonContainer>
                <Button 
                    color='transparent' 
                    size='small' 
                    margin='0 5px'
                    onClick={handleEditView}> 
                    Cancel 
                </Button>    
                <Button 
                    color='primary' 
                    size='small'>
                    Ready
                </Button>    
            </OptionEditBoxButtonContainer> 
        </OptionEditBox>
    )
}

export default OptionEditUser
