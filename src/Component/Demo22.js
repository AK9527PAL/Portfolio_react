import React from 'react'

let anmol=[
    {Name:"anmol",branch:"CSE"},
    {Name:"gaurav",branch:"CS-ds"},
    {Name:"ankit",branch:"CS-ai"},
    {Name:"aman",branch:"CS-ML"},
    {Name:"arvind",branch:"CS-iot"}
]

export default function Demo22() {
  return (
    <div>
        {anmol.map(
            (obj)=>{
                return <p>your name is {obj.Name} and your branch is {obj.branch}</p>
            }
        )}
    </div>
  )
}
