const getCommonError = (e: any) => {
  if (e.response) {
    return e.response.data.message;
  } else {
    return e.message;
  }
};

export default getCommonError;
