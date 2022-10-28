import OptionEdit from './OptionEdit'
import { OptionViewModal } from './styles'

function Options({ handleOptionView }) {
  return (
    <OptionViewModal>
      <OptionEdit handleOptionView={handleOptionView} />
    </OptionViewModal>
  )
}

export default Options
