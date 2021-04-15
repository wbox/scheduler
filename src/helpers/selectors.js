export default function getAppointmentsForDay(state, day) {

  const arrDays = state.days.find(d => day === d.name);

  if(state.days.length < 1|| arrDays === undefined) {
    return []
  }

  return arrDays.appointments.map(i => state.appointments[i])

}
