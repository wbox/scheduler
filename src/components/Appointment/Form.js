import React, { useState } from 'react'
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [error, setError] = useState("");

  const reset = () => {
    setName("")
    setInterviewer(null)
    return
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }

    if(!interviewer) {
      setError("You must select and interviewer and get your Scheduler project approved!");
      return;
    }

    setError("");
    props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder={"Enter Student Name"}
            onSubmit={event => event.preventDefault()}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  )
}
