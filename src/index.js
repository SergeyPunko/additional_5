module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  let stack = [];
  let arr = str.split('');
  for (var i=0; i<bracketsConfig.length;i++){
    brackets[bracketsConfig[i][0]]=bracketsConfig[i][1];
  }
  const vals = Object.keys(brackets).map(key => brackets[key]);
  const keys = Object.keys(brackets);   
  if (arr.length ==1) return false;
  if (vals.indexOf(arr[0])!=-1 && vals[vals.indexOf(arr[0])]!=keys[keys.indexOf(arr[0])]) return false;
  stack.push(vals[keys.indexOf(arr[0])]);
  for (var i=1;i<arr.length;i++){
    if(vals[vals.indexOf(arr[i])]==stack[stack.length-1] && stack.length>0){
      stack.pop();
    } else if(keys.indexOf(arr[i])!=-1){
      stack.push(vals[keys.indexOf(arr[i])]);
    } else return false;
  }
  if (stack.length>0) return false
  else return true;
}
