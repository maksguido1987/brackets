module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false;

  let arr = bracketsConfig.map((item) => item.join(""));
   
   while (arr.some(item => str.includes(item))) {
      for (let i = 0; i < arr.length; i++) {
         str = str.replace(arr[i], '')
      }
   }

  return str === "";
}
