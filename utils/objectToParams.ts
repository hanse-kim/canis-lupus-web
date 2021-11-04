const objectToParams = (obj: any) => {
  if (!obj) {
    return '';
  }

  return Object.keys(obj)
    .map((key) => (obj[key] ? `${key}=${encodeURIComponent(obj[key])}` : ''))
    .join('&');
};

export default objectToParams;
