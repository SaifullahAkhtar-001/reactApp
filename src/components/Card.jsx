import React from 'react'

function Card(props) {
    const classes = 'p-8 border-[1px] border-gray-400 rounded-xl ' + props.className
  return (
    <div className={classes}>
      { props.children }
    </div>
  )
}

export default Card
