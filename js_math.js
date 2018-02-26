
//Math 1
  function zeroNegativity(arr){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < 0){
    return false;
      }
    }
    return true;

  }
console.log(zeroNegativity([-2, -4, -5]))

//Math 2
  function is_even(num){
    if (num % 2 === 0){
    return true;
    }
    else{
      return false;
    }
  }
console.log(is_even([2, 2, 4]))

//Math 3
  function howManyEven(arr) {
  	let sum = 0;
  	for (let i =0; i < arr.length; i++) {
  		if (howManyEven(arr[i] % 2 === 0 )) {
  			sum += 1;
  		}
  	}
  	return sum;
  }
console.log(howManyEven([2, 2, 4]))

//Math 4
  function create_dummy_array(num){
    const arr = [];
    for(let i = 0; i < num; i++){
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }
create_dummy_array(12)

//Math 5

  function randomChoice(arr) {
  			let index = Math.floor(Math.random() * arr.length);
  			return arr[index];
  		}

console.log(randomChoice([5, 6, 7, 9]))
