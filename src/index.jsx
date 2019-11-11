import React from 'react';
import { render } from 'react-dom';

const reminderApp = document.querySelector('#reminder-app')

const ReminderApp = () => {
  return (
    <div>Hello</div>
  )
}

render(
  <ReminderApp/>,
  reminderApp
)