import React, { useState, useEffect } from "react";
import axios from 'axios';
import "components/Application.scss";
import DayList from "components/DayList";
// import InterviewerListItem from "components/InterviewerListItem";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

const arrAppointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Bla",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  },
  {
    id: 6,
    time: "5pm",
    interview: {
      student: "Lalalalal",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];


export default function Application(props) {

  const [ state, setState ] = useState({
    day: "Monday",
    days: [],
    appointments: arrAppointments
  });
  
  useEffect(() => {

    const urls = {
      "GET_DAYS": "http://localhost:8001/api/days",
      "GET_APPOINTMENTS": "http://localhost:8001/api/appointments",
      "GET_INTERVIEWERS": "http://localhost:8001/api/interviewers"
    };

    const pGetDays = axios.get(urls.GET_DAYS);
    const pGetAppointments = axios.get(urls.GET_APPOINTMENTS);
    const pGetInterviewers = axios.get(urls.GET_INTERVIEWERS);
    const promisses = [ pGetDays, pGetAppointments, pGetInterviewers ];

    Promise.all(promisses).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      console.log(all[2].data);
    });


  }, []);
      
      // here, ...state is taking the entire object from line 83
      // and overwriting day with the value from 84 which is the current
      // state or whatever the value will be when this function is called
  const setDay = day => setState({ ...state, day});
      
      // It is taking the previous state for days (which is [] - see line 85)
      // and overwriting it with the new value for days coming from the line 94
      // (in this case)
      //const setDays = days => setState(prev => ({ ...prev, days}));
      // ^^ Removed according with https://web.compass.lighthouselabs.ca/days/w07d3/activities/1012
  
  // W07D04
  const schedule = getAppointmentsForDay(state, state.day).map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    console.log("interview from getIntervew ===> ", interview);
    return (
      <Appointment 
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
      )
    })
  
      return (
        <main className="layout">
      <section className="sidebar">
      <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
          />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days} 
            day={state.day} 
            setDay={setDay} 
            />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
          />
      </section>
      <section className="schedule">

        < Appointment key="last" time="6pm" />
      </section>
    </main>
  );
}
