//b-knd(jingru) on 01 July 2022

function rot13(str) {
  //split the string into an array of characters
  let splittedString = str.split("");
  
  //loop through string and convert characters by utilising the ascii character code
  for(let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    if(code > 64 && code < 91){
      code += 13;
      if(code > 90){
        code -= 26;
      }
      splittedString[i] = String.fromCharCode(code);
    }
  }
  return splittedString.join("");
}

console.log(rot13("SERR CVMMN!"));


//TEST

/*
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
