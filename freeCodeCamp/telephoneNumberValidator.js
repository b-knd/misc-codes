function telephoneCheck(str) {
//use the concept of regex expression matching to validate telephone number
  if(/^(1\s)?\d{3}\-\d{3}\-\d{4}$/.test(str)){
    return true;
  } else if(/^(1)?\(\d{3}\)\d{3}\-\d{4}$/.test(str)){
    return true;
  } else if(/^(1\s)?\(\d{3}\)\s\d{3}\-\d{4}$/.test(str)){
    return true;
  } else if(/^(1\s)?\d{3}\s\d{3}\s\d{4}$/.test(str)){
    return true;
  } else if(/^(1)?\d{10}$/.test(str)){
    return true;
  } else {
    return false;
  }      
}

console.log(telephoneCheck("(555) 555-5555"));
