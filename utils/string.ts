/**
 * 문자로 된 숫자를 입력받으면, 세자리 수마다 ,를 찍어서 반환합니다.
 * @param price String
 * @returns String
 */
type priceToStringParams = string | number;

export const priceToString = (price: priceToStringParams) => {
  const priceNumber = typeof price === 'string' ? Number(price) : price;
  return new Intl.NumberFormat().format(priceNumber);
};
