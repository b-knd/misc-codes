//b-knd(jingru) on 01 July 2022

function palindrome(str) {
  //remove spaces, special characters and change string to all lowercases to make it case insensitive
  str = str.trim().toLowerCase().replaceAll(/[^a-zA-Z0-9]/ig, "");
  
  //use a recursive call to the function untill the whole string is being checked
  while(str.length > 0){
    //string with only one word is automatically a palindrome
    if(str.length === 1){
      return true;
    } else{
      //check to see if the first and last letter match, then recursively call the same function with substring (after removing the checked letters) as parameter
      if(str[0] === str[str.length-1]){
        return palindrome(str.substring(1, str.length-1));
      } else{
        return false;
      }
    }
  }
  
  return true;
}

console.log(palindrome("My age is 0, 0 si ega ym."));


//TESTS
/*
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/
