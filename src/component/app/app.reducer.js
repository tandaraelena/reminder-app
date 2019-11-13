import { SET_REMINDER, UNSET_REMINDER, INITIALIZE_REMINDER_LIST, ADD_REMINDER_TO_LIST } from "./app.constants";

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER:
      // console.log(action)
      return {
        ...action.reminder
      }
    case UNSET_REMINDER:
      return initialReminderValue
    default:
      return state
  }
}

export const initialReminderList = [
  {
    "title": "mbm",
    "date": "2019-11-13",
    "time": "00:59",
    "unix": 1573606740000
  },
  {
    "title": "kashd",
    "date": "2019-11-14",
    "time": "23:00",
    "unix": 1573772400000
  },
  {
    "title": "kashd",
    "date": "2019-11-16",
    "time": "02:00",
    "unix": 1573869600000
  }
].sort((a,b) => a.unix - b.unix)

export const reminderListReducer = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_REMINDER_LIST: 
      return [...action.list]
    case ADD_REMINDER_TO_LIST: 
    // TODO, return the one that is sorted by unix time ascendant
      return [...state, action.reminder]
    default: 
      return state
  }
}