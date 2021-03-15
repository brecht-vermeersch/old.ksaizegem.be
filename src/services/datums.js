const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mei",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];

function getDay(date) {
  return date.getDate().toString().padStart(2, '0');
}

function getMonth(date) {
  return months[date.getMonth()];
}

function getHours(date) {
  return date.getHours().toString().padStart(2, '0');
}

function getMinutes(date) {
  return date.getMinutes().toString().padStart(2, '0');
}

export function getActiviteitDate(beginIso, endIso) {
  const beginDate = new Date(beginIso);
  const beginDay = getDay(beginDate);
  const beginMonth = getMonth(beginDate);

  const endDate = new Date(endIso);
  const endDay = getDay(endDate);
  const endMonth = getMonth(endDate);

  if (beginDay === endDay && beginMonth === endMonth) {
    return `${beginDay} ${beginMonth}`;
  }

  return `${beginDay} ${beginMonth} - ${endDay} ${endMonth}`;
}


export function getActiviteitTime(beginIso, endIso) {
  const beginDate = new Date(beginIso);
  const beginHours = getHours(beginDate);
  const beginMinutes = getMinutes(beginDate);

  const endDate = new Date(endIso);
  const endHours = getHours(endDate);
  const endMinutes = getMinutes(endDate);

  return `${beginHours}u${beginMinutes} - ${endHours}u${endMinutes}`;
}

