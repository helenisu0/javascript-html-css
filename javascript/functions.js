
 /* function getName(name){
    
     console.log(name)
 }
 getName("helen") */


//  function checkHeight(name, height){
//    // return height <= "4ft" ? name +" is close to the ground": "opoor"
//    return height >= "4ft" && name +" is close to the ground opoor"

//  }

//  console.log(checkHeight("Helen", "5ft"))


// const multiplication = (number) => {
//     for(let i = 0; i<12; i++){
//         console.log(number + "*" + i + "=" + (number * i))
//         console.log(`${number} * ${i} = ${number * i}`)
//     }
// }


// const multiplication = (number) => {
//     for(let i = 0; i<12; i++){
//         console.log(number + "*" + i + "=" + (number * i))
//         console.log(`${number} * ${i} = ${number * i}`)
//     }
// }

// const addition = (number) => {
//     for(let i = 0; i<12; i++){
//         console.log(number + "+" + i + "=" + (number + i))
//     }
// }

// function doArithmetic(something){
//     let x =  2
//     something(x)
// }

// doArithmetic((element) => {
//     for (let y = 0; y < 12; y++){
//         y >= element ? console.log(`${element}/${y} = ${y/element}`):console.log(y)
//     }
// })


// const cookFood =  function(){
//     return (food) => {
//         return (food)
//     }
// }

// const returnFunction = (aFunction) =>{
//     return aFunction
// }

// const yetAnotherFunction =  returnFunction(() => console.log("Ekabo"))

// yetAnotherFunction()


 
// const toggleLight = (event, callback)  => {
//     switch (event) {
//         case "walkedIn":
//             callback("Switched On")
//         break;
        
//         case "walkabout":
//             callback("Switched off")

//             break;
//         default:
//             console.log("Lights  off")
//             break;

//     }
// }

// toggleLight("walkedIn", (data) => console.log(`lights are ${data}`))
// toggleLight("walkabout", (data) => console.log(`ligt are ${data}`))
// toggleLight()

//  const food = cookFood()("beans")
//  console.log(food)

//  const testBeans =  cookFood()
//  console.log(testBeans("Beans"))

// doArithmetic(multiplication)
// doArithmetic(addition)



// const drinkWater =  function() {
//     console.log("drink water")
// }

// const drinkWater2   =  () => {
//     console.log("drink water 2")
// }


//function movement(person) {
    //     console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`) //ternary operator
    
    //     // if(person.isWig){
    //     //     console.log("When " + person.name + " runs, her wig falls")          //expanded
    
    //     // }else {
    //     //     console.log("When " + person.name + " runs, breeze blows her hair")
    //     // }
    // }
    
    // function animation(defineCharacterMovement){
    //     let character = {
    //         name: "Adeola",
    //         isWig: true,
    //         gender: "female",  
    //     }
    //     defineCharacterMovement(character)
    // }
    
    // animation(movement)
    
    
    // animation(movement)
    // or animation((person) => console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`))
    
    // let persons = ["fola", "adeola", "ruth", "increase", "father", "lekan", "lotachi"]
    
    // persons.map(
    //     (persons) => console.log(persons)
    // )
    
    
    // function createCharacter(){
    //     let character = {       // declaring a variable and assigning objects to it
    //         name: "Adeola",
    //         isWig: true,
    //         gender: "female",  
    //         getName: function () {
    //             return this.name
    //         }, 
    //     }
    
    //     return character
    // }
    
    
    // let person = createCharacter()
    
    // let getPersonName = person.getName()
    
    // console.log(getPersonName)
    
    // let person = {
    //     userName: "Jerry",
    //     gender: "male",
    //     school: "unilag"
    // }
    
    // for(key in person) {
    //     console.log(person[key])
    // }
    
    
    // console.log(Object.keys(person))
//}


//(function getEvenNumbers(anArray getEvenNumbers) => {i % 2 !==  0? console.log(anArray[i]) : console.log("can't print")})


(function oneLine(anArray) { for (let i = 0; anArray.length; i++){anArray[i] % 2 == 0 && process.stdout.write(anArray[i] + " ")}})([1,2,3,4,5,6,7,8])




//for (let y = 0; y < 12; y++){
    //         y >= element ? console.log(`${element}/${y} = ${y/element}`):console.log(y)
    //     }


// function callMe(phoneNumber, countryDial){
//     if(phoneNumber !==""){
//         countryDial(phoneNumber)
//     }
//     else{
//         console.log("enter a valid number")
//     }
// }

// const dial = (phoneNumber)=>console.log(`calling ${phoneNumber}`)
// callMe("07027689173", dial)


//let anArray = [1,2,3,4,5,6,7,8]

  
// function getEvenNumbers(anArray) {
//     for( i in anArray) {
//         if (i % 2 !== 0){
//             console.log(anArray[i])
//         }

    
        
//     }


// }
// anArray.forEach(getEvenNumbers)

//getEvenNumbers(anArray)

//(anArray = [1, 2, 3, 4, 5, 6, 7, 8], anArray.forEach(number => {if (number %2 === 0) process.stdout.write(number + " ")}))
    

let pseudo = {
    anArray: [1, 2, 3, 4, 5, 6, 7],
    pseudoForEach: function(iterator){
        for(let i =0; i<this.anArray.length; i++){
            iterator(this.anArray[i])
        }
    }
};

pseudo.pseudoForEach((value) => value % 2 ===0  && process.stdout.write(value + ""))


function factorial(x){
    if (x == 0){
        return 1
    }

     else{
         return x * factorial(x - 1)
     }
}
 const num =  3


//  if(num > 0){
//      let result = factorial(num)
//      console.log(`the factorial of ${num} is ${result}`)
//  }

//  first iteration 
//  3 * factorial(3 - 1)
//  second iteration
//  3 * 2 * factorial(2 - 1)
//  third iteration
//  3 * 2 * 1 * factorial(1 - 1)


// let pseudoDocument =  {
//     events: {},
//     addeventListener: function(event, afunction) {
//         if(event === "DOMContentLoaded"){
//             aFunction(this.events)
//         }
//     },
// }

// pseudoDocument.addeventListener("DOMContentLoaded", function(event) {console.log(event)})