import React from 'react'

const Son = (props) => {
  return (
    <div style={{background: 'lightgreen'}}>
      <h1>
        Son
      </h1>
      <div>{props.children}</div>
    </div>
  )
}

export default Son
