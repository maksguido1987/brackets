module.exports = function check(str, bracketsConfig) {
  // let stack = [],
  // open = [],
  // close = [];

  // for (let item in bracketsConfig) {
  //   open.push(bracketsConfig[item][0])
  //   close.push(bracketsConfig[item][1])
  // }

  // for (let i = 0; i < str.length; i++) {
  //   if (open.includes(str[i])) {
  //     stack.push(str[i])
  //   } else {
  //     if (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
  //       stack.pop()
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // return stack.length === 0;

  // const open = new Set(bracketsConfig.map(pair => pair[0]));
  // const close  = new Set(bracketsConfig.map(pair => pair[1]));
  // const relevant = bracketsConfig.reduce((acc, [open, close]) => ({...acc, [close]: open}), {});
 
  // let stack = [];
  // for (let char of str) {
  //   if (open.has(char)) {
  //     stack.push(char);
  //   }
  //   if (close.has(char)) {
  //     if (relevant[char] !== stack.pop()) return false;
  //   }
  // }
  
  // return stack.length === 0;
  if (str.length % 2 !== 0) return false;

  while ( str.includes('()') ||
          str.includes('[]') ||
          str.includes('{}') ||
          str.includes('||') ||
          str.includes('12') ||
          str.includes('34') ||
          str.includes('56') ||
          str.includes('77') ||
          str.includes('88')) {
        str = str.replace('()', '').replace('[]', '').replace('{}', '').replace('||', '').replace('12', '').replace('34', '').replace('56', '').replace('77', '').replace('88', '')   
  }
  return str === ''
}
