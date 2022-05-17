import { useState } from 'react'
import { AppLayoutLoggedIn } from '../Home/styles'
import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import Options from '../../components/Options/Options'

function ChannelPage() {
	const [optionView, setOptionView] = useState(false)

  const handleOptionView = () => {
    setOptionView(!optionView)
  }

	return (
		<AppLayoutLoggedIn>
      <Navigation />
      <Sidebar handleOptionView={handleOptionView} />
      <Chat />
      {optionView && <Options handleOptionView={handleOptionView} />}
    </AppLayoutLoggedIn>
	)
}

export default ChannelPage