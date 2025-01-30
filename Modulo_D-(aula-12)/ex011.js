/* Condições Aninhadas
    if (cond1) {
          bloco 1
    } else {
          if (cond2) {
                bloco 2
          } else {
              bloco 3 
          }
*/

var idade = 70;
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto Obrigatório");
}
