import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = (props) => {

  const [ name, setName ] = useState(props.name || "");
  const [ interviewer, setInterviewer ] = useState(props.interviewer || null);

  const reset = () => {
    setName("")
    setInterviewer(null)
    return
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  const save = () => {
    props.onSave(name, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"
          >
          <input
            className="appointment__create-input text--semi-bold"
            // name={props.name}
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder={props.name ? props.name : "Enter Student Name"}
            onSubmit={event => event.preventDefault()}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers} 
          value={interviewer} 
          setInterviewer={setInterviewer} 
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          {/* <Button danger onClick={props.onCancel}>Cancel</Button> */}
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
          {/* <Button confirm onClick={() => { props.onSave(name, interviewer)}}>Save</Button> */}
        </section>
      </section>
    </main>
  )
}

export default Form;