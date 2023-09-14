import { useState } from 'react'
import Counter from './components/Counter';
import './index.css';

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
