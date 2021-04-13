import React from 'react';
import DayListItem from './DayListItem';


/* Our DayList component will take in three props.
 *
 * days:Array a list of day objects (each object includes an id, name, and spots)
 * day:String the currently selected day
 * setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
 *
*/




export default function DayList(props) {

  const parsedDayList = Object.values(props.days).map((day) => {
    return (
    <DayListItem 
      {...day}
      key={day.id} 
      selected={day.name === props.day} 
      setDay={props.setDay}
    />
     )
  })

  return (
    <ul>
      {parsedDayList}
    </ul>
  )
}