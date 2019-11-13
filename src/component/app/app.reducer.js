import { SET_REMINDER_DATE, UNSET_REMINDER_DATE, INITIALIZE_REMINDER_LIST, ADD_REMINDER_TO_LIST } from "./app.constants";

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
]

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