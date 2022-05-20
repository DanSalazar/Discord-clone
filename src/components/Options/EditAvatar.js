import Avatar from '../Avatar/Avatar'

export default function EditAvatar ({ avatar, setAvatar }) {
	const reader = (file) => new Promise((resolve, reject) => {
		const fileRead = new FileReader()
		fileRead.readAsDataURL(file)
		fileRead.onloadend = () => resolve(fileRead.result)
	})

	const onNewFile = ({ target }) => {
		reader(target.files[0]).then(img => {
			setAvatar(img)
		})
	}

	return (
		<>
			<Avatar avatarImage={avatar} width={84} height={84}/>
      <input type='file' onChange={onNewFile}/>
		</>
	)
}