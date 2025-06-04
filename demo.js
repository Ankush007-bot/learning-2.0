import { Promise } from 'es6-promise'
import { data } from 'jquery'
import { method } from 'lodash'
import React, { useEffect, useReducer } from 'react'

import { useState } from 'react'


export default function demo() {


    const [name,setName]= useState({firstirst:'',secondName:''})

    const [items,setItems]=useState([])

    const [count,setCount]=useState(0)


    const[obj,setObj]= useState({
      "recommendationId": 'props.data.recommendationId',
      "lob": 'props.data.selectedLob',
      "lobProduct": 'props.data.lobProduct',
      "mobileNumber":'props.data.customerMobile',
      "emailId": 'props.data.emailId' ? 'props.data.emailId' : "",
      "name": 'props.data.customerName',
      "whatsappUpdatedInsteadSMS": false

  })

  const handleobj = (prev)=>{

    setObj({
           ...obj,
      "whatsappUpdatedInsteadSMS": true

  })

  console.log(obj,'obj 1')

  }
//console.log(obj,'obj 2')

    let preparedData=[
      {
          "a": "bank name",
          "qid": "F54B01B0-E7AD-463F-A717-B08FA2A0A135",
          "key": "BANKNAME",
          "label": "Bank Name",
          "aid": "",
          "stage": "proposal-bank"
      },
      {
          "a": "bank branch",
          "qid": "9F783ADA-3DB6-4084-A983-A1E47E7F69FC",
          "key": "BANKBRANCH",
          "label": "Bank Branch",
          "aid": "",
          "stage": "proposal-bank"
      },
      {
          "a": "bank city",
          "qid": "4827AF62-019A-4214-802B-58371E0A7356",
          "key": "BANKCITY",
          "label": "Bank City",
          "aid": "",
          "stage": "proposal-bank"
      }
  ]

    const updateItems=()=>{
  setItems(
    [{
        'sno':'1',
        'name':'react',
    }]
  )
    }

    const updateItems2=()=>{
        setItems(

          [ ...items,{
              'sno':'2',
              'name':'node',
          }]
        )
          }
const updateNameAnkush = ()=>{
    setName({firstirst:'Ankush'})
}


//when we update objects/Array through hooks it doesn't take so weuppdatethe data like we have done in updateItems2
const updateNameStar = ()=>{
    setName({firstirst:'Star',secondName:'kumar'})
}

const updateNameMohit = ()=>{
    setName({firstirst:'Mohit'})
}


//console.log(name,'name')
//console.log(items,'items')





const increment=()=>{
    setCount(count+1)
}

const incrmntWthtDendcyArry =(prevCount)=>{setCount(prevCount+count)}  // will run without dependency array bcoz not prev count vvariable is telling react about the changing in value
//-->

const[counter, setCounter]=useState(0)
   const startTimer=()=>{
        setInterval(()=>{
        let   newCount= count+1
          setCounter(newCount)
        },500)
   }

    startTimer()
   console.log(count,'count')


   let user = {
    name:"Piyush Aggarwal",
    login(result){
      console.log(this.name+(result?"login":"failed"))
    }
   }



  //checkPassword(user.login(true),user.login(false));

//    count is Stale Inside setInterval:

// In React, state variables like count are captured by closure when the function (in this case, the callback inside setInterval) is created.
// As a result, count will always refer to the value it had when startTimer was first executed. It doesn't get updated with the latest state value.
// React State Updates Are Asynchronous:

// React doesn't immediately update count when you call setCounter(newCount). Instead, it schedules the update, and the new value is available on the next render.
// Uncontrolled Infinite Execution:

// You call startTimer() immediately, which causes the setInterval to start without proper control. This can lead to unintended behavior or performance issues.



// import React, { useState, useEffect } from 'react';

// const TimerComponent = () => {
//   const [counter, setCounter] = useState(0);

//   const startTimer = () => {
//     setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1); // Use the functional form
//     }, 500);
//   };

//   useEffect(() => {
//     startTimer(); // Start the timer when the component mounts
//   }, []); // Empty dependency array ensures this runs only once

//   console.log(counter, 'counter'); // Logs the updated counter value on each render

//   return <div>Counter: {counter}</div>;
// };

// export default TimerComponent;


//console.log(count)

// useEffect(()=>{ console.log(count,'count')},[])      will only rum once after component render

//useEffect(()=>{ console.log(count,'count')},[count])       will run every time the value of count will change



//----** thre types of hooks ----**

// 1. useState
// 2.useEffect
// 3. useContext(second)
// 4. useReducer(first, second, third)

//useReducer
 //it is an alternative to use state hook


 // react fibre algorithm updates the virtual dom of react

 //   <component name = 'ankush'/>  correct
 //   <component name = 'ankush' obj ={key:value}/>  WRONG

//  let obj = {
//   key:value
//  }

// <component name = 'ankush' obj ={obj}/> correct

//React counter interview question

// Range passwrod generator


const fetchBankDetails=(e)=> {


//   if(e.target.value.length>='11'){

//     // let obj = {
//     //     url: 'proposal-form-journey-do-view',
//     //     data: {
//     //         "languageId": "en_US",
//     //         "proposalId": proposalId ? proposalId : "",
//     //         "proposalScreenName": proposalScreenName ? proposalScreenName : "",
//     //         "url": window.location.href,
//     //         "userId": userId
//     //     }
//     // }

//    // let bankDetailsss = await invoke.fetchBankDetailsData(obj);

// let bankApiRes = {
//   "status":200,
//   "message":"Success",
//   "data":{
//      "bank_ifsc_code":{
//         "14233":{
//            "code":"ICIC0003543",
//            "name":"CHHATTARPUR",
//            "insurance_id":5,
//            "extra_data":{
//               "bank_ifsc_code":"ICIC0003543",
//               "bank_name":"CHHATTARPUR",
//               "bank_address":"",
//               "bank_city":"DELHI"
//            },
//            "from_cache":false,
//            "BankName":"ICICI BANK LIMITED",
//            "IfcsCode":"ICIC0003543",
//            "BankBranchName":"CHHATTARPUR",
//            "Address":"",
//            "City":"DELHI",
//            "Message":"success",
//            "insurer_name":"Niva Bupa Health Insurance Co Ltd.",
//            "insurance_name":"NIVA BUPA RECHARGE"
//         }
//      }
//   }
// }

// // bankApiRes = JSON.parse(bankApiRes)
// // console.log(bankApiRes,'bank')
//   }



}

  return (
    <>
    <div>demo
    <input type='text'  />
 <input type='text'onChange={()=>{console.log('hello')}}/>
    <button onClick={updateNameAnkush}>updateNameAnkush</button>
    <button onClick={updateItems}>updatelist</button>
    <button onClick={updateItems2}>updatelist2</button>
    <button onClick={increment}>count</button>

    <button onClick={handleobj}>handleobj</button>

    <button onClick={startTimer}>startTimer</button>
<div>{counter}</div>

    <div>


        {/* {count} */}
    </div>
    </div>

    </>
  )
}

//JAVASCRIPT

//Roadside Coder

//1. hOISTING
//2. Implicit nd Explicit Binding
//3. Implement a caching function
//4. Event loop in javascript
//5. currying
//6 Difference between mp nd forEch
//7. Difference between null nd undefined
//8.explin event delegation
//9 Array.flat implementation
//10.var vs let vs const
//11.call, bind and apply
//12.Infinite Currying
//13.Compose Polyfill
//14.Implement Promise.all(
//15. what is promises?  how we cn handle call back hell using promies give example (pro coddr)
//16.What is Dom
//17. differentiate between Es5 and Es6
//18. Different methods for array in javascript
//19.

//PROCODRR

 //1.
 //console.log(a,'a')    //temporal zone concept
  //let a='assa'

  //2.
 // console.log(b,'b')
   // var b='asdsd'

//  3. console.log(c)
//  const c = 'asjkl'

// 4.
// console.log(name,'name')
//   var name = 'string'

  //5.
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


  //6
  // foo()
  // var foo = 23

  // function foo(){
  // console.log('bar')
  // }

  // foo()

  //memory creation phase
  // code execution phase


  //7.
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

//8.
// function one(){
//   var c = 1
//   let a = 2
//   b= 3
// }

// console.log(c)
// console.log(a)


//9
// var x=20

//   function one(){

//   console.log(x,'x')
//   }

//  one()

  //10.
//  (function(){
//      for(var i=0;i<=3;i++){
//       setTimeout(()=>{
//         console.log(i)
//       },1000)
//     }
//     }())

    // fix the problem in above problem

  //11
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


  //12.
  // async function foo(){
  //        return 23
  //  }

  //  let result = foo()

  //  console.log(result,'result')

  //13.
  // function foo(){
  //       console.log('hiii')
  //    }
  //  var a = new foo()

  //  console.log(a,'a')


  //14.

  // let a [11,3,22,44,5]

  // let b=[55,5,77,45,65]

  // let a [11,3,22,44,5]

  // let b=[12,5,17,45,65]  let c [ ]  write a code so that in array c both a and b elements and array c will be sorted


//  15.
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



// ROADSIDE CODDR JAVASCRIPT

//1.
//var a=5  // now it is global scope

//{
  //var b= 6  // not is in block scope
//}


//console.log(a)
//console.log(b)

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
  // for(var i=0;i<5;i++){
  //   setTimeout((i)=>{
  //     console.log(i)
  //   },1000*i)
  // }



  //5.
  // var x=21

  // var fun = function(){
  //   console.log(x);
  //   var x= 20;
  // }

  // fun()


  //6

    //  function f(a){

    //   return function(b){
    //     return `${a}${b}`
    //   }
    //  }

    //  console.log(f(5))

    // console.log(f(5)f(6))

  //7  optimization code using closures

  function find(){

    let a = []
    for(let i =0;i<500;i++){
      a[i]=i*1
    }
    return function (index){

     // console.log(a[5],'a5')
      console.log(a[index],'index')
    }
  }

  const closure = find()
  closure(5)


  //8 what is the ouput

  for(var i =0;i<3;i++){

    setTimeout(()=>{
      console.log(i)
    },1000)
  }

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

// console.log(a[b],'a[b]')


//14.

  //  const setings ={
  //   username:'piyush',
  //   level:19,
  //   health:21
  //  }

   // stringify only level and health keys

   //15.

  //  const shape = {
  //   redius:10,

  //   diameter(){
  //     return this.radius*2;
  //   },
  //   parameter:()=> 2*Math.PI*this.radius,
  //  }

  //  console.log(shape.diameter())
  //  console.log(shape.parameter())


  //16

  // const user ={
  //     username:'piyush',
  //     level:19,
  //     health:21
  //    }

  //    const {username,level}=user

     // const username = "Ank"  how can we assign value again in predefine constant variable username




  // 17.

  // const {
  //   fullname:{first}
  // }=user

  // console.log(first,'first')

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

// let user ={
//   name:"piyush",
//   age:24,
//   getDetails(){
//       const nestArr=()=>{
//           console.log(this.name)
//       }
//       nestArr()
//   }
// }

// user.getDetails()

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


// this KEY WORD

//27.

// let a= 5

// function getParam(){
//   console.log(this.a)
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
//     console.log(thise)
//   }
// }

// user.getDetails()

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


//33.

// const user = {
//   name:"Piyush",
//   logMessage(){
//     console.log(this.name)
//   }
// }

// setTimeout(user.logMessage,1000)


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

// how can you print vale of name variable inside sayHello function


//37. what would be the output of above function using sayHello.apply(obj,[24,"Ank"])

//38

//const person = {
//   fullName: function(city, country) {
//     return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
//   }
// };

// const person1 = { firstName: "John", lastName: "Doe" };

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



//1. what is data dtype and different data types in javascript
//2. what is reference types
//3. difference between var and let
//4. what are promises in javascript
//5. what is DOM in javascript? is the need of having the dom
//6. what is event bubling and event capturing
//7. what is closures
//8. what is event loop in javascript
//9 . destructuring of arrays and objects destructuring the
//10. what is function chaining
//11 Give when to use arrow and regular function over each other


//REACT  (PRO CODDR)
//1. why do we need react
//2. what is state in react

// REACT INTERVIEW QUESTION
// 1.why do we need react //chai code react intro
//2. what is virtual dom
//3.Have you ever seen virtual dom  // console.log(<App/>)
//4 . Why virtual dom is fast  // proCodrr
//5. difference between useState ,states and props
//5 In how many ways we can create state in react app //  useState, useReducer
//6. what is the ways to track our states
//7. what are hooks
//8. . What is prop drilling and its disadvantages? Give example of custom hooks to call api

//9 How can we pass data from child component to Parent component
//10. when functional component loads what is the sequence of executing
//11 can we assign the values in hooks variables withou using useState()
//12. what is destructring in javascript
//13. useRef

//14.
  // const[count, setCount]=useState(0)
  //  const startTimer=()=>{
  //       setInterval(()=>{
  //       let   newCount= count+1
  //         setCount(newCount)
  //       },500)
  //  }

  //  startTimer()
  //  console.log(count)



//geeks for geeks
//13. How do browsers read JSX?
//14. What is a key in React?
//15. Explain the use of render method in React?
//16. What is state in React?
//17. Explain the difference between functional and class component in React?
//18. What is conditional rendering in React?
//19  What is react router?
//20.  What is the use of ref in React?
//21.  Explain the useEffect hook in react?
//22. What is prop drilling and its disadvantages?
//23. What is the difference between useref and createRef in React ?
//24.What is react-redux?
//25. Explain the core components of react-redux?
//26.What is context API?
//27. What is axios and how to use it in React?

//28. Write a program to create a counter with increment and decrement?
//29.Explain why and how to update state of components using callback?
//30.which is better functional or class component
//31 Difference between redux and context api


//MACHINE ROUND





//MACHINE CODING ROUND
  //1.  Make a circle on the screen and when u mmove the cursor circle will move with the cursor

  //29 . Employee Managment system using javscript code sandbox
//30. Count down timer using javscript code sandbox
//31  Pagination
//32 EMI Calculator
//33 Password Generator
///34 progress bar
//35  Grid Lights - GreatFrontEnd
//34 can you build your custom useMemo hook

//35 why useReducer is better over useState

// pngram string checker

// Convert 12hrs to 24hrs time







 // CHAT GPT REACT INTERVIEW QUESTIONS

//  React Concepts
// Component Lifecycle:

// Can you explain the difference between the old class component lifecycle methods and the lifecycle hooks in functional components with useEffect?
// State Management:

// How would you manage state across multiple components without using Redux or a state management library?
// React Hooks:

// What are React hooks? Can you name a few commonly used hooks and explain their purposes?
// useEffect Dependencies:

// What happens if you omit the dependency array in useEffect? How does React handle it?
// Context API:

// How does the Context API work? What are its pros and cons compared to other state management libraries like Redux?
// Error Boundaries:

// What are Error Boundaries in React? Can they be used in functional components?
// Advanced Rendering Techniques
// Conditional Rendering:

// What are some ways to conditionally render components in React? Which one would you use for performance optimization?
// Code Splitting:

// How does React support code splitting? Can you explain how React.lazy and Suspense work together?
// Portals:

// What are React Portals? When would you use them?
// Reconciliation Process:

// What is React's reconciliation process? How does it decide which parts of the DOM need to be updated?
// Performance Optimization
// Memoization:

// What is the purpose of React.memo? How is it different from useMemo and useCallback?
// Virtual DOM:

// Why is the Virtual DOM faster than directly manipulating the DOM? Can you explain the React rendering process?
// Avoiding Re-Renders:

// How can you prevent unnecessary re-renders in React? Provide examples using memoization techniques.
// Lazy Loading:

// How can you implement lazy loading for components and images in React?
// State Optimization:

// What techniques can you use to optimize state updates in large applications?
// Routing and Navigation
// React Router:

// How does React Router work? Can you explain the difference between useHistory, useNavigate, and useParams?
// Dynamic Routes:

// How can you create dynamic routes in React Router?
// Redirects:

// How would you programmatically navigate or redirect a user in React?
// Testing
// Testing Library:

// What is the React Testing Library? How is it different from Enzyme?
// Component Testing:

// How would you write a unit test for a React component that uses hooks like useState and useEffect?
// Snapshot Testing:

// What is snapshot testing in React, and how does it help in maintaining component integrity?
// Real-World Scenarios
// Third-Party Libraries:

// How do you decide whether to use a third-party library in your React application?
// Form Management:

// How would you manage complex form states in a React application? Can you explain the difference between using Formik and custom form handling?
// Error Handling:

// How would you handle errors in an API call within a React component?
// Server-Side Rendering (SSR):

// What is SSR in React, and how does it differ from Client-Side Rendering (CSR)?
// Miscellaneous
// React Keys:

// Why are keys important in React? What happens if you don’t use them?
// Higher-Order Components (HOC):

// What are HOCs in React? Can you give an example of when and why to use them?
// Custom Hooks:

// How would you create a custom hook in React? Provide an example.
// Prop Drilling:

// What is prop drilling in React? How can you avoid it?
// Hydration:

// What is React hydration, and when is it needed?
