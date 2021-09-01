import React from 'react'
import Chat from './components/Chat/Chat';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import { AppLayout } from './styles';

function App () {
  return (
      <AppLayout>
        <Navigation/>
        <Sidebar/>
        <Chat/>
      </AppLayout>
  );
}

export default App;
