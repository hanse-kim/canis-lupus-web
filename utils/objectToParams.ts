const objectToParams = (obj: any) => {
  return Object.keys(obj)
    .map((key) => (obj[key] ? `${key}=${encodeURIComponent(obj[key])}` : ''))
    .join('&');
};

export default objectToParams;
