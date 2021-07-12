import React from 'react'
import './Modal.css'

export const Modal = ({show, onClose, children}) => {

  if (!show) {
    return null;
  }

  return(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-close"><div onClick={onClose} className="close-button">X</div></div>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  )

}