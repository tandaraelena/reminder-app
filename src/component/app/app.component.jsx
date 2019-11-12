import React, { useReducer } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import { reminderReducer, initialReminderValue } from './app.reducer';

const initialValue = null;
const ReminderApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue);

  return (
    <div>
      <ActionBar 
        setReminder={setReminder}
      />
      <Calendar/>
      {currentReminder && <Modal />}
    </div>
  )
}

export { ReminderApp }
