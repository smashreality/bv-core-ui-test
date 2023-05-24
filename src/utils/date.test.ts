import {
  convertLocaleDateTimeToUTC,
  converteDateToISO,
  convertUTCtoLocaleDateTime,
  format,
  formatISODate,
} from "./date";

describe("format", () => {
  it("should return the date in the specified format", () => {
    const date = "2020-01-01";
    const formatString = "MMM-DD-YYYY HH:mm";
    const result = format(date, formatString);
    expect(result).toEqual("Jan-01-2020 00:00");
  });

  it("should return the date in the default format if no format is passed", () => {
    const date = "2020-01-01";
    const result = format(date);
    expect(result).toEqual("01/01/2020 12:00 AM");
  });
});

describe("formatISODate", () => {
  it("should return the ISO date string in format 'YYYY-MM-DDTHH:mm:ss'", () => {
    const date = new Date("2020-01-01");
    const result = formatISODate(date);
    expect(result).toEqual("2020-01-01T00:00:00");
  });
});

describe("convertLocaleToUTC", () => {
  it("should convert a date string in a specific locale to UTC", () => {
    const localeDateString = "2023-04-04T15:30:00.000";
    const expectedUTCDateString = "2023-04-04T19:30:00.000"; // Expected UTC date string

    expect(convertLocaleDateTimeToUTC(localeDateString)).toEqual(
      expectedUTCDateString
    );
  });
});

describe("convertUTCtoLocal", () => {
  it("should convert a UTC date string to the browser timezone", () => {
    const utcDateString = "2023-04-04T22:30:00.000";
    const expectedLocalDateString = "4/4/2023, 6:30:00 PM"; // Expected local date string

    expect(convertUTCtoLocaleDateTime(utcDateString).toLocaleString()).toEqual(
      expectedLocalDateString
    );
  });
});

describe("convertUTCtoLocal and format", () => {
  it("should convert a UTC date string to the browser timezone and convert it to format", () => {
    const localDateString = "2023-04-04T22:30:00.000";
    const expectedUTCDateString = "04/04/2023 06:30 PM"; // Expected local date string

    const converted = convertUTCtoLocaleDateTime(localDateString);

    expect(format(converted)).toEqual(expectedUTCDateString);
  });
});

describe("convertLocaleDateToUTC", () => {
  it("should convert a date string in a specific locale to UTC and set the hour to 12:00am", () => {
    const localeDateString = "04/04/2023 15:30:00";
    const expectedUTCDateString = "2023-04-04T00:00:00.000"; // Expected UTC date string

    expect(converteDateToISO(localeDateString)).toEqual(expectedUTCDateString);
  });

  it("should convert a date 12:00am, convert to UTC and back to Local Date again", () => {
    const serverDateString = "04/04/2023 15:30:00";
    const expectedUTCDateString = "2023-04-04T00:00:00.000"; // Expected UTC date string

    // setting value prop on component datepicker
    let componentDateString = converteDateToISO(serverDateString);

    expect(componentDateString).toEqual(expectedUTCDateString);

    // onChange set value to UTC date string
    componentDateString = converteDateToISO(expectedUTCDateString);

    expect(componentDateString).toEqual(expectedUTCDateString);
  });
});

// This is an ISO 8601 date and time format. It is the default format for moment().toISOString().
//2023-04-14T17:02:17.93
//yyyy-MM-dd'T'HH:mm:ss.SSS
