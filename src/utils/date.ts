import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const format = (date: string | Date, format?: string) =>
  dayjs(date).format(format ? format : process.env.REACT_APP_DATE_TIME_FORMAT ?? 'MM/DD/YYYY hh:mm A');

export const formatISODate = (date: Date | Dayjs | string) => {
  return dayjs(date).toISOString().split('.')[0];
};
// https://codeopinion.com/just-store-utc-not-so-fast-handling-time-zones-is-complicated/
// https://medium.com/from-the-scratch/software-engineering-101-time-zones-and-working-with-dates-a138364ac769

export const convertLocaleDateTimeToUTC = (date: Date | string): string => {
  return dayjs(date).utc().toDate().toISOString().replace('Z', '');
};

export const converteDateToISO = (date: Date | string): string => {
  const _date = new Date(date);
  _date.setUTCHours(0, 0, 0, 0);
  return _date.toISOString().replace('Z', '');
};

export const convertUTCtoLocaleDateTime = (date: string): Date =>
  dayjs(date + 'Z')
    .utc()
    .local()
    .toDate();
