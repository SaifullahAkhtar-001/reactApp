import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {
  const initValue = 0;
  return (
    <>
      <div className='text-4xl text-red-500'>Hello</div>
      <Counter initValue={initValue}/>
    </>
  )
}

export default App
