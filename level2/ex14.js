function solution(w, h) {
  // 주어진 사각형이 정사각형인 경우
 if (w === h) {
     // 사용 불가능한 정사각형의 개수 = 한 변의 길이
     return w * h - w
 }
 
 // 만약 한 변의 길이가 1인 경우
 if (w == 1 || h == 1) {
     // 사용 가능한 정사각형의 개수 = 0
     return 0   
 }
 
 // 사용할 수 있는 정사각형의 개수
 let count = 0;
 
 // 직사각형의 대각선에 대응하는 함수 
 const f = (x) => h * x / w
 
 for (let i = 0; i < w; i++) {
     // x좌표가 i일 때 y좌표와 (i+1)일 때 y좌표
     const y = [Math.floor(f(i)), Math.ceil(f(i+1))];
     
     // 두 좌표 사이에 사용 불가능한 정사각형의 개수 = 두 y좌표의 차
     count += y[1] - y[0]    
 }
 
 return w * h - count;
}