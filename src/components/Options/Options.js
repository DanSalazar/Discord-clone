import React from 'react'
import OptionEdit from './OptionEdit'
import { OptionViewModal } from './stylesOptionsView'

function Options ({ handleOptionView }) {

    return (
       <OptionViewModal> 
            <OptionEdit handleOptionView={handleOptionView}/>
        </OptionViewModal>
    )
}

export default Options
