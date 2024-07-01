//Arrays fos testing
const exampleArray=[1,-4,7,12,-20,5,0,20]
const negativeArray=[-1,-7,-8,-99,-25,-30]

//Testing positiveSum Kata exercise
const positiveSum=(arr) => {
  const initialValue=0
  const positiveList= arr.filter(number => number >=0)
  const totalSum = positiveList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  return totalSum
}

//Testing goals function from Kata exercise
const goals= (laLigaGoals, copaDelReyGoals, championsLeagueGoals)=> {
  return (laLigaGoals + copaDelReyGoals +championsLeagueGoals)
}

//Arithmetic operations
const sum = (a,b)=>{
 return ('El total de la suma es:',a + b)
}

const sub = (a,b)=>{
 return ('El total de la resta es:', a - b)
}

const mult = (a,b)=>{
 return ('El total de la multiplicación es:', a * b)
}

const div= (a,b)=>{
 try{
  if(b !== 0){
   return ('El total de la división es:', a / b)
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
 return ('El total del módulo es de:',a % b)
}

const sqrRoot= (a)=>{
   try{
  if(a >= 0){
   return (`El total de la raiz cuadrada de ${a} es: ${Math.sqrt(a)}`)
  }else{
   throw new Error('No existe magia capaz de encontrar una raiz negativa 🧙‍♀️')
  }
 }catch (error){
   console.log(`Oops, algo salió mal. ${error.message}`)
 } finally{
   console.log('Operación finalizada')
 }

}

const exponentiation= (a,b)=>{
 return (`El total de ${a} elevado a la ${b} es de: ${a ** b}`)
}

//console.log(sum(8,9))
//console.log(sub(-20,2))
//console.log(mult(8,5))
//console.log(div(4,10))
//console.log(div(5,0))
//console.log(mod(6,3))
//console.log(sqrRoot(7))
console.log(sqrRoot(-7))
//console.log(exponentiation(3,4))

//console.log(positiveSum(exampleArray))
//console.log(positiveSum(negativeArray))
//console.log(goals(43, 10, 5))
