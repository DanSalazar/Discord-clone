import { AvatarImg } from './styles'

function Avatar({ width, height, src, loading = 'eager' }) {
  return <AvatarImg src={src} width={width} height={height} loading={loading} />
}

export default Avatar
