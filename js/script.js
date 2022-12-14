const array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function Sortowanie(array) {
   for (let i = 1; i < array.length; i++) {
      const pom = array[i];
      let j = i - 1;
      for (; j >= 0 && array[j] > pom; j--) {
         array[j + 1] = array[j];
      }
      array[j + 1] = pom;
   }

   return array
}

console.log(Sortowanie(array));