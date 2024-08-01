//First activity
const firstName= 'Diana'
let age= 35

console.log(firstName, age)

//Second activity
console.log(`Hola, me llamo ${firstName} y tengo ${age} años.`)


//Third activity
const sum=(a,b)=> a+b

//Testing
//console.log(sum(3,9))


//Fourth activity
const arrayOfNumbers= [2,4,5,7,8,11,20,47,66,81,36]
const doubleNumbers= arrayOfNumbers.map(number => number*2)

//Testing
//console.log(doubleNumbers)

//Fifth activity
const filterNumbers= arrayOfNumbers.filter(number => number%2 !==1)

//Testing
//console.log(filterNumbers)

//sixth activity
const sumWithReduce = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

//Testing
//console.log(sumWithReduce);

//seventh activity
const secondArray=['a','b','c','d','f','g','h','i']

const thirdArray=[...arrayOfNumbers, ...secondArray]

//Testing
//console.log(thirdArray)

//eighth activity
const movieInfo={
 title:"Deadpool",
 genre:"Action",
 year:2016
}

const {title, genre, year} =movieInfo

//Testing
/*
console.log(title)
console.log(genre)
console.log(year)
*/

//ninth activity
const stringifyObj= (obj)=>{
 const {title, genre, year}= obj
 return `La película ${title} hace parte del género de ${genre}, y fue lanzado en el año ${year}`
}

//Testing
//console.log(stringifyObj(movieInfo))


//tenth activity
const positiveNum= (a)=>{
   try{
  if(a >= 0){
   return (`El número es ${a}`)
  }else{
   throw new Error('No aceptamos números negativos 🥶')
  }
 }catch (error){
   console.log(`Oops, algo salió mal. ${error.message}`)
 } finally{
   console.log('Operación finalizada')
 }
}

//Testing
const number=-6
console.log(positiveNum(number))


//eleventh activity
const userInfo= document.getElementById('userInfo')
const userName= document.getElementById('userName')
const userAge= document.getElementById('userAge')

const userForm=(event)=> {
 event.preventDefault()
 return alert(`Welcome ${userName.value} your age is ${userAge.value} 😺!`)
}

const getinfo=userInfo.addEventListener("submit", userForm)

export{getinfo, userForm, userAge, userName, userInfo, firstName, age, firstActivity, secondActivity }
