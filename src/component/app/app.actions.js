import { SET_REMINDER_DATE, UNSET_REMINDER_DATE, ADD_REMINDER_TO_LIST } from "./app.constants";

export const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date,
})

export const unsetReminderAction = ()  => ({
  type: UNSET_REMINDER_DATE,
})

export const addReminderToListAction = reminder  => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
})