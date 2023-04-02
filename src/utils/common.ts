/**
 * 함수 실행에 deplay를 추가
 * @argument callback 딜레이를 줄 함수
 */
const delay = (callback: () => void, delayTime: number) => {
  return setTimeout(callback, delayTime);
};

export { delay };
