const createObjectFromArray = (array: string[], defaultValue: any) => {
  return array.reduce((acc, cur) => ({...acc, [cur]: defaultValue}), {});
};

export default createObjectFromArray;
