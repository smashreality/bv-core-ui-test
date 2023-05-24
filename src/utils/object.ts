export const isObjectEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const objFromArray = (arr: any[], key: string = "id") =>
  arr.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});

export const removeEmpty = (obj): any => {
  const results = Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) => v !== null && v !== "" && v !== "undefined"
    )
  );

  return results;
};

export const serializeObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const groupBy = (data, getValue) => {
  const res = data.reduce((acc, curr) => {
    let group = getValue(curr);
    if (!acc[group]) acc[group] = []; //If this type wasn't previously stored
    acc[group].push(curr);
    return acc;
  }, []);

  return res;
};

export const isEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

// recursive
// function removeEmpty(obj) {
//   return Object.fromEntries(
//     Object.entries(obj)
//       .filter(([_, v]) => v != null)
//       .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
//   );
// }

export const skeleton = (source) => {
  if (!source) return source;
  if (Array.isArray(source)) return [];
  const obj = Object.create(Object.getPrototypeOf(source));
  Object.assign(obj, source);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      switch (typeof obj[key]) {
        case "object":
          obj[key] = skeleton(obj[key]);
          break;
        case "string":
          obj[key] = "";
          break;
        case "number":
          obj[key] = 0;
          break;
        case "boolean":
          obj[key] = false;
          break;
      }
    }
  }
  return obj;
};
