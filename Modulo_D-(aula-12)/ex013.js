/*    Condição Múltipla 
    switch (expressão) {
    case 1: bloco 1
    break;

    case 2: bloco 
    break;

    case 3: bloco 3
    break;

    default: 
    break;
    */
var agora = new Date();
var diaSem = agora.getDay();

//console.log(diaSem);
switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda");
    break;

  case 2:
    console.log("Terça");
    break;

  case 3:
    console.log("Quarta");
    break;

  case 4:
    console.log("Quinta");
    break;

  case 5:
    console.log("Sexta");
    break;

  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Error, Inválido!");
    break;
}
