const objectToFormData = (object: any) => {
  const formData = new FormData();
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        formData.append(key, value[i]);
      }
    } else {
      formData.append(key, object[key]);
    }
  }

  return formData;
};

export default objectToFormData;
