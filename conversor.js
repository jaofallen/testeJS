let valueMeters = prompt("Insira o valor em Metros: ");

// let valueMetersNumeric = parseFloat(valueMeters);

const measurementChoice = prompt(
  "Para qual medida deseja converter? \n\nmilímetro (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nhectômetro (hm)\nquilômetro (km)"
);

let resultChoice;

// switch (measurementChoice) {
//   case "mm":
//     valueMeters * 1000;
//     alert("O valor é: " + valueMeters * 1000 + " milimetros");
//     break;
//   case "cm":
//     valueMeters * 100;
//     alert("O valor é: " + valueMeters * 100 + " centimetros");
//     break;
//   case "dm":
//     valueMeters * 10;
//     alert("O valor é: " + valueMeters * 10 + " decimetros");
//     break;
//   case "dam":
//     valueMeters / 10;
//     alert("O valor é: " + valueMeters / 10 + " decametros");
//     break;
//   case "hm":
//     valueMeters / 100;
//     alert("O valor é: " + valueMeters / 100 + " hectometros");
//     break;
//   case "km":
//     valueMeters / 1000;
//     alert("O valor é: " + valueMeters / 1000 + " quilometros");
//     break;
//   default:
//     alert("Valor de medida incorreto");
// }

switch (measurementChoice) {
  case "mm":
    resultChoice = valueMeters * 1000;
    break
  case "cm":
    resultChoice = valueMeters * 100;
    break
  case "dm":
    resultChoice = valueMeters * 10;
    break
  case "dam":
    resultChoice = valueMeters / 10;
    break
  case "hm":
    resultChoice = valueMeters / 100;
    break
  case "km":
    resultChoice = valueMeters / 1000;
    break
  default:
    alert("Formato de medida errado");
}

alert(resultChoice + " milimetros");
