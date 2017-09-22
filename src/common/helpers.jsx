export const coloursCount = (n) => {
  const colorsTitle = ['colour', 'colours'];
  return `${n} ${colorsTitle[n === 1 ? 0 : 1]}`;
};
export const descriptionCut = description => `${description.slice(0, 190)}... `;
export const imageProportion = image => `${image}?$BBY_V2_ML_3X4$`;
export const titleDescriptionCut = description =>
  description.split('.')[0].slice(7);
