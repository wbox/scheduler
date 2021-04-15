export function getAppointmentsForDay(state, day) {
  const arrDays = state.days.find(d => day === d.name);
  if(state.days.length < 1 || arrDays === undefined) {
    return []
  }
  return arrDays.appointments.map(i => state.appointments[i])
}

export function getInterview(state, interview) {
  // console.log("state inside selector: ", state);
  // console.log("interview inside selector: ", interview);

  if (interview) {
    interview.interviewer = state.interviewers[interview.interviewer]
  }
  return interview;

}

