const months = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

function getDay(date) {
  return date.getDate().toString().padStart(2, '0');
}

function getMonth(date) {
  return months[date.getMonth()];
}

function getYear(date) {
  return date.getFullYear();
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
  const beginYear = getYear(beginDate);

  const endDate = new Date(endIso);
  const endDay = getDay(endDate);
  const endMonth = getMonth(endDate);
  const endYear = getYear(beginDate);

  if (beginDay === endDay && beginMonth === endMonth && beginYear === endYear) {
    // 14 februari 2021
    return `${beginDay} ${beginMonth} ${beginYear}`;
  }

  if (beginDay !== endDay && beginMonth === endMonth && beginYear === endYear) {
    // 14 - 17 februari 2021
    return `${beginDay} - ${endDay} ${endMonth} ${beginYear}`;
  }

  if (beginDay !== endDay && beginMonth !== endMonth && beginYear === endYear) {
    // 14 februari - 17 maart 2021
    return `${beginDay} ${beginMonth} - ${endDay} ${endMonth} ${beginYear}`;
  }

  if (beginDay !== endDay && beginMonth !== endMonth && beginYear !== endYear) {
      // 14 februari 2020 - 17 maart 2021
      return `${beginDay} ${beginMonth} ${beginYear} - ${endDay} ${endMonth} ${endYear}`;
  }
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

