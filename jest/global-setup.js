module.exports = async () => {
  process.env.TZ = "America/New_York";
  process.env.REACT_APP_DATE_TIME_FORMAT = "MM/DD/YYYY hh:mm A";
};
