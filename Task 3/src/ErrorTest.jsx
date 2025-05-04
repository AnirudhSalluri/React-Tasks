import React from 'react'

const ErrorTest = () => {
    const errorpass =()=>{
        throw new Error("App has been Crashed")
    }
  return (
    <>
    <button onClick={errorpass}>
        Crash App
    </button>
    <div>Hi My name is Anirudh</div>
    </>
  )
}

export default ErrorTest