import React from 'react'

export default function Task1() {
    let x=200;
    let y=30;
  return (
    <div>
        <h1>Evaluating expression</h1>
        <h3>{x} {'>'} {y} : {x>y?"true":"false"}</h3>
    </div>
  )
}
