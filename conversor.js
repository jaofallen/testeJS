let valueMeters = prompt("Insira Resultado em Metros: ");

// let valueMetersNumeric = parseFloat(valueMeters);

const measurementChoice = prompt(
  "Para qual medida deseja converter? \n\n1) milímetro (mm)\n2) centímetro (cm)\n3) decímetro (dm)\n4) decâmetro (dam)\n5) hectômetro (hm)\n6) quilômetro (km)"
);

let resultChoice;

// Resultado fazendo cálculo direto na variável

switch (measurementChoice) {
  case "1":
    valueMeters * 1000;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters * 1000 + " milimetros");
    break;
  case "2":
    valueMeters * 100;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters * 100 + " centímetros");
    break;
  case "3":
    valueMeters * 10;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters * 10 + " decímetros");
    break;
  case "4":
    valueMeters / 10;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters / 10 + " decâmetros");
    break;
  case "5":
    valueMeters / 100;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters / 100 + " hectômetros");
    break;
  case "6":
    valueMeters / 1000;
    alert("Resultado é: " + valueMeters + "m = " + valueMeters / 1000 + " quilometros");
    break;
  default:
    alert("Valor de medida incorreto");
}

// Resultado fazendo cálculo através de uma variável alternativa

// switch (measurementChoice) {
//   case "mm":
//     resultChoice = valueMeters * 1000;
//     break
//   case "cm":
//     resultChoice = valueMeters * 100;
//     break
//   case "dm":
//     resultChoice = valueMeters * 10;
//     break
//   case "dam":
//     resultChoice = valueMeters / 10;
//     break
//   case "hm":
//     resultChoice = valueMeters / 100;
//     break
//   case "km":
//     resultChoice = valueMeters / 1000;
//     break
//   default:
//     alert("Formato de medida errado");
// }

// alert(resultChoice + " milimetros");
