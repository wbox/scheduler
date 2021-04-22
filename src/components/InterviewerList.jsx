import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import 'components/interviewerList.scss';

/*
 * interviewers:array - an array of objects containing the information of each interviewer
 * interviewer:number - the id of an interviewer
 * setInterviewer:function - a function that accepts an interviewer id
*/

const InterviewerList = (props) => {
 
  const interviewerData = props.interviewers.map((i) => {
    return (
    <InterviewerListItem
     key={i.id}
     id={i.id}
     name={i.name}
     avatar={i.avatar}
     selected={i.id === props.value}
     setInterviewer = {() => {
        props.setInterviewer(i.id)
     }} />
   )
  });


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerData}</ul>
    </section>
  )

}

export default InterviewerList;