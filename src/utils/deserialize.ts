// a base deserializer utility use by HYGEN generator when making BV APIs
export const deserialize = (item, idParam: string) => {
  return {
    ...item,
    id: item[idParam.charAt(0).toLowerCase() + idParam.slice(1)],
  };
};

export const serialize = (item) => {
  delete item.id;
  return item;
};
