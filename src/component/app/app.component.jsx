import React from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';

const ReminderApp = () => {
  return (
    <div>
      <ActionBar/>
      <Calendar/>
      <Modal/>
    </div>
  )
}

export { ReminderApp }
