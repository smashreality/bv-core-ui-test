export const reponseSuccessUnwrap = (response) => {
  if (response && response.data) return response.data;

  return response;
};
