import React from 'react';
import moment from 'moment';
import { StyledCalendar, StyledCalendarHeader, StyledCalendarCell } from './calendar.style';

const Calendar = () => {
  const weekdays = Array
  .from({ length: 7 }, (_,key) => key + 1)
  .map(n => moment().weekday(n).format('dddd'))
  
  const renderCalendarHeader = () => {
    return weekdays.map(day => (
      <StyledCalendarHeader key={day}>{day}</StyledCalendarHeader>
    ))
  }

  const renderCalendarBody = () => {
    const currentMonth = moment().format('MMM');

    return dayList.map(({ date, month }) => (
      <StyledCalendarCell key={date} inMonth={currentMonth === month}>{date}</StyledCalendarCell>
    ))
  }

  const firstDayInMonth = moment()
    .locale('en-gb')
    .date(1)
    .hour(0)
    .minute(0)
    .second(0);

  const firstDayInCalendar = firstDayInMonth
    .subtract(
      firstDayInMonth.weekday() - 1,
        'd'
    )
  
  const firstUnixTime = firstDayInCalendar.unix();

  const dayList = Array
    .from({length: 35}, (_,key) => key)
    .map(n => ({
      time: firstUnixTime*1000 + n*60*60*24*1000
    }))
    .map(({ time }) => ({
      time,
      date: moment(time).format('MMM Do'),
      month: moment(time).format('MMM')
    }))

  return (
    <StyledCalendar>
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </StyledCalendar>
  )
}

export { Calendar }
