module.exports = function check(str, bracketsConfig) {
  temp='';
  while (temp!=str) {
    temp=str;
    bracketsConfig.forEach(item=>str=str.replaceAll(item.join(''),''));
  }
  return str=='';
}
