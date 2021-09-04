import React from 'react'
import { AppLayoutLoggedIn } from './styles'
import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'

function Home () {
    return (
        <AppLayoutLoggedIn>
            <Navigation/>
            <Sidebar/>
            <Chat/>
        </AppLayoutLoggedIn>
    )
}

export default Home
