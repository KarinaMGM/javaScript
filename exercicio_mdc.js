// calcular o MDC de 12 e 18

 function calcularMDC (num1, num2) {

     var resto;

     do {

         resto = num1 % num2;

         num1 = num2;

         num2 = resto;

     } while (resto != 0);

     return num1;

 }

var resultado = calcularMDC(15, 20);

console.log(resultado);


