export function getAppointmentsForDay(state, day) {
  const arrDays = state.days.find(d => day === d.name);
  if(state.days.length < 1 || arrDays === undefined) {
    return []
  }
  return arrDays.appointments.map(i => state.appointments[i])
}

export function getInterview(state, interview) {
  if (interview) {
    interview.interviewer = state.interviewers[interview.interviewer]
  }
  return interview;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);
  const dayInterviewers = filteredDay[0]
  if (dayInterviewers === undefined || dayInterviewers.length === 0) {
    // console.log([])
    return []
  } else {
    const detailedInterviewers = dayInterviewers.interviewers.map(id => state.interviewers[id])
    // console.log(detailedInterviewers)
    return detailedInterviewers
  }
}

