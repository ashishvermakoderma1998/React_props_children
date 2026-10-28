import React from 'react'

const Doughter = (props) => {
  return (
    <div style={{background: 'lightblue'}}>
        <h1>Doughter</h1>
        <div>{props.children}</div>
    </div>
  )
}

export default Doughter
