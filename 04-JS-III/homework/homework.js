// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  console.log('Primer elemento del arreglo: '+ array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log('El ultimo elemento del arreglo: '+ array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log('Tamano del arreglo: '+ array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i=0; i<array.length; i++)
  {
    array[i]=array[i]+1;
  }
  for(var i=0; i< array.length; i++)
  {
    console.log('arreglo['+i+']'+ '='+ array[i]);
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  for(var i=0; i<array.length; i++)
  {
    console.log(''+array[i]);
  }
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  for(var i=0; i<array.length; i++)
  {
    console.log(''+array[i]);
  }
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for(var i=0; i<palabras.length; i++)
  {
    console.log(palabras[i]+' ');
  }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0; i<array.length; i++)
  {
    var valorr=array[i];
    console.log(array[i]);
    if(valorr==elemento)
    {
      console.log(true);
    }
    else
    {
      console.log(false);
    }
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado =0;
  for(var i=0; i<numeros.length; i++)
  {
    resultado=resultado+numeros[i];
  }
  console.log('resultado de la suma de todos lo numeros: '+ resultado);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedioo=0;
  for(var i=0; i<resultadosTest.length; i++)
  {
    promedioo=promedioo/resultadosTest.length;
    console.log('promedio: '+ promedioo);
  }
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayornum=0;
  for(var i=0; i<numeros.length; i++)
  {
    if(numeros[i]>mayornum)
    {
      mayornum= numeros[i];
    }
  }
  console.log('El numero mas grande: '+ mayornum);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments==0)
  return 0;
  else
  {
    var multnum;
    for(var i=0; i<arguments.length;i++)
    {
      multnum=multnum+( multnum*arguments[i]);
    }
    return multnum;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cuenta;
  for(var i=0; i< arreglo.length;i++)
  {
    if(arreglo[i]>18)
    {cuenta=cuenta+1;}
  }
  console.log('catidad de elementos mayores de 18:',cuenta);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia==1 || numeroDeDia==7)
  {
    console.log('Fin de semana');
  }
  else
  { console.log('dia laboral');
  } 
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if( n== 9)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i=0; i<arreglo.length-1; i++)
  {
    if(arreglo[i]!==arreglo[i+1])
    {
     return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var i=0;
  var arreglo;
  for(var j=0; j<array.length; j++)
  {
    if(array[j]== "Enero" ||array[j]== "Marzo" || array[j] == "Noviembre")
    {
      arreglo[i]=array[j];
      i++;
    }
  }
  for(var j=0; j<arreglo.length; j++)
  {
    console.log(arreglo[j]);
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arreglo;
  var j=0;
  for(var i=0; i<array.length; i++)
  {
    if(array[i]>100)
    {
      arreglo[j]=array[i];
      j++;
    }
  }
  for(var i=0; i<arreglo.length; i++)
  {
    console.log(arreglo[i]);
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arreglo =[];
  for(var i=0;i<10;i+2)
  {
    if(numero==i)
    {
      break;
    }else
    {
      numero=numero+2;
      arreglo.push(numero);
    }
  }
return arreglo;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arreglo=[];
  for(var i=0; i<10; i++)
  {
    if(i==5)
    {
      continue;
    }
    else
    {
      numero=numero+2;
      arreglo.push(numero);
    }
  }
  console.log(arreglo);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
