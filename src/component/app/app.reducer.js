import { SET_REMINDER_DATE, UNSET_REMINDER_DATE } from "./app.constants";

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER_DATE:
      // console.log(action)
      return {
        date: action.date
      }
    case UNSET_REMINDER_DATE:
      return initialReminderValue
    default:
      return state
  }
}