export const coloursCount = (n) => {
  const colorsTitle = ['colour', 'colours'];
  return `${n} ${colorsTitle[n === 1 ? 0 : 1]}`;
};

export const imageProportion = image => (`${image.substring(0, image.length - 4)}3X4$`);
