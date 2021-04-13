import React from 'react';
import classNames from "classnames/bind";
import 'components/InterviewerListItem.scss';

/*
<InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected
      />
*/

const InterviewerListItem = (props) => {
  

  const liClass = classNames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  })

  return (
    <li 
      className={liClass}
      onClick={props.setInterviewer}
      // onClick={() => props.setInterviewer(props.name)}
      selected={props.selected}
      id={props.id}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}

export default InterviewerListItem;