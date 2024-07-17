import React from 'react'
import { useState } from 'react'

function input() {
  let [name , setName ] = useState("")
  let checkInput = (e)=>{
    if(e.target.value == ""){
      setName("")
    }else{
      setName(`Hello ${e.target.value}`)
    }
  }
  return (
    <>
    <label htmlFor="name">Enter your name:</label>
    <input type="text" id='name' onChange={(e)=>checkInput(e)}/>
    <h3>{name}</h3>
    </>
  )
}

export default input