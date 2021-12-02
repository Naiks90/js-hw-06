// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str) {
  const a = str.toLowerCase().split('');
  const filterperley = a.filter(function (skill, index) {
    return a.indexOf(skill) === index;
  });

  if (a.length === filterperley.length) {
    return true;
  }
  return false;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
