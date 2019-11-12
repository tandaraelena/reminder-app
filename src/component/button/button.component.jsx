import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      data-testid='nice-button'
    >
      hi
    </button>
  )
}

export { Button }
