import Avatar from '../Avatar/Avatar'

export default function EditAvatar ({ avatar, setAvatar }) {
	const reader = (file) => new Promise((resolve, reject) => {
		const fileRead = new FileReader()
		fileRead.onloadend = () => resolve(fileRead.result)
		fileRead.readAsDataURL(file)
	})

	const onNewFile = ({ target }) => {
		reader(target.files[0]).then(img => {
			window.localStorage.setItem('avatar', img)
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