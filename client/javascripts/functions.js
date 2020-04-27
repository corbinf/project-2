// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//revWords 1 (for loop)

let revWord = (word) => {
  let result = "";

  for (var i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};

let revWords1 = (sent) => {
  let arr = sent.split(" ");
  let result = "";

  for (var i = 0; i < arr.length; i++){
    result = result + revWord(arr[i]) + " ";
  }
  return result;
};

//revWords 2 (forEach loop)

let revWord = (word) => {
  let result = "";

  for (var i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};

let revWords2 = (sent) => {
  let arr = sent.split(" ");
  let result = "";

  arr.forEach((words2) => {
    result = result + revWord(words2) + " ";
  });
  return result;
};

//revWords3 (for of loop)

let revWord = (word) => {
  let result = "";

  for (var i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};

let revWords3 = (sent) => {
  let arr = sent.split(" ");
  let result = "";

  for(words3 of arr) {
    result = result + revWord(words3) + " ";
  }
  return result;
};
