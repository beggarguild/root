/**
 * @name fluid
 * @description Fluid typography
 * @tutorial https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 * @tutorial https://css-tricks.com/between-the-lines/
 * @param {number} minSize - The minimum size of the font
 * @param {number} maxSize - The maximum size of the font
 * @param {number=30} minWidth - The maximum width of the screen before the font starts interpolating
 * @param {number=90} maxWidth - The maximum width of the screen before the font finishes interpolating
 * @returns A media query that interpolates text between two sizes
 */

export const fluid = (minSize: number, maxSize: number, minWidth: number = 30, maxWidth: number = 90) => {
  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const base = minSize - slope * minWidth;
  const adjSize = `calc( ${base}rem + ( 100vw * ${slope} ) )`;
  const adjSizeEdge = `clamp( ${minSize}rem, ${base}rem + ${slope * 100}vw, ${maxSize}rem )`;

  return `
    font-size: ${minSize}rem;
    @media screen and ( min-width: ${minWidth}rem ) {
      font-size: ${adjSize};
      font-size: ${adjSizeEdge};
    }
    @media screen and ( min-width: ${maxWidth}rem ) {
      font-size: ${maxSize}rem;
    }
  `;
};
export default fluid;
