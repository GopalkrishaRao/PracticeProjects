function *getMultipleValues(){
    yield 10;
    yield 20;
};

const result =getMultipleValues()
console.log(result.next().value);
console.log(result.next().value);
