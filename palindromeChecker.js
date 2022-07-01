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
