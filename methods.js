// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const numbers=[3,4,7,9,0,4,5];
const customReducer=(array,callback)=>{
    let total=0;
    for(let i=0; i<array.length; i++){
        const res=callback(total,array[i])
        total=res
    }
    return total
}
console.log(customReducer(numbers,(t,c)=>t+c))
const customSome=(array,callback)=>{
    for(let i=0; i<array.length; i++){
        const res=callback(array[i])
        if(res){
            return array[i];
            break;
        }
    }
    return null
}
console.log(customSome(numbers,(i)=>i==9))

const customEvery=(array,callback)=>{
    let length=0;
    for(let i=0; i<array.length; i++){
        const res=callback(array[i])
        if(res)length++;
    }
    if(length===array.length)return true
    return false
}

console.log(customEvery([9,9,9,9,9],(i)=>i==9))

console.log("Welcome to Programiz!");