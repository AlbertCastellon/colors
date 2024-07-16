import { useState, useEffect, useRef } from 'react';
import BoxColor from './components/BoxColor';
import MyForm from './components/MyFormChallenge'
import { ColorProvider } from './context/MyContext';
import './App.css'


function App() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']

  return (
    <>
      <ColorProvider>
        <MyForm/>
        <div className='container'>
          {colors.map((c, index) => <BoxColor color={c} index={index}/>)}
        </div>
      </ColorProvider>
    </>
  )
}

export default App
