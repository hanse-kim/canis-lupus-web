const hexToRgb = (hex: string) => {
  hex = hex.trim().replace('#', '');
  const hexSplited = hex.length === 3 ? hex.split('') : hex.match(/.{1,2}/g);
  const rgb = [0, 0, 0];
  hexSplited?.forEach((value, i) => {
    if (value.length === 1) {
      value = value + value;
    }

    rgb[i] = parseInt(value, 16);
  });

  return rgb;
};

const rgbToHex = (rgb: number[]) => {
  const result: string[] = [];
  rgb.forEach((value, i, arr) => {
    const hex = value.toString(16).padStart(2, '0');
    result[i] = hex;
  });

  return `#${result.join('')}`;
};

const multiplyColors = (hex1: string, hex2: string) => {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const result = [];
  for (let i = 0; i < rgb1.length; i++) {
    result.push(Math.floor((rgb1[i] / 255) * (rgb2[i] / 255) * 255));
  }
  return rgbToHex(result);
};

export default multiplyColors;
