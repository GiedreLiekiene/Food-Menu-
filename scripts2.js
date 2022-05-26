
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(function (item) {
  return item * 2;
});

const map2 = array1.map(item => item * 2);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



console.log(map1);
// expected output: Array [2, 8, 18, 32]


console.log(menu);