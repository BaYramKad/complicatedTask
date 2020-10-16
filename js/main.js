// const array = [2,6,6,2,1,9]; Этот пример я оставил для себя

// const result = array.map(item => {
//     item *= item
//     return item ** 3;
// });
// console.log(result);
// console.log(result[0]);

const num = 266219;
let a = "" + num; 
for (let i = 0; i < a.length; i++){
    let num2 = ((a[i] * a[i]) ** 3); 
    console.log(num2);
};
for (let i = 0; i < a.length; i++){
    let num2 = ((a[i] * a[i]) ** 3); 
    console.log(num2);
    break;
};