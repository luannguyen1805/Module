// exprot: khai báo để các module khác có thể gọi tới để sử dụng biến /hàm này
export const PI = 3.14;
export function circleArea(r) {
    return PI * r ** 2;
}