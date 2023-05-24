export const getInitials = (name = '') => {
  return name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');
};

export const pluralize = (count, noun, suffix = 's') => `${noun}${count > 1 ? suffix : ''}`;

export const camelize = (str: string = '') => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const pascalize = (str: string = '') => {
  let _out = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

  if (_out) return _out.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join('');

  return str;
};

export const wordize = (str) => str.replace(/([a-z])([A-Z])/g, '$1 $2');

export const isNumeric = (str) => {
  if (typeof str != 'string') return false;
  return !isNaN(str as any) && !isNaN(parseFloat(str));
};

export const stringToBoolean = (str) => {
  if (str && typeof str === 'string') {
    if (str.toLowerCase() === 'true') return true;
    if (str.toLowerCase() === 'false') return false;
  }
  return str;
};
