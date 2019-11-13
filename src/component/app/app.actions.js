import { SET_REMINDER, UNSET_REMINDER, ADD_REMINDER_TO_LIST } from "./app.constants";

export const createReminderAction = reminder => ({
  type: SET_REMINDER,
  reminder,
})

export const unsetReminderAction = ()  => ({
  type: UNSET_REMINDER,
})

export const addReminderToListAction = reminder  => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
})