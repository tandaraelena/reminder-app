import React, { useReducer } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import { reminderReducer, initialReminderValue } from './app.reducer';
import { unsetReminderAction } from './app.actions';

const initialValue = null;
const ReminderApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue);
  const onClose = () => {
    // close the modal
    setReminder(unsetReminderAction())
  }

  return (
    <div>
      <ActionBar 
        setReminder={setReminder}
      />
      <Calendar/>
      {currentReminder && 
        <Modal 
          onClose={onClose}
        >
          <div>hi</div>
        </Modal>}
    </div>
  )
}

export { ReminderApp }
