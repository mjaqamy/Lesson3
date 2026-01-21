const startNum: number = 1;
const endNum: number = 20;

let result: string = "0";
//Написать программу, которая выводит сумму всех чисел от 1 до 20
for (let i = startNum; i <= endNum; i++) {
    result = String(+result + i);
}
console.log(result);
