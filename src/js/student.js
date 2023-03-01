//export default: khai báo để các module khác có thể gọi tới để sử dụng biến /hàm này
//  - 1 module chỉ có thể export default 1 lần
//  - 2 nếu export default, khi ta import có thể đặt tên biến tùy ý và không cần dấu {}

export default class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}