//Arrays fos testing
const exampleArray=[1,-4,7,12,-20,5,0,20]
const negativeArray=[-1,-7,-8,-99,-25,-30]

//Testing positiveSum Kata exercise
const positiveSum=(arr) => {
  let initialValue=0
  let positiveList= arr.filter(number => number >=0)
  const totalSum = positiveList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  return console.log(totalSum)
}

//Testing goals function from Kata exercise
const goals= (laLigaGoals, copaDelReyGoals, championsLeagueGoals)=> {
  return console.log(laLigaGoals + copaDelReyGoals +championsLeagueGoals)
}

//Arithmetic operations
const sum = (a,b)=>{
 return console.log('El total de la suma es:',a + b)
}

const sub = (a,b)=>{
 return console.log('El total de la resta es:', a - b)
}

const mult = (a,b)=>{
 return console.log('El total de la multiplicación es:', a * b)
}

const div= (a,b)=>{
 try{
  if(b !== 0){
   return console.log('El total de la división es:', a / b)
  }else{
   throw new Error('Ni Thanos puede dividir por cero 👿🦹‍♂️')
  }
 }catch (error){
   console.log(`Oops, algo salió mal. ${error.message}`)
 } finally{
   console.log('Operación finalizada')
 }
}

const mod=(a,b)=>{
 return console.log('El total del módulo es de:',a % b)
}

const sqrRoot= (a)=>{
 return console.log(`El total de la raiz cuadrada de ${a} es: ${Math.sqrt(a)}`)
}

const exponentiation= (a,b)=>{
 return console.log(`El total de ${a} elevado a la ${b} es de: ${a ** b}`)
}

sum(8,9)
sub(-20,2)
mult(8,5)
div(4,10)
div(5,0)
mod(6,3)
sqrRoot(7)
exponentiation(3,4)

positiveSum(exampleArray)
positiveSum(negativeArray)
goals(43, 10, 5)
