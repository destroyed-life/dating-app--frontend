/**
 * 문자로 된 숫자를 입력받으면, 세자리 수마다 ,를 찍어서 반환합니다.
 * @param price String
 * @returns String
 */
export const priceToString = (price: string) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
