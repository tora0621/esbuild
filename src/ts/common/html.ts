/**
 * @description lit-htmlをインストールしなくてもlit-html拡張機能を利用できるようにする
 * @see https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
 */
export const html = (literals: TemplateStringsArray, ...placeholders: string[]): string => {
  let result = '';
  placeholders.forEach((placeholder, i) => {
    result += literals[i];
    result += placeholder;
  });
  result += literals[literals.length - 1];
  return result;
};
