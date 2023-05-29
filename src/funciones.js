// Act 1
function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esMayorEdad(20));  // true
  console.log(esMayorEdad(16));  // false
  // Act 2

  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  let base = 9;
  let altura = 12;
  let area = calcularAreaRectangulo(base, altura);
  console.log(area); // Imprimirá el área del rectángulo
 
  // Act 3
  
  function esPalindromo(cadena) {
    let cadenaReversa = cadena.split("").reverse().join("");
    return cadena === cadenaReversa;
  }
  let cadena1 = "Auto";
  let cadena2 = "radar";
  console.log(esPalindromo(cadena1)); // Imprimirá true
  console.log(esPalindromo(cadena2)); // Imprimirá false
  //Act 4

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  let numeroAleatorio = generarNumeroAleatorio();
  console.log(numeroAleatorio); // Imprimirá un número entero aleatorio entre 1 y 10