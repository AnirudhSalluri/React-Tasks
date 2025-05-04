import React from 'react'
import ReactDOM from 'react-dom'

const Notification = () => {
  return ReactDOM.createPortal(
    <>
    <div>Notification</div>
    
    </>,
  document.getElementById("Portal")
  )
}

export default Notification