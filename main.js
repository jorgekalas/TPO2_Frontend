console.log("//////////////");
console.log("Solución 1: Calcular área de un rectángulo");

function calcularAreaRectangulo(longitud, ancho) {
	return longitud * ancho;
}

// Ejemplos
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaRectangulo(7, 4)); // Resultado: 28

/*
Proceso de pensamiento:
Para este ejercicio, lo primero que hice fue identificar la fórmula matemática del área de un rectángulo,
que es simplemente base por altura. En este caso, la base está representada por la "longitud" y la altura por el "ancho".
Pensé la solución como una función pura que reciba dos parámetros y devuelva directamente el producto de ambos.
Elegí retornar el valor usando `return`, como se indica en la consigna, y no imprimir directamente dentro de la función.
Luego probé tres casos distintos para asegurarme que la lógica funciona correctamente con diferentes valores.
*/

console.log("//////////////");
console.log("Solución 2: Contar palabras en una cadena");

function contarPalabras(cadena) {
	return cadena.trim().split(/\s+/).length;
}

// Ejemplos
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras(" JavaScript     es     genial ")); // Resultado: 3
console.log(contarPalabras("Aguante Front")); // Resultado: 2

/*
Proceso de pensamiento:
Primero me pregunté qué define una "palabra" en JavaScript, y recordé que se pueden separar usando el espacio.
Sin embargo, como puede haber múltiples espacios entre palabras, decidí usar una expresión regular con `split(/\s+/)` que divide por uno o más espacios. También usé `.trim()` para eliminar espacios al inicio o final de la cadena, que podrían afectar el conteo. Esto asegura que la función sea más robusta y funcione bien incluso si el usuario ingresa mal la cadena. Probé con distintos tipos de frases para confirmar que cuenta correctamente.
*/

console.log("//////////////");
console.log("Solución 3: Contar vocales en una cadena");

function contarVocales(cadena) {
	const vocales = cadena.match(/[aeiouáéíóú]/gi);
	return vocales ? vocales.length : 0;
}

// Ejemplos
console.log(contarVocales("JavaScript")); // Resultado: 3
console.log(contarVocales("Hola Mundo")); // Resultado: 4
console.log(contarVocales("bcdfghjkl")); // Resultado: 0
console.log(contarVocales("Álamo")); // Resultado: 3
console.log(contarVocales("CANCIÓN")); // Resultado: 3

/*
Proceso de pensamiento:
Al analizar la consigna, pensé en recorrer la cadena y contar cada vocal. En vez de usar un bucle,
preferí usar el método `match()` con una expresión regular que detecte todas las vocales (mayúsculas y minúsculas),
incluyendo tildadas, gracias al modificador `gi`. Si no se encuentran vocales, `match()` devuelve null,
así que agregué un condicional con operador ternario para devolver 0 en ese caso.
Probé con palabras con y sin vocales para asegurarme de cubrir todos los casos.
*/

console.log("//////////////");
console.log("Solución 4: Verificar si una palabra es un palíndromo");

function esPalindromo(texto) {
	const limpio = texto
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zñ]/g, "");

	const invertido = limpio.split("").reverse().join("");
	return limpio === invertido;
}

// Ejemplos
console.log(esPalindromo("Neuquén")); // true
console.log(esPalindromo("Javascript")); // false
console.log(esPalindromo("Reconocer")); // true
console.log(esPalindromo("Frontend")); // false

/*
Proceso de pensamiento:
Entendí que un palíndromo es una palabra que se lee igual de izquierda a derecha y viceversa.
Detecté que "Neuquén" daba false porque la letra "é" no es igual a "e".
Para resolverlo, usé `normalize("NFD")`, que separa las letras de sus tildes (por ejemplo, "é" se convierte en "e" + acento),
y luego eliminé esos acentos con una expresión regular (`/[\u0300-\u036f]/g`).
Después removí caracteres no alfabéticos como espacios o signos de puntuación.
Así, la función detecta correctamente palíndromos como "Neuquén".
Probé con ejemplos conocidos para validar el resultado.
*/

console.log("//////////////");
console.log("Solución 5: Convertir edad de perro a años humanos");

function edadCanina() {
	const edadPerro = prompt("Ingrese la edad de su perro:");
	const edadHumana = Number(edadPerro) * 7;

	if (isNaN(edadHumana)) {
		console.log("Por favor, actualice la página e ingrese un número válido.");
	} else {
		console.log(`Tu perro tiene ${edadHumana} años humanos`);
	}
}

// Ejemplos de uso manual (se ejecutará cada vez, al utilizar prompt)
edadCanina();
//Colocando 3, arroja: "Tu perro tiene 21 años humanos"
//Colocando 5, arroja: "Tu perro tiene 35 años humanos"
//Colocando 7, arroja: "Tu perro tiene 49 años humanos"

/*
Proceso de pensamiento:
Este ejercicio requiere interacción con el usuario, así que utilicé `prompt()` para capturar la edad del perro.
Luego multipliqué el valor ingresado por 7, que es la equivalencia estimada en años humanos.
Usé `Number()` para asegurarme de trabajar con un número, y validé con `isNaN()` por si el usuario ingresaba texto.
La función no retorna nada, solo imprime el resultado directamente por consola, como lo pide la consigna.
*/

console.log("//////////////");
console.log("Solución 6: Capitalizar la primera letra de cada palabra");

function capitalizarPalabras(cadena) {
	return cadena
		.trim()
		.toLowerCase()
		.split(/\s+/) // Divide por uno o más espacios
		.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
		.join(" ");
}

// Ejemplos
console.log(capitalizarPalabras("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("eSTO es uN TEsTO")); // "Esto Es Un Testo"
console.log(capitalizarPalabras("   mucho   espacio   ")); // "Mucho Espacio"

/*
Proceso de pensamiento:
Sabía que debía dividir la cadena en palabras, así que usé `split(" ")`.
Noté que al usar `split(" ")`, se generaban espacios dobles si había múltiples espacios en la frase.
Por eso reemplacé esa parte con `split(/\s+/)` para dividir correctamente por uno o más espacios seguidos.
También usé `.trim()` al principio para evitar espacios al inicio o final que puedan generar palabras vacías.
Para cada palabra, apliqué `charAt(0).toUpperCase()` y le sumé el resto con `slice(1)`, y luego uní todo con `join(" ")`.
Además, usé `toLowerCase()` al principio para que todas las letras estén en minúscula antes de capitalizar solo la inicial.
Probé con frases normales, con mayúsculas desordenadas y hasta con espacios extra para asegurar la robustez del script.
*/

console.log("//////////////");
console.log("Solución 7: Generar sucesión de Fibonacci");

function fibonacci(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];

	const secuencia = [0, 1];
	for (let i = 2; i < n; i++) {
		secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
	}
	return secuencia;
}

// Ejemplos
console.log(fibonacci(1)); // Resultado: [0]
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // Resultado: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(10)); // Resultado: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*
Proceso de pensamiento:
La sucesión de Fibonacci comienza con 0 y 1, y luego cada número es la suma de los dos anteriores.
Decidí resolverlo de forma iterativa para evitar problemas de rendimiento con la recursión.
Primero manejé los casos base (n <= 0 y n === 1) y luego llené el array sumando los dos últimos elementos con un bucle `for`.
Este enfoque es simple, rápido y cumple con la consigna de retornar un array con los primeros `n` números.
Probé con distintas cantidades para verificar que funciona correctamente.
*/

console.log("//////////////");
console.log("Solución 8: Lista de productos con funciones de orden superior");

const productos = [
	{
		id: 1,
		nombre: "Laptop",
		precio: 1200,
		stock: 15,
		categoria: "electrónica",
	},
	{ id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
	{ id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
	{
		id: 4,
		nombre: "Monitor",
		precio: 300,
		stock: 20,
		categoria: "electrónica",
	},
	{ id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
];

// 1. forEach: Mostrar cada producto con nombre y precio
console.log("-- forEach: nombre y precio --");
productos.forEach((p) => {
	console.log(`${p.nombre}: $${p.precio}`);
});

// 2. map: Crear array con nombres de productos
console.log("-- map: nombres de productos --");
const nombres = productos.map((p) => p.nombre);
console.log(nombres);

// 3. filter: Electrónicos con stock > 20
console.log("-- filter: electrónicos con stock > 20 --");
const electronicosConStock = productos.filter(
	(p) => p.categoria === "electrónica" && p.stock > 20
);
console.log(electronicosConStock);

// 4. find: Producto con id 3
console.log("-- find: producto con id 3 --");
const productoId3 = productos.find((p) => p.id === 3);
console.log(productoId3);

// 5. reduce: Valor total del inventario
console.log("-- reduce: valor total del inventario --");
const valorTotal = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log(`Valor total del inventario: $${valorTotal}`);

/*
Proceso de pensamiento:
Este ejercicio fue ideal para practicar funciones de orden superior. 
Usé `forEach` para mostrar elementos directamente, ya que no genera nuevos arrays.
`map` me permitió transformar los objetos en solo sus nombres.
`filter` me ayudó a seleccionar ciertos productos según condiciones específicas.
`find` lo usé para buscar un producto puntual por su ID.
Por último, con `reduce` calculé el valor total del stock multiplicando precio por cantidad y sumando todo.
Cada técnica tiene su utilidad específica, y este ejercicio lo demostró claramente.
*/

console.log("//////////////");
console.log(
	"Solución 9: Estudiantes y calificaciones con funciones de orden superior"
);

const estudiantes = [
	{ id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
	{ id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
	{ id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
	{ id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
];

// 1. forEach: Mostrar nombre y edad
console.log("-- forEach: nombre y edad --");
estudiantes.forEach((est) => {
	console.log(`${est.nombre} tiene ${est.edad} años`);
});

// 2. map: Array de { nombre, promedio }
console.log("-- map: nombre y promedio --");
const promedios = estudiantes.map((est) => {
	const suma = est.calificaciones.reduce((acc, nota) => acc + nota, 0);
	const promedio = suma / est.calificaciones.length;
	return { nombre: est.nombre, promedio: promedio.toFixed(2) };
});
console.log(promedios);

// 3. filter: Estudiantes con promedio > 7.5
console.log("-- filter: promedio mayor a 7.5 --");
const destacados = promedios.filter((est) => est.promedio > 7.5);
console.log(destacados);

// 4. find: Estudiante llamado 'María'
console.log("-- find: estudiante 'María' --");
const maria = estudiantes.find(
	(est) =>
		est.nombre
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase() === "maria"
);
console.log(maria);

// 5. reduce: Edad promedio de los estudiantes
console.log("-- reduce: edad promedio --");
const edadPromedio =
	estudiantes.reduce((acc, est) => acc + est.edad, 0) / estudiantes.length;
console.log(`Edad promedio: ${edadPromedio.toFixed(2)} años`);

/*
Proceso de pensamiento:
Este ejercicio requería combinar varias funciones de orden superior sobre un array de objetos más complejo.
Primero, con `forEach`, mostré información puntual sin modificar datos.
Luego, `map` lo usé para calcular el promedio de notas por estudiante, usando también `reduce` dentro para sumar las calificaciones.
Ese array de promedios lo filtré para encontrar a los que superan 7.5.
Con `find` busqué a María de forma segura usando `toLowerCase()` por si cambia la capitalización, también utilicé normalize y replace con la expresión Regex, para asegurarme de que `find` también encuentre el resultado si se escribiese "maria" o "Maria", es decir sin tildes (a veces, por apurados, las omitimos).
Finalmente, usé `reduce` nuevamente para calcular el promedio de edad entre todos los estudiantes.
Este ejercicio fue excelente para practicar lógica de transformación y extracción de datos.
*/

console.log("//////////////");
console.log("Solución 10: Películas con funciones de orden superior");

const peliculas = [
	{
		id: 1,
		titulo: "El Padrino",
		año: 1972,
		duracion: 175,
		genero: "drama",
		rating: 9.2,
	},
	{
		id: 2,
		titulo: "Pulp Fiction",
		año: 1994,
		duracion: 154,
		genero: "crimen",
		rating: 8.9,
	},
	{
		id: 3,
		titulo: "El Señor de los Anillos",
		año: 2001,
		duracion: 178,
		genero: "fantasía",
		rating: 8.8,
	},
	{
		id: 4,
		titulo: "Interestelar",
		año: 2014,
		duracion: 169,
		genero: "ciencia ficción",
		rating: 8.6,
	},
	{
		id: 5,
		titulo: "Parásitos",
		año: 2019,
		duracion: 132,
		genero: "drama",
		rating: 8.6,
	},
];

// 1. forEach: Mostrar título y año
console.log("-- forEach: título y año --");
peliculas.forEach((p) => {
	console.log(`${p.titulo} (${p.año})`);
});

// 2. map: Títulos en mayúsculas
console.log("-- map: títulos en mayúsculas --");
const titulosMayus = peliculas.map((p) => p.titulo.toUpperCase());
console.log(titulosMayus);

// 3. filter: Dramas con rating > 8.5
console.log("-- filter: dramas con rating > 8.5 --");
const dramasTop = peliculas.filter(
	(p) => p.genero === "drama" && p.rating > 8.5
);
console.log(dramasTop);

// 4. find: Película estrenada en 2014
console.log("-- find: película estrenada en 2014 --");
const estreno2014 = peliculas.find((p) => p.año === 2014);
console.log(estreno2014);

// 5. reduce: Duración total
console.log("-- reduce: duración total de todas las películas --");
const duracionTotal = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log(`Duración total: ${duracionTotal} minutos`);

/*
Proceso de pensamiento:
Este último ejercicio me permitió aplicar las funciones de orden superior sobre un contexto diferente: películas.
`forEach` fue ideal para recorrer y mostrar año y título sin modificar datos.
Con `map`, transformé cada título a mayúsculas para mostrar cómo podemos alterar la forma de presentación.
Usé `filter` para extraer películas del género "drama" con alto rating (> 8.5), combinando dos condiciones.
Con `find`, busqué directamente por el año de estreno (2014), demostrando una búsqueda puntual.
Finalmente, `reduce` sirvió para sumar la duración de todas las películas, útil para obtener estadísticas generales.
*/
