import Avatar from '../Avatar'
import { AVATAR_DIMENSIONS } from '../../constants'

export default function EditAvatar({ avatar, setAvatar }) {
  const reader = (file) =>
    new Promise((resolve, reject) => {
      const fileRead = new FileReader()
      fileRead.readAsDataURL(file)
      fileRead.onloadend = () => resolve(fileRead.result)
    })

  const onNewFile = ({ target }) => {
    reader(target.files[0]).then((img) => {
      setAvatar(img)
    })
  }

  return (
    <>
      <Avatar
        src={avatar}
        width={AVATAR_DIMENSIONS['EDIT_AVATAR']}
        height={AVATAR_DIMENSIONS['EDIT_AVATAR']}
      />
      <input type='file' onChange={onNewFile} />
    </>
  )
}
