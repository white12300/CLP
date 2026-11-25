const add = (a,b) => {
    return a + b;
};

function multiply(a,b){
    return a * b;
}

const greet = (name ="ゲスト") => {
    return `こんちゃ${name}`;
};

console.log(add(2, 1));
console.log(multiply(2, 1));
console.log(greet());
console.log(greet("阿部"));
