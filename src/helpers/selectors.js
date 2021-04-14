export function getAppointmentsForDay(state, day) {
  if(state.days.length === 0) {
    return [];
  }
  const arrAppFromDays = state.days.filter(days => day === days.name);

  if (arrAppFromDays.length === 0) {
    return [];
  }

  const appArray = [];
  arrAppFromDays[0].appointments.forEach(i => { appArray.push(state.appointments[i]); });
  return appArray;
}
