
/* 연산자 */
function calc() {
let a = 2;
let b = 4

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a**b);} 


/* 증감 연산자 
postfix방식: a++
prefix 방식 ++a   */ 

function calc2() {

    let a = 1;
    let b = a++;
    console.log(a,b);

    let c = 1;
    let d = ++c;
    console.log(d);
}

/* 비교 연산자(Comparison Operator)

"<,>,="
*/

// function statement를 사용 //
function sum(a,b){
    return a+b;
}

//arrow function expression을 사용
const multiply = (a,b) => {
    return a*b;
}




