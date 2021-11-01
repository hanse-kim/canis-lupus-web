const getCommonError = (e: any) => {
  console.log(e);
  if (e.response) {
    return e.response.data.message;
  } else {
    return e.message;
  }
};

export default getCommonError;
