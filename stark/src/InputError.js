import { useState } from "react"
import React from 'react'

const InputError = () => {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)

    const err = "Error!! Input value should be abobe 10";

    const handlesubmit = (e) => {
        setError(false)
        setInput(e.target.value)
    
    if (e.target.value < 10){
        setError(true)
    
    }}



  return (
    <>
    <div>InputError Compo</div>
    <input value={input} onChange={handlesubmit}/>
    {
        error ? err : null
    }
    </>
  )
}

export default InputError