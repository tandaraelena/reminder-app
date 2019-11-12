import React from 'react'
import { StyledModal, StyledModalWrapper, StyledModalBody, StyledModalHeader } from './modal.style';
import { Button } from '../button'

const Modal = ({ children, onClose, onSuccess }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <Button onClick={onClose} label="">
            <div className="icon-cross"></div>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>
          {children}
        </StyledModalBody>
      </StyledModal>
    </StyledModalWrapper>
  )
}

export { Modal }
