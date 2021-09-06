import React, { useContext, useState } from 'react'
import { Clear } from '@material-ui/icons'
import Button from '../Button/Button'
import OptionEditUser from './OptionEditUser'
import { UserState } from '../../Store/store'
import { 
    OptionBox, 
    OptionBoxChildren, 
    OptionEditLabel, 
    OptionUsername, 
    OptionUserTag,  
    OptionViewSetting,  
    OptionViewQuit,  
    OptionViewSidebar,  
    OptionViewWrapper, 
    OptionViewQuitButton, 
    OptionViewQuitText,
    OptionViewModal
} from './stylesOptionsView'

function Options ({ handleOptionView }) {
    const [showEditView, setEditView] = useState(false)
    const user = useContext(UserState)

    const handleEditView = () => {
        setEditView(!showEditView)
    }

    return (
        <OptionViewWrapper>
            <OptionViewSidebar />

            <OptionViewSetting>
                <OptionBox>
                    <OptionBoxChildren>
                        <div>
                            <OptionEditLabel> Username </OptionEditLabel>
                            <OptionUsername> {user.username} </OptionUsername>
                            <OptionUserTag> {user.tag} </OptionUserTag>
                        </div>
                        <Button 
                            size='small' 
                            color='secondary' 
                            onClick={handleEditView}> 
                            Edit user 
                        </Button>
                    </OptionBoxChildren>
                </OptionBox>
            </OptionViewSetting>
            
            <OptionViewQuit>
                <OptionViewQuitButton onClick={handleOptionView}>
                    <Clear />
                </OptionViewQuitButton>
            </OptionViewQuit>

            {showEditView && 
            <OptionViewModal> 
                <OptionEditUser handleEditView={handleEditView} /> 
            </OptionViewModal>}
            
        </OptionViewWrapper>
    )
}

export default Options
