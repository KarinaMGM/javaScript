//soma de todos os múltiplos de 5 ou 7 abaixo de 1000

var multiplos7 = 0;
var multiplos5 = 0;

for (i = 0; i < 1000; i++) {
  multiplos7 += (i % 7 == 0) ? i : 0;
  multiplos5 += (i % 5 == 0) ? i : 0;
}
console.log("Somatórios dos Múltiplos de 7: " + multiplos7);
console.log("Somatórios dos Múltiplos de 5: " + multiplos5);
console.log("Somatórios dos Múltiplos de 5 e 7: " + parseInt(multiplos7+multiplos5))