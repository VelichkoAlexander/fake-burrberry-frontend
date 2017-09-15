const multiplyResolution = (string, factor) => (
  string.replace(/&wid=\d+/g, matchRegExp => (matchRegExp.slice(0, 5) + (matchRegExp.slice(5) * factor)))
    .replace(/&hei=\d+/g, matchRegExp2 => (matchRegExp2.slice(0, 5) + (matchRegExp2.slice(5) * factor))));

export const imageRetina2 = str => (multiplyResolution(str, 2));
export const imageRetina3 = str => (multiplyResolution(str, 3));
