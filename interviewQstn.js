
import { json } from 'body-parser'
import { Promise } from 'es6-promise'
import { data } from 'jquery'
import { method } from 'lodash'
import React, { useEffect, useReducer } from 'react'
import fs from 'fs';

import { useState } from 'react'
import { networkInterfaces } from 'os'


export default function interviewQstn() {







//JAVASCRIPT Questions



//1. what is data dtype and different data types in javascript
//2. what is reference types
//3. difference between var and let
//4. what are promises in javascript
//5. what is DOM in javascript? is the need of having the dom  // pending
//6. what is event bubling and event capturing  // pending
//7. what is closures? what it's returns ? when to use Closures  //
//8. what is event loop in javascript // pending
//9 . destructuring of arrays and objects destructuring the
//10. what is function chaining
//11 Give when to use arrow and regular function over each other
//12 what do you mean by scope of variable
//13. what is variable shadowing
//14 what is illegal shadowing
//15. can we declare var let and const multiple times in scope
//16. what do you mean by hoisting
//17.what is first class function
//18. what is iffe
//19. what is correct way to send rest operators
//20.what is currying in javascript? give an example
//21. write a code to create a function which gives sum of all parameters Sum(2)(3)(1)
//22.create a function to evaluate ("multiply")(4)(2)
//23. what is infinite curryin  //pedning
//24. How can we use currying for dom manupilation   //pending
//25. what is lexical scope?
//26.write a function that would allow to do :

    // var addSix = creatBase(6)
    //  addSix(10) // return 16.

  //27.Give an example of closure by using which you can optomize time of a dunction

  //28.how would you use a closure to create a private counter
  //29. write a code to create run only once funtion
  //30.what do you mean by objects in javascript
  //31. fix the given object
    //  let objThitOne={
    //     name:'ank',
    //     name-of-organization:"infoAxon"
    //  }



//32.Give an example to create object dynamically in javascript
//33. How can you apply loop on object
//34. create a function multiplyByTwo(obj) that  multiplies all numeric property values of num by 2
//35. how can you stringify an object and how can you parse into jason of an stringify object
//36. How to save object in localStorage give example
//37.what is destructuring of object? give an example to destructure of an nested object
//38.How can you done cloning of an object
//39. what is shallow copy and deep copy of an object
//40. what is promises in object
//41.Give an example of resolving callBack hell in javascript
//42. when to use async/await
//43. when we use try/catch block
//44.what an async function returns

//45.what is the role of this keyword in javascript
//46.what is the difference between arrow fun and normal func
//47. create an obj calculator so that  // ouput based
        // calculator.read()
        //calculator.sum()

 //48. Implement calc.add(10).multiply(5).substract(30).add(10)

 //49. what is call in javascript?  why it is use?
 //50. what is bind in javascript
 //51. what is apply in javascript
 //52. what is reduce funtion in javascript
 //53. what is debouncing and throttling  in javascript give an example  //pending



 //OUTPUT BASED QUESTION IN JAVASCRIPT

//  1.
// var a=5  // now it is global scope

// {
//   var b= 6  // not is in block scope
// }

// function varr(){
//    var c= 10
//    return c
// }

// console.log(a)
// console.log(b)
// console.log(varr())
//2.
//    let a= 10;

//    function mul(x){
//     return x*10;
//    }

//    let b = mul(2)
// console.log(b,'b')


//3. iifee
//  (
//   function iifee(sum){
//    console.log(sum)
//   }
//  )(25)


//4
//   for(var i=0;i<5;i++){

//     setTimeout((i)=>{
//       console.log(i)
//     },1000*i)
//   }



  //5.
//   var x=21

//   var fun = function(){
//     console.log(x,'145');
//     var x= 20;
//   }

//   fun()


  //6

    //   function f(a){

    //   return function(b){
    //     return `${a}${b}`
    //   }
    //  }

    //  //console.log(f(5))

    // console.log(f(5)(6))


    // const currying = (a)=>{

    //     return (b)=>{
    //            return (c)=>{
    //             return a+b+c
    //            }
    //     }
    // }
        //  console.log(currying(1)(2)(3),'currying')



    // const optimize = ()=>{
    //     let a
    //     for (let i=0;i<=10;i++){
    //          a +=i*i
    //     }

    //    // return a +100
    //     return   (a)=>{
    //         return a+100
    //     }
    // }

    // // console.time(optimize(0),'closure')
    // // console.timeEnd(optimize(0),'closure time')

    // var opt =  optimize()

    // console.log(opt,'opt')
    // console.log(opt(0),'0pt2')

  //7  optimization code using closures

//   function find(){

//     let a = []
//     for(let i =0;i<500;i++){
//       a[i]=i*1
//     }
//     return function (index){

//      // console.log(a[5],'a5')
//       console.log(a[index],'index')
//     }
//   }

//   const closure = find()
//   closure(5)


  //8 what is the ouput

//   for(var i =0;i<3;i++){

//     setTimeout(()=>{
//       console.log(i,'i')
//     },1000)
//   }

  // if something is wrong how to fix it

          //OBJECT
  //9

//   const user = {
//     name:'Ank',
//     profile:'solution deve',
//     comp:'info axon'
//   }

//   delete user.profile

// console.log(user,'user obj')


//10.
//  const func = (function(a){
//   delete a
//   console.log(a)
//  })(5)


//11.

// const user =  {
//   name:'Ank',
//   'today-task':'study-hard',
// }

// console the today-task property


//12.

// const obj = {
//   a:'one',
//   b:'two',
//   a:'three'
// }

// console.log(obj,'obj')


//13.

// const a ={};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b]= 123
// a[c]=456;

//  console.log(a[b],'a[b]')


//14.

//    const setings ={
//     username:'piyush',
//     level:19,
//     health:21
//    }

//   let str= JSON.stringify(setings,['level','health'])
//   console.log(str,'str')
  //console.log(setings)

   // stringify only level and health keys

   //15.

//    const shape = {
//     redius:10,

//     diameter(){
//       return this.radius*2;
//     },
//     parameter:()=> 2*Math.PI*this.radius,
//    }

//    console.log(shape.diameter())
//    console.log(shape.parameter())


  //16

//   const user ={
//       username:'piyush',
//       level:19,
//       health:21
//      }

//      const {username,level}=user

//      console.log(username)

     //const username = "Ank"  how can we assign value again in predefine constant variable username

    //  const {username:originalUsername}=user

    //  const  username='ANks'




  // 17.
// const user ={
//     name:'piyush',
//     first:{
//         fullname:'Piyush garg'
//     }
// }
// const {first:{fullname}}=user

// console.log(fullname,'fullname')



//   const {
//     fullname:{first}
//   }=user

//   console.log(first,'first')

  //18.

  // let c ={greeting:"hey"}

  // let d;

  // d=c

  // c.greeting="hello"

  // console.log(d.greeting,'d.greeting')



  //19.

  // let person ={name:'lyla'}
  // const members = [person]

  // person=null
  // console.log(person,'person')



  //20.

  // const value={number:10}

  // const multiply = (x={...value})=>{
  //     console.log((x.number*=2))
  // }

  // multiply()
  // multiply()

  // multiply(value)
  // multiply(value)


 //21.

//  function changeAgeAndReference(person){
//        person.age=25;

//        person ={
//         name:"john",
//         age:50
//        }
//        return person
//  }

//  const personObj1= {

//         name:'Alex',
//         age:30,
//  }


//  const personObj2 = changeAgeAndReference(personObj1)

//  console.log(personObj1)
//  console.log(personObj2)


    //PROMISES


//23  what will be the output

    // const promose1= new Promise((resolve,reject)=>{
    //        console.log(1);
    //        resolve(2)
    // })

    // promose1.then((res)=>{
    //   console.log(res)
    // })


    // console.log('end')


//24


//  console.log("start")

//  const fn = new Promise((resolve,reject)=>{
//         console.log(1)
//         resolve("success")
//  })

//  console.log('middle')

//  fn().then((res)=>{
//      console.log(res,'res')
//  })

//  console.log("end")

// Step-by-step Execution:
// console.log("start")
// 👉 Output: start

// Creating a new Promise:

// console.log(1) runs immediately during promise creation.
// 👉 Output: 1

// resolve("success") is called, but the .then() callback is asynchronous and goes to the microtask queue.

// console.log("middle")
// 👉 Output: middle

// .then(...) is set up but won't run yet.

// console.log("end")
// 👉 Output: end

// After the current call stack finishes, the microtask queue is processed:

// The .then() callback runs:
// 👉 Output: success res


//25.

// function job(){

//   return new Promise((resolve,reject)=>{

//     reject()
//   })
// }

// let promise = job()

// promise.then(()=>{
//   console.log('success')
// }).then(()=>{
//   console.log('success')
// }).catch(()=>{
//   console.log('error')
// }).then(()=>{
//   console.log('success 4')
// })




//26.

// function jobState(state){
//   return Promise((resolve,reject)=>{
//           if(state){
//             resolve('success')
//           }

//           reject('error')
//   })
// }

// let prmoise = jobState(true)

// prmoise.then((data)=>{
//    console.log(data)
//    return jobState(false)
// })
// .catch(()=>{
//   console('error')
//  return "error caught"
// })
// .then((data)=>{
// console.log(data)
// return jobState(true)
// })
// .catch((error)=>{
//  console.log(error)
// })


function jobState(state){
  return new Promise((resolve,reject)=>{
          if(state){
            resolve('success')
          }

          reject('error')
  })
}

// let prmoise = jobState(true)

// prmoise.then((data)=>{
//    console.log(data)
//    return jobState(false)
// })
// .catch(()=>{
//   console.log('error')
//  return jobState(false)
// })
// .then((data)=>{
// console.log(data)
// return jobState(true)
// })
// .catch((error)=>{
//  console.log(error)
//  return jobState(true)
// }).then((data)=>{

// console.log(data)
// return 'success 1'
// }).then((data)=>{
// console.log(data)
// })

// this KEY WORD

//27.

// let a= 5

//this.a=10

// a =15

// function getParam(){
//   console.log(this.a)
// }

// getParam()


// let a =15
// var b=16
// c=7

// function getParam(){
//  console.log(this.a)
//  console.log(this.b)
//  console.log(this.c)
// }

// getParam()


//28.

// let user = {
//   name:"Ank",
//   age:24,
//   getDetails(){
//     console.log(this.name)
//   }
// }

// user.getDetails()


// let user = {
//     name:"Ank",
//     age:24,
//     getDetails(){

//       const nestedArr=()=>{console.log(this.name)}
//          nestedArr()
//     }
//   }

//   user.getDetails()


// Arrow functions inherit this from their lexical (outer) scope — and in your case, 
// the outer scope is the method getDetails, which is called on the user object.

// So, in this case:

// this in getDetails() refers to the user object.


//29. what is the output

// let user = {
//   name:"Piyush",
//   age:24,
//   childObj:{
//     newName:"road",
//     getDetails(){
//       console.log(this.newName,"and",this.name)
//     }
//   }
// }

// user.childObj.getDetails()

//30.  what is the ouput if some error fix it

// let user = {
//   name:"Piyush",
//   age:24,
//   getDetails:()=>{
//     console.log(this)
//   }
// }

// user.getDetails()


// Even if you invoke the getDetails method with call to set this, it will not change the behavior:

// let user = {
//   name:"Piyush",
//   age:24,
//   getDetails: function(){
//     (()=>{
//         console.log(this.age)
//       })()

//   } 
// }

// user.getDetails()



// javascript
// Copy code
// user.getDetails.call(user); // Output: undefined or empty string
// Why?
// Because 'this' in the arrow function is lexically bound to its outer scope (the global scope, in this case), and call cannot override it.

//31.

// const user = {
//   firstName:"Piyush",
//   getName(){
//     const firstName = "Piyush Aggarwal"
//     return this.firstName
//   }
// }

// console.log(user.getName())

//32.

// function makeUser(){
//   return {
//     name:"john",
//     ref:this,
//   }
// }

// let user = makeUser()

// console.log(user.ref.name)

// Since makeUser() is called as a plain function (makeUser()), not as a method of an object, 
// this inside it refers to the global object (in non-strict mode) or undefined (in strict mode).

// If you want ref to refer to the object itself (user), you need to define it as a method:

// javascript
// Copy
// Edit
// function makeUser() {
//   return {
//     name: "john",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();
// console.log(user.ref().name); 


//33.

// const user = {
//   name:"Piyush",
//   logMessage(){
//     console.log(this.name)
//   }
// }

// setTimeout(user.logMessage,1000)

// When you pass user.logMessage to setTimeout, you're passing just the function, not the object it belongs to.

// So, the function is executed by setTimeout without any object context, and in that case, this becomes:

// undefined (in strict mode)




// When you pass user.logMessage to setTimeout, you are passing a reference to the logMessage function, detaching it from the user object.
// As a result, when logMessage is executed by setTimeout, this no longer refers to the user object. Instead:


//34

// const user = {
//   name:"piyush",
//   greet(){
//     return `hellow,${this.name}`
//   },
//   farewell:()=>{
//     return `good byr, ${this.name}`
//   }
// }

// console.log(user.greet())
// console.log(user.farewell())


//35.

// var length =4

// function callback(){
//   console.log(this.length)
// }

// const object = {
//   length:5,
//   method(fn){
//     fn()
//   },
// }

// object.method(callback);


// 1. callback() is passed to object.method(fn)
// Inside method, you're doing: fn();

// So fn() is called as a regular function, not as a method of object

// In non-strict mode, this inside fn() refers to the global object (window in browsers or global in Node)

// 2. You decla




// const object = {
//   length:5,
//   method(fn){
//     arguments[0]()
//   },
// }

// object.method(callback,2,3) //*** */



// CALL BIND APPLY

//36

// var obj = {name:"piyush"}

// function sayHello(age){
//   return "Hello" + this.name+"is " + age
// }

// how can you print value of name variable inside sayHello function


//37. what would be the output of above function using sayHello.apply(obj,[24,"Ank"])

//38

// const person = {
//   fullName: function(city, country) {
//     return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
//   }
// };

//  const person1 = { firstName: "John", lastName: "Doe" };

//  person.fullName.apply(person1,[modinagar,Bharat])
// console.log(person.fullName.apply(person1,['modinagar','Bharat']))

// execute the above funtion using apply method

//39 Question 1: "Hello, Alice!"
   //apply sets this to user and passes ["Hello", "!"] as arguments.

//40
//const numbers = [12, 45, 7, 22];
//console.log(`Max: ${max}, Min: ${min}`);

//41  push array 2 into array using apply

//const array1 = [10, 20];
//const array2 = [30, 40, 50];

//42

// const person1 = {
//   firstName: "John",
//   lastName: "Smith",
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// const person2 = { firstName: "Jane", lastName: "Doe" };

// const fullName = person1.getFullName.apply(person2);
// console.log(fullName);


//43

// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// function Car(make, model, year) {
//   Vehicle.apply(this, [make, model]);
//   this.year = year;
// }

// const myCar = new Car("Toyota", "Corolla", 2022);

// console.log(myCar);


//44  What will be the output of the following code? Why?

// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// const greetFunction = person.greet;
// const boundGreet = greetFunction.bind(person);

// boundGreet();

//45

// function add(a, b) {
//   return a + b;
// }

// const addFive = add.bind(null, 5);
// console.log(addFive(10));


//46.

// var status = "a";

// setTimeout(()=>{
//   const status = "s";

//   const data = {
//     status:"N",
//     getStatus(){
//       return this.status;
//     }
//   }

//   console.log(data.getStatus())
// console.log(data.getStatus.call(this))
// },0)


//47

// function f(){
//   console.log()
// }

// let user = {
//   g:f.bind(null)
// }

// user.g()


//48

//  function checkPassword(ok,fail){

//   let password = prompt("password","")
//   if(password=="roadside") ok()
//     else fail();
//  }

//  let user = {
//   name:"Piyush Aggarwal",
//   login(result){
//     console.log(this.name+(result?"login":"failed"))
//   }
//  }



// checkPassword(user.login(true),user.login(false));

//fix the above function



//49.

//  const age=10;

//  var person = {
//   name:'piyush',
//   age:20,
//   getAgeArrow:()=> console.log(this),
//   getAge:function (){
//     console.log(this.age);
//   }
//  }

//  var person2 = {age:24}

//  person.getAgeArrow.call(person2)
//  person.getAge.call(person2)


 // MAP FILTER REDUCE

// 50.Write a function that sums all the numbers in an array using reduce.
   // const numbers = [1, 2, 3, 4, 5];

//51.Finding the Maximum Value in an Array:
     //const numbers = [10, 5, 8, 13, 25, 2];

//52.Write a function that flattens a nested array of arrays into a single array using
     //const arrays = [[1, 2], [3, 4], [5, 6]];

//53 Use reduce to count the occurrences of each element in an array
    //const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];


 //54.How can you group an array of objects by a specific property using reduce?

//  const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'David', age: 25 }
// ];


//54.Use reduce to remove duplicates from an array.
     //const numbers = [1, 2, 2, 3, 4, 4, 5];

//55.How would you use reduce to transform an array of objects into a single object, where the key is a specific property and the value is another property?

// const items = [
//   { id: 1, name: 'apple', price: 2 },
//   { id: 2, name: 'banana', price: 1 },
//   { id: 3, name: 'orange', price: 3 }
// ];

//56. How can you calculate the average of an array of numbers using reduce?
//const numbers = [1, 2, 3, 4, 5];




 //57.
 //console.log(a,'a')    //temporal zone concept
  //let a='assa'

  //58.
 // console.log(b,'b')
   // var b='asdsd'

//  59. console.log(c)
//  const c = 'asjkl'

// 60.
// console.log(name,'name')
//   var name = 'string'

  //61.
   // var x=20;

  // function foo(){
  //   console.log(x,'x')
  //   var x=10
  // }

  // function foo(){
  // x=10
  // console.log(x,'x()')
  // }
  // console.log(x,'x')

  //foo()   //memory creation phase


  //62
  // foo()
  // var foo = 23

  // function foo(){
  // console.log('bar')
  // }

  // foo()

  //memory creation phase
  // code execution phase


  //63.
//   function outer(){
//          function inner(){
//          console.log(x,'x')

//          }

//          const x= 5
//          return inner
// }

// const inner = outer()
// inner
// console.log(inner,'inner')

//64.
// function one(){
//   var c = 1
//   let a = 2
//   b= 3
// }

// console.log(c)
// console.log(a)


//65
// var x=20

//   function one(){

//   console.log(x,'x')
//   }

//  one()

  //66.
//  (function(){
//      for(var i=0;i<=3;i++){
//       setTimeout(()=>{
//         console.log(i)
//       },1000)
//     }
//     }())

    // fix the problem in above problem

  //67
  // setTimeout(()=>{
  //    console.log('i')
  // },1000)

  // let promis = new Promise({

  // })

// let promis = new Promise((resolve,reject)=>{

//   resolve( 'i am promise')


// })

 //promis.then((data)=>{console.log(data,'data')}).catch((err)=>{console.log(err,'err')})

 //Promise.then(console.log('promise')).catch()

  //console.log('end')


  //68.
  // async function foo(){
  //        return 23
  //  }

  //  let result = foo()

  //  console.log(result,'result')

  //69.
  // function foo(){
  //       console.log('hiii')
  //    }
  //  var a = new foo()

  //  console.log(a,'a')


  //70.

  // let a [11,3,22,44,5]

  // let b=[55,5,77,45,65]

  // let a [11,3,22,44,5]

  // let b=[12,5,17,45,65]  let c [ ]  write a code so that in array c both a and b elements and array c will be sorted


//  71.
//  let obj = {
//     x:1,
//     getX(){
//       const inner =function(){
//         console.log(x,'x1')
//       }
//       inner()
//     }


//   }

// obj.getX()

//  what will be the value of  obj.getX()


//72. write a code to create a function which gives sum of all parameters Sum(2)(3)(1)
//73.create a function to evaluate ("multiply")(4)(2)

//74. create an obj calculator so that  // ouput based
        // calculator.read()
        //calculator.sum()

 //75. Implement calc.add(10).multiply(5).substract(30).add(10)

 //76.write a function that would allow to do :

    //var addSix = creatBase(6)
    //addSix(10) // return 16.





//REACT JS
//1. why do we need react
//2. what is virtual dom
//3 . Why virtual dom is fast
//4.Explain the use of render method in React?
//5.What is state in React?
//6.Explain the difference between functional and class component in React?
//7.what are hooks? Mention different types of hooks
//8.difference between useState ,states and props
//9.What is prop drilling and its disadvantages? Give example of custom hooks to call api
//10.How can we pass data from child component to Parent component
//11.can we assign the values in hooks variables without using useState()
//12.when functional component loads what is the sequence of executing
//13.How do browsers read JSX?
//14.What is a key in React?
//15.What is conditional rendering in React?
//16. What is react router?


//17.What is the use of ref in React?
//18.Explain the useEffect hook in react?explain the role of dependency array
//19.What is the difference between useref and createRef in React ?
//20.What is react-redux?
//21.What is context API?
//22.What is axios and how to use it in React?
//23.Write a program to create a counter with increment and decrement?
//24.Explain why and how to update state of components using callback hook?
//25.Difference between redux and context api
//26.can you build your custom useMemo hook
//27,why useReducer is better over useState

//28.// How does the Context API work? What are its pros and cons compared to other state management libraries like Redux?

//29.What are Error Boundaries in React? Can they be used in functional components?
//30.What are some ways to conditionally render components in React? Which one would you use for performance optimization?
//31.How does React support code splitting? Can you explain how React.lazy and Suspense work together?
//32.What is React's reconciliation process? How does it decide which parts of the DOM need to be updated?
//33.What is the purpose of React.memo? How is it different from useMemo and useCallback?
//34.How can you prevent unnecessary re-renders in React? Provide examples using memoization techniques.
//35.How can you implement lazy loading for components and images in React?
//36.How does React Router work? Can you explain the difference between useHistory, useNavigate, and useParams?
//37. How can you create dynamic routes in React Router?

//38.what is SSR in react
//39. what is CSR in react
//40.Why are keys important in React? What happens if you don’t use them?
//41.What are HOCs in React? Can you give an example of when and why to use them?
//42. Give an example when to use clean up function
//43.

// React filtered Questions

//1.What is React and why use it? //
//2 Functional vs Class components
//3 Props vs State  //
//4 Lifecycle methods in class components
//5 Conditional rendering  //
//6 useState, useEffect  //
//7 useContext, useReducer
//8 useRef//
//9 Context API for state management
//10 Memoization with React.memo   //
//11 Virtual DOM and reconciliation  //
//12 useMemo()  //
//13 Higher-order components (HOC)  //
//14 Redux:
//14 Redux Thunk or Redux Saga
//15 Context API vs Redux
//16 React Router:Setting up routes,,Setting up routes,dynamic routes,  Handling 404 pages and redirects
//17 Forms and Validation : Controlled vs Uncontrolled components, Libraries like formik and react-hook-form
//18 Fetch  ,Axios
//19 Lazy loading and code splitting: React.lazy and Suspense,
//20 CSR,ISR and SSR
//21. Error Boundary

//Long question in react

//1.What is React and why use it?
//2.Lifecycle methods in class components

//PENDING REACT TOPICS

//React Router:






// REACT TOPICS

// 1. React Basics
// What is React and why use it?
// JSX: Syntax and usage
// Components:
// Functional vs Class components
// Props vs State
// State and props management
// Rendering:
// Conditional rendering
// Lists and keys
// Event handling in React
// Lifecycle methods in class components

// 2. Advanced React
// React Hooks:
// useState, useEffect
// useContext, useReducer
// useMemo, useCallback
// useRef
// Context API for state management

// React performance optimization:
// Memoization with React.memo
// Preventing unnecessary re-renders
// Virtual DOM and reconciliation
// Higher-order components (HOC)
// Render props pattern
// Error Boundaries

// 3. State Management
// Redux:
// Actions, Reducers, and Store
// Middleware like Redux Thunk or Redux Saga
// Connecting Redux with React using react-redux
// MobX
// Zustand or other modern state management libraries
// Comparison: Context API vs Redux

// 4. Routing
// React Router:
// Setting up routes
// Dynamic and nested routes
// Programmatic navigation
// Handling 404 pages and redirects

// 5. Forms and Validation
// Controlled vs Uncontrolled components
// Handling form inputs in React
// Libraries like formik and react-hook-form
// Form validation using Yup or custom logic

// 6. API Integration
// Fetching data using:
// Fetch API
// Axios
// useEffect for side effects
// Handling loading and error states
// Pagination and infinite scrolling
// GraphQL with Apollo Client

// 7. Testing in React
// Unit testing:
// Jest
// React Testing Library
// End-to-end testing:
// Cypress
// Playwright
// Snapshot testing


// 8. Styling in React
// CSS Modules
// Styled-components
// Emotion or other CSS-in-JS libraries
// Tailwind CSS or utility-first CSS
// Comparison of styling methods


// 9. Performance Optimization
// Lazy loading and code splitting:
// React.lazy and Suspense
// Optimizing renders:
// React.memo
// useMemo and useCallback
// Understanding React’s rendering behavior
// Analyzing performance using tools like React DevTools


// 10. React Ecosystem
// Next.js for server-side rendering (SSR) and static site generation (SSG)
// Gatsby for static site generation
// React Native for mobile app development

// 11. Build Tools and Deployment
// Webpack and Babel
// Vite for faster builds
// NPM/Yarn for package management
// Hosting platforms like Vercel, Netlify, or AWS

// 12. Debugging
// React DevTools
// Debugging hooks and state
// Handling errors and logging

// 13. Soft Skills and Problem Solving
// Collaboration with backend teams
// Debugging and resolving performance bottlenecks
// Trade-offs between different state management solutions
// Real-world scalability of a React app
// Bonus: Scenario-Based Questions
// Optimizing a slow React application
// Debugging a component with unnecessary re-renders
// Implementing a custom hook for reusability
// Migrating a class-based component to a functional one with hooks



//MACHINE CODING

//1. Build a Todo Application with Filters and Local Storage
//2. Create a Dynamic Form with Validation and Error Handling
//3. Create a Light/Dark Mode Toggle with Persistent Theme
//4. Build a Simple Pagination Component for a List of Items
//5. Create a Shopping Cart with Add, Remove, and Update Quantity Features
//6. Create a Simple Chat Application (With Mock Data)
//7. Build a Carousel/Slider Component
//8. Create a Dynamic Accordion Component



// selected node js questions

//1.Explain event loop in node.js
//2.What are the differencephases in event loop
//3.Explain the execution flow of promise, async await, settimeout, setImmediate, process.nextTixk()
//4.List out some of the global objects in node js
//5. Explain stream and buffer and their differences
//6. What is micro task and macro task in node js
//7.Explain the concept of middleware in node js
//8. what is the use of next parameter in middleware
//9. Explain error handling concept in express js
//10. what is jwt explain the structure of JWT
//11. how can you modify the structure of JWT
//12. What is the authentication and authorization concept in node js
//13. what is rate limiting in express js
//14. Explain the concept of logging and monitoring in node js application
//15. How do you scale node js application using cluster module
//16. What is worker thread ? How does it handle cpu-intensive tasks.
//17.How can you optimize data base queries in node js
//18.What is redis data base ?Explain the use of it
//19. How can we increase the performance of Node js appliation
//20.What is connection pooling concept in node js
//21. Demonstrate the integration of OAuth2.0 for third party authentication in a node .js app
//22. What is the refresh token concept in node js
//23. What is role of indexes in performance optimization
//24.What is the aggregation pipeline in mongo db? Explain in detail
//25.What is transactions in mongo db
//26.What is difference btwn hashing, encryption and encoding concept
//27.How do you identifies slow queries
//28. What is load balancer and how to implement in node js






return (
    <>

<span> Interview question </span>
    </>
  )
}


// "I am a MERN stack developer with experience working at InfoAxon, where I have been involved in building projects
//  primarily in the insurance technology domain. I have worked extensively with React.js to build responsive and
//  scalable user interfaces. In my projects, I have used React to develop dynamic, single-page applications (SPAs)
//  that improve user experience by delivering fast and interactive UIs.

// I have utilized React's state management features like useState and useReducer, and have implemented React Router for client-side routing. I've also integrated Redux for global state management in larger applications and applied React Hooks like useEffect for handling side effects. In terms of performance optimization, I’ve used techniques like React.memo and lazy loading to ensure efficient rendering and faster load times.




// My role was to work with in a team with front , backend developers and other team members  
// My primary focus was to developed
// high-performance , scalable and reusable components for
// front-end interfaces using React js and Next js.

// For backend development i have worked on Node.js and Express.js.My work was to implement RESTful APIs,
// managing databases,writing schemas  and  writing clean, maintainable code and designing systems that
//are both reliable and scalable."



// SERVER SIDE RENDERING  SSR

//when our code generates the html on server side then it is called server side rendering
// HTML is generated on each request
// complete html javascript attached file recieves from the server then renders on the browser
// completely code conversion into htlm takes place on  the server take less load on our system to 
// render the the component
// better for seo purpose


//CLINT SIDE RENDERING  CSR
// html is generated at build time and can be reused for each request
// bundle.js and html file recieves from the server and atached then it renders on the server

//STATIC SITE GENERATION SSG



// INTERVIEW IBM
//1 Difference between local storage and session storage
//2 Why React is so populer
// 3. what is the folder structure you follows
//4. what is React fragments
//5. what is props and states
//6. Differentite between useMemo and useCallback
//7. what is Redux and How it works


//8. Differentiate b/w Map() and forEach()
//9. what is this keyword gice an example
//10. create age input box display error if age is less tha 18


// 3 year experienced Interview React

//1 how do you achive security in your application
//2. How do you handle big repository in your appliation
//3. when arrow function is make sense to use over regulare function and vice versa
//4. what is call back hell is there any way to resolve this
//5. why do we need react and what its different features
//6. what happens if we change the state directly
//7. create the input box and update the value only when user stop writing in the input box
//8. what is controlled and uncontrolled components

//https://www.youtube.com/watch?v=ICmqZkL8YZk

//https://www.youtube.com/watch?v=xV1BK3ZYxuA


//coding round javascript

//1.Reverse a string without using built-in methods.
//2.Write a function to find two numbers in an array that sum to a target value.
             // const nums = [2, 7, 11, 15];
            // const target = 9;
            // console.log(twoSum(nums, target)); // [0, 1]
 //3.Write a function to sort an object by its keys.
// javascript
// Copy code
// const obj = { b: 2, a: 1, c: 3 };
// console.log(sortObjectByKey(obj)); // { a: 1, b: 2, c: 3 }


//4.Palindrome Checker:

//Write a function to check if a string is a palindrome.
// const str = "racecar";
// console.log(isPalindrome(str)); // true


//5.Write a function to check if two strings are anagrams.
// javascript
// Copy code
// const str1 = "listen";
// const str2 = "silent";
// console.log(areAnagrams(str1, str2)); // true




//6. Implement a binary search for a sorted array.
// Longest Substring Without Repeating Characters:

//7. Write a function to find the length of the longest substring without repeating characters.

//8. Removes dublicates from an array



//9.Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; and
//for multiples of both, print "FizzBuzz".


//10 print Fibonacci series

//11 flatening objects


//JAVASCRIPT LONG QUESTIONS

//1. FUNCTION CHIANING //
//2. CURRYING  //
//3. CLOSURES  //
//4.PROMISES ASYNC AWAIT
//5. what is DOM in javascript? is the need of having the dom  // pending
//6. what is event bubling and event capturing  // pending
//7. Give when to use arrow and regular function over each other //
//8.what is event loop in javascript //
//9.write a code to create a function which gives sum of all parameters Sum(2)(3)(1) //
//10.create a function to evaluate multiply(4)(2) //
//11. what is infinite curryin  //
//12. How can we use currying for dom manupilation   //pending
//13.write a function that would allow to do : //

    // var addSix = creatBase(6)
    //  addSix(10) // return 16.

  //14.Give an example of closure by using which you can optomize time of a dunction //

  //15.how would you use a closure to create a private counter //
  //16. write a code to create run only once funtion
  //17.what do you mean by objects in javascript
  //18. fix the given object
    //  let objThitOne={
    //     name:'ank',
    //     name-of-organization:"infoAxon"
    //  }

    //19.Give an example to create object dynamically in javascript
//20.. How can you apply loop on object //
//21. create a function multiplyByTwo(obj) that  multiplies all numeric property values of num by 2 //
//22. how can you stringify an object and how can you parse into jason of an stringify object //
//23. How to save object in localStorage give example
//24.what is destructuring of object? give an example to destructure of an nested object
// what is shallow copy and deep copy of an object


//25.what is the role of this keyword in javascript //
//26.what is the difference between arrow fun and normal func //
//27. create an obj calculator so that  // ouput based
        // calculator.read()
        //calculator.sum()

 //28. Implement calc.add(10).multiply(5).substract(30).add(10) //

 //29. what is call in javascript?  why it is use?
 //30. what is bind in javascript
 //31. what is apply in javascript
 //32. what is reduce funtion in javascript
 //33. what is debouncing and throttling  in javascript give an example  //pending
 //34. Prototypes and inheritance