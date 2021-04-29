export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find(d => day === d.name);
  if (state.days.length === 0 || filteredDays === undefined) {
    return []
  }
  return filteredDays.appointments.map(id => state.appointments[id])
}

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  const interviewerData = state.interviewers[interview.interviewer];

  return {
    student: interview.student,
    interviewer: interviewerData
  }
};

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);
  const dayInterviewers = filteredDay[0]
  if (dayInterviewers === undefined || dayInterviewers.length === 0) {
    return []
  } else {
    const detailedInterviewers = dayInterviewers.interviewers.map(id => state.interviewers[id])
    return detailedInterviewers
  }
}





