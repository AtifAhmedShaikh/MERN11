const numbers=[6,8,0,9,8,5,1,2,3,6,4,4,7,8];
const maxNumber=Math.max(...numbers);
const minNumber=Math.min(...numbers);
const double=numbers.map(number=>number*2);
const total=numbers.reduce((total,curr)=>total+curr);
const filter=numbers.filter(number=>number<=5);
const find=numbers.find(number=>number===5);
const findIndex=numbers.findIndex(number=>number===5);
const some=numbers.some(number=>number===10);
const every=numbers.some(number=>number>=10);
const table=(tableNumber,startIndex,endIndex)=>{
    for (let index = startIndex; index < endIndex; index++) {
        const line=`${tableNumber} X ${index} = ${tableNumber*index}`;
        console.log(line);
    }
}
table(5,1,10);
const checkPrimeNumber=(number)=>{
    if (number <= 1) {
        return false;
      }
     else if (number >= 1&&number <= 3) {
        return true;
      }
     else if (number % 2 === 0 || number % 3 === 0) {
        return false;
      }
}
const checkEvenOddNumber=(number)=>{
    if(number%2===0)return true;
    return false;
}
const calculateFactorialNumber=(number)=>{
    return number;
}
const sumOfNumbers=(endIndex)=>{
    let total=0;
    for (let index = 1; index < endIndex; index++) {
        total+=index;
    }
    return total;
}
console.log(minNumber,maxNumber);
console.log(checkPrimeNumber(1));
console.log(sumOfNumbers(5));
console.log(checkEvenOddNumber(2));
console.log(calculateFactorialNumber(2));
