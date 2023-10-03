import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Content from './components/Content';
import {Provider} from 'react-redux'
import store from './states/store';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
      
      <Navbar/>
      <Hero/>
      <Content/>
    </div>
    </Provider>
    
  )
}

export default App
