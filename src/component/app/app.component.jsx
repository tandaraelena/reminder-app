import React, { useReducer, useRef } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import { reminderReducer, initialReminderValue } from './app.reducer';
import { unsetReminderAction } from './app.actions';
import moment from 'moment';

const ReminderApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue);

  const dateForInput = moment((currentReminder && currentReminder.date || 0) * 1000).format('YYYY-MM-DD');
  // console.log(dateForInput, currentReminder)

  const myTitle = useRef();
  const myDate = useRef();
  const myTime = useRef();
  

  const onClose = () => {
    // close the modal
    setReminder(unsetReminderAction())
  }

  const onSuccess = () => {
    console.log(
      myDate.current.value,
      myTime.current.value,
      myTitle.current.value,
    )
  }

  return (
    <div>
      <ActionBar 
        setReminder={setReminder}
      />
      <Calendar/>
      {currentReminder && 
        <Modal 
          onSuccess={onSuccess}
          onClose={onClose}
        >
          <div>
            <div>
              <label htmlFor='title'>Title: </label>
              <input 
                ref={myTitle}
                id='title'
                maxLength={50}
                autoFocus
                type="title" 
                />
            </div>
            <div>
              <label htmlFor='date'>Date: </label>
              <input 
                defaultValue={dateForInput}
                ref={myDate}
                id='date'
                type="date" 
                />
            </div>
            <div>
              <label htmlFor='time'>Time: </label>
              <input 
                ref={myTime}
                id='time'
                type="time"  />
            </div>
          </div>
        </Modal>}
    </div>
  )
}

export { ReminderApp }
