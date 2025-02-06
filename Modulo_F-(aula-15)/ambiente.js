//[posição 0, posição 1, posição 2, posição 3, ...]
let num = [5, 6, 7, 9];
num.sort(); //coloca em ordem
num.push(1); //adiciona um número no final
console.log(num);
console.log(`O vetor tem ${num} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(7);
if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`O valor 7 está na posição ${pos}`);
}
