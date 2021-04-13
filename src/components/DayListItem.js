import React from 'react';
import "components/DayListItem.scss";
import classNames from "classnames/bind";

/* 
 * This component takes three attributes (name, spots, selected) and one action (setDay) as props 
 * We will need to update our DayListItem to reflect this after building our stories
*/

export default function DayListItem(props) {
  
  const liClass = classNames("li", {
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpot = (spots) => {

    if (!spots) {
      return 'no spots remaining';
    }

    if (spots === 1) {
       return spots + ' spot remaining';
    } 
    
    if (spots >= 2) {
      return spots + ' spots remaining';
    }

  }

  let sText = formatSpot(props.spots);

  return (
    <li
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
      className={liClass}
    >
      <h2 className="text-regular">{props.name}</h2>
      <h3 className="text-light">{sText}</h3>
    </li>
  )
}