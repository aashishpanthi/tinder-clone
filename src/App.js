import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Cards from './components/Cards'
import './App.css';
import ChatPage from './components/ChatPage'
import ChatScreen from './components/ChatScreen'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat/' />
            <ChatScreen />
          </Route>

          <Route path='/chat'>
            <Header backButton='/' />
            <ChatPage />
          </Route>

          <Route path='/'>
            <Header />
            <Cards />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
