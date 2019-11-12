import { SET_REMINDER_DATE } from "./app.constants";

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER_DATE:
      // console.log(action)
      return {
        date: action.date
      }
    default:
      return state
  }
}