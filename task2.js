
reverseString = (string) => {
  let strOutput = [];
  string.split('').forEach(ch => {
    strOutput.unshift(ch);
  });
  return strOutput.join('');
}


module.exports =  reverseString 
 

