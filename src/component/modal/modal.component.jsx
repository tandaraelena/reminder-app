import React from 'react'
import { StyledModal } from './modal.style';
import { Button } from '../button'

const Modal = ({ children, onClose, onSuccess }) => {
  return (
    <StyledModal>
      <div>
        <Button onClick={onClose} label="">
          <div className="icon-cross"></div>
        </Button>
      </div>
      {children}
    </StyledModal>
  )
}

export { Modal }
