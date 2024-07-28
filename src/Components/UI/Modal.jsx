import './Modal.css'
import { useState } from 'react'


export default function Modal({
  showAlert,
  message,
  handleAlertClose
}) {

  return (
    <div
      className="modal poppins"
      style={{display: showAlert ? "flex" : "none"}}
    
    >
      <h3 className="message">{message}</h3>
      <button className="btn_bg_light" onClick={handleAlertClose}>Close</button>
    </div>
  )
}
