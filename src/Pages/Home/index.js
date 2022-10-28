import { useState } from 'react'
import { Layout } from './styles'
import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar'
import Chat from '../../components/Chat/Chat'
import Options from '../../components/Options/Options'
import { useRecoilState } from 'recoil'
import { currentChannelIdSelected } from '../../recoil/channels'

function Home() {
  const [optionView, setOptionView] = useState(false)
  const [currentChannelId, setCurrentChannelId] = useRecoilState(
    currentChannelIdSelected
  )

  const handleOptionView = () => {
    setOptionView(!optionView)
  }

  return (
    <Layout>
      <Navigation />
      <Sidebar handleOptionView={handleOptionView} />
      {currentChannelId && <Chat />}
      {optionView && <Options handleOptionView={handleOptionView} />}
    </Layout>
  )
}

export default Home
