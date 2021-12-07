import React, { useState } from 'react'
import { AppLayoutLoggedIn } from './styles'
import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import Options from '../../components/Options/Options'
import { UserDataProvider } from '../../Store/store'

function Home() {
  const [optionView, setOptionView] = useState(false)

  const handleOptionView = () => {
    setOptionView(!optionView)
  }

  return (
    <UserDataProvider>
      <AppLayoutLoggedIn>
        <Navigation />
        <Sidebar handleOptionView={handleOptionView} />
        <Chat />
        {optionView && <Options handleOptionView={handleOptionView} />}
      </AppLayoutLoggedIn>
    </UserDataProvider>
  )
}

export default Home
