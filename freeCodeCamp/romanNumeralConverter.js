//b-knd (jingru) on 01 July 2022

//having array variables to store roman number and values
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(num) {
  
  let result = "";
  
  for(let i = 0; i < values.length; i++){
    //loop through the roman array, and moving towards smaller value after appending to result (by comparing values) and deducting from the arguments
    while(num >= values[i]){
      num -= values[i];
      result += roman[i];
    }
  }
  return result;
}

console.log(convertToRoman(2));
