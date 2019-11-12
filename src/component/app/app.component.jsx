import React, { useReducer } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';

const SET_REMINDER_DATE = 'SET_REMINDER_DATE';

const initialValue = null;

const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date,
})

const modalReducer = (state = initialValue, action) => {
  switch(action.type) {
    case SET_REMINDER_DATE:
      return {
        date: action.date
      }
    default:
      return state
  }
}

const ReminderApp = () => {
  const [currentReminder, updateReminder] = useReducer(modalReducer, initialValue);

  return (
    <div>
      <ActionBar/>
      <Calendar/>
      <Modal/>
    </div>
  )
}

export { ReminderApp }
