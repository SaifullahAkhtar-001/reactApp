import React, { useState } from 'react';

function Counter(props) {
    const [count,setCount] = useState(props.initValue)
  return (
    <div>
      <h2 className='text-4xl text-red-500'>
        Counter
      </h2>
      <p className='bg-blue-700'>
        {count}
      </p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click me</button>
    </div>
  )
}

export default Counter
