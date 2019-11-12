import { SET_REMINDER_DATE, UNSET_REMINDER_DATE } from "./app.constants";

export const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date,
})

export const unsetReminderAction = ()  => ({
  type: UNSET_REMINDER_DATE,
})