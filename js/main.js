function add(num) {
    let result = 0;
  
    return function (num) {
        return result += num;
    }
}

const sum = add();
  
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log(sum(-20));
console.log(sum(-5));