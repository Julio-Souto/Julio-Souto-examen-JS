
//Ejercicio 1
let formMotor = document.getElementById("motor-form")
let inputMotor = document.getElementById("motor")
let resultMotor = document.getElementById("motor-result")

/**
 * Devuelve el tipo de bomba
 * @param {number} motor Recibe un numero con los posibles valores de 1,2,3 y 4
 * @returns Un string con el tipo de bomba
 */
function dimeTipoMotor (motor) {
  switch(motor){
    case 0:
      return "No hay establecido un valor definido para el tipo de bomba"
    case 1:
      return "La bomba es una bomba de agua"
    case 2:
      return "La bomba es una bomba de gasolina"
    case 3:
      return "La bomba es una bomba de hormigon"
    case 4:
      return "La bomba es una bomba de pasta alimenticia"
    default:
      return "No existe un valor valido para el tipo de bomba"
  }
}

formMotor.addEventListener("submit", (e) => {
  e.preventDefault()
  if(!isNaN(Number(inputMotor.value)))
    resultMotor.innerHTML = dimeTipoMotor(Number(inputMotor.value))
})

//Ejercicio 2
let formImpar = document.getElementById("impar-form")
let inputImpar = document.getElementById("impar")
let resultImpar = document.getElementById("impar-result")

formImpar.addEventListener("submit", (e) => {
  e.preventDefault()
  if(!isNaN(Number(inputImpar.value))){
    if(Number(inputImpar.value)%2==0)
      resultImpar.innerHTML = "El numero introducido no es impar"
    else
      resultImpar.innerHTML = "El numero introducido es impar"
  }
})

//Ejercicio 3
let titulo = document.createElement("h2")
titulo.innerHTML = "Ejercicio 3"
let parrafo = document.createElement("p")
parrafo.classList.add("miParrafo")
parrafo.innerHTML = "Hola, me llamo Julio Manuel Souto Baña"
document.body.append(titulo)
document.body.append(parrafo)

//Ejercicio 4
let formArea = document.getElementById("area-form")
let inputBase = document.getElementById("base")
let inputAltura = document.getElementById("altura")
let resultArea = document.getElementById("result-area")

formArea.addEventListener("submit", (e) => {
  e.preventDefault()
  if(!isNaN(Number(inputBase.value))&&!isNaN(Number(inputAltura.value)))
    resultArea.innerHTML = "El area del triangulo es: "+(Number(inputBase.value) * Number(inputAltura.value))/2
})

//Ejercicio 5
let formArray = document.getElementById("array-form")
let inputArray = document.getElementById("array")
let resultArray = document.getElementById("array-result")
let submit = document.getElementById("array-submit")
let numbers = []

formArray.addEventListener("submit", (e) => {
  e.preventDefault()
  if(!isNaN(Number(inputArray.value)))
    numbers.push(Number(inputArray.value))
})

submit.addEventListener("click", () => {
  resultArray.innerHTML = "El numero mas grande es "+Math.max(...numbers)+" del array de numeros "+numbers.join("-")
})