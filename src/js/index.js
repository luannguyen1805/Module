import { PI, circleArea } from './utils.js';
import { getProducts } from "./services.js";
import Student from './student.js';
console.log(PI);
console.log("Diện tích hình tròn: ", circleArea(6));

const student = new Student("01", "nam", "nam@mail");
console.log(student);

getProducts().then((response) => console.log(response.data));