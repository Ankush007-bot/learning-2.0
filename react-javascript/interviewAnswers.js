//app.eraser.io

// 1. what is data dtype and different data types in javascript
// ChatGPT said:
// ChatGPT
// What is a Data Type?
// A data type in programming defines the type of data that a variable can hold. In JavaScript, data types determine how values are interpreted and manipulated. They are categorized into primitive and non-primitive types.

// Primitive Data Types
// Primitive types are immutable (cannot be altered once created) and are directly stored in memory.

// String
// Represents textual data.
// Example:

// javascript
// Copy code
// let name = "John";

// Number
// Represents numerical data, including integers and floating-point numbers.
// Example:

// javascript
// Copy code
// let age = 25;
// let pi = 3.14;

// Boolean
// Represents logical values: true or false.
// Example:

// javascript
// Copy code
// let isActive = true;
// Undefined

// Represents a variable that has been declared but not assigned a value.
// Example:

// javascript
// Copy code
// let x; // Undefined
// Null
// Represents an intentional absence of a value.
// Example:

// Non-Primitive (Reference) Data Types
// Non-primitive types are objects, stored as references, and can be mutable.

// Object
// const obj = { b: 2, a: 1, c: 3 };

//     for(let keys in obj){
//         console.log(keys)
//     }
// A collection of key-value pairs.
// Example:

// javascript
// Copy code
// let person = { name: "John", age: 30 };
// Array
// An ordered list of elements (technically a specialized object).
// Example:

// javascript
// Copy code
// let numbers = [1, 2, 3, 4];

// let person ={name:"lyla"}

// const members=[person]
//person = null
// person.name = null
// console.log(members,'members')


//9 . destructuring of arrays and objects destructuring the
    //in JavaScript is a convenient way of unpacking values from arrays or properties from objects into distinct variables
    //const person = { name: "Alice", age: 25, city: "New York" };

    // Destructure properties into variables
    //const { name, age } = person;

//****
//     You can assign a property to a new variable name.

// javascript
// Copy code
// const { name: userName, age: userAge } = person;

// console.log(userName); // "Alice"
// console.log(userAge);  // 25

//**** */

// Provide default values for properties that may be undefined.

// javascript
// Copy code
// const { name, country = "USA" } = person;

// console.log(country); // "USA"

// Nested Object Destructuring:
// javascript
// Copy code
// const employee = {
//   id: 1,
//   details: { firstName: "John", lastName: "Doe" },
// };

// const {
//   details: { firstName, lastName },
// } = employee;

// console.log(firstName); // "John"
// console.log(lastName);  // "Doe"


//40. what is promises in object
//A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.


// life cycle method

// These methods allow you to control a component's behavior at different stages of its lifecycle. For functional components,
//  similar functionality can be achieved using the useEffect hook.

// 1. componentDidMount()
// When it runs: After the component has been rendered to the DOM for the first time.
// Use case: Ideal for fetching data, initializing subscriptions, or starting timers.
// Example:
// jsx
// Copy code
// componentDidMount() {
//   fetch("https://api.example.com/data")
//     .then(response => response.json())
//     .then(data => this.setState({ data }));
// }
// 2. componentDidUpdate(prevProps, prevState)
// When it runs: After the component has re-rendered due to a change in props or state.
// Use case: Perform operations that depend on the updated state or props, like fetching new data when props change.
// Example:
// jsx
// Copy code
// componentDidUpdate(prevProps) {
//   if (prevProps.id !== this.props.id) {
//     this.fetchNewData(this.props.id);
//   }
// }
// 3. componentWillUnmount()
// When it runs: Right before the component is removed from the DOM.
// Use case: Clean up operations like unsubscribing from events, canceling network requests, or clearing timers.
// Example:
// jsx
// Copy code
// componentWillUnmount() {
//   clearInterval(this.timer);
// }




//REDUX
// Redux is an independent state management library

// Key Features of Redux:
// Centralized State: All application state is stored in a single store.
// Predictable State Updates: State changes are handled by pure functions called reducers.
// Unidirectional Data Flow: State flows in one direction, making the application logic easier to understand


// How Redux Works:
// Store: Holds the application's state.
// Actions: Plain JavaScript objects that describe what changes should occur (e.g., { type: 'INCREMENT' }).
// Reducers: Pure functions that take the current state and an action, and return the updated state
// combine reducer:  it contains all the reducer which we used in our application

// # NPM
//npm install redux react-redux


// make a file store.js inside src/app/store.js

//import {createStore,combineReducers } from 'redux'   in store.js file


// import {createStore,combineReducers } from 'redux'

// const reducer= combineReducers({
// // contains all the reducers
//cmn: cmn,

// })
// const initialState={}

// const store = createStore({
//      reducer,
//      initialState
// })

// now we have to wrap the provider into our application in index.js   , it makes  redux store to available throghout our app

// create reducer file with any name in which you have written your reducer function

// step 1

// let initialState = {
//     memberData: [],
// };

// function cmn(state = initialState, action) {
//     switch (action.type) {
//         case 'memberData':
//             return {
//                 ...state,
//                 memberData: _.cloneDeep(action.payload),
//             };

//         default:
//             return state;
//     }
// }

// export default cmn;

// NEXT STEP

// import cmn from './cmn'

// const rootReducer= combineReducers({
// // contains all the reducers
// cmn: cmn,
// })
// const initialState={}

//  const store = configureStore({
//     reducer: rootReducer,

// })




//CONTEXT API

// The Context API in React provides a way to share data (like themes, authentication, or user settings)
// globally across components without passing props manually at every level. It is particularly useful
// for avoiding prop drilling, where data has to be passed down through multiple layers of components.

//The Context API helps manage global state in a React app without the need for third-party libraries like Redux.

// Components:
// React.createContext: Creates a Context object.  it will create a container in which all the states stores

//make a saperate file to create context
// import { createContext } from 'react';

// export const MyContext = createContext(null);


// user can send any data to any component by using  <MyContext.Provider value = {{}}>  as soon below

        //  <MyContext.Provider value = {{setSonData,setGrandSon,son,grandSn}}>
        //      <Loginson/>
        //  </MyContext.Provider>

 // user can get any data or states in any component by using the following method  const { setSonData,son } = useContext(MyContext);


 //CODE FOR LOGIN (parent) COMPONENT
//  import React, { useContext ,useState} from 'react';
// import { MyContext } from '../contextApi/MyContext';
// import { Loginson } from "./Loginson"



// const Login = ()=>{

// const[sonData, setSonData] = useState("")
// const[grandSon,setGrandSon]=useState("")

// let son= "i am son coming from Login component"
// let grandSn="i am grandSon coming from Login component"
//     return (
//         <>
//             <span>I am LOGIN </span>
//             <span>{sonData} </span><br/>
//             <span>{grandSon} </span>
//             {/* <Loginson/> */}
//          <MyContext.Provider value = {{setSonData,setGrandSon,son,grandSn}}>
//              <Loginson/>
//          </MyContext.Provider>

//         </>
//     )
// }

// export default Login


// CODE FOR Loginson (child) component

import React, { useContext ,useState} from 'react';
import { Logingrandson } from "./Logingrandson"
import { MyContext } from '@/contextApi/MyContext';

// export const Loginson = ()=>{
// //console.log(useContext(MyContext),'useContext')

// const { setSonData,son } = useContext(MyContext);

// //console.log(useContext(MyContext),'loginsonContext')

// setSonData("i am your son dadyy")

//     return(
//         <>

//         <h1>----SON---</h1>
//         <span>{son}</span>

//         <Logingrandson/>

//   {/* <MyContext.Provider>
//      <Logingrandson/>
//   </MyContext.Provider> */}


//         </>
//     )
//}

//OUTPUT
// I am LOGIN i am your son dadyy
// I am your grand son daddy
// ----SON---
// i am son coming from Login component




// Provider: Used to wrap the components that need access to the shared state.
// Consumer or useContext: Consumes the shared state.

// The container which holds the global states is know as context for context-api concept




// DIFFERENCE BETWEEN REDUX AND CONTEXT-API


//REDUX

// Purpose: State management library for complex and large-scale applications.
// Setup: Requires installation (redux, react-redux).
// Scalability: Handles complex state logic for large applications with ease.
// Performance: Efficient with features like selectors and middleware.
// Middleware: Supports middleware like redux-thunk or redux-saga for async logic.
// Debugging: Provides powerful tools like Redux DevTools for tracking state changes.

//CONTEXT-API

// Purpose: Built-in feature of React to manage state and avoid prop drilling.
// Setup: No additional installation; part of React.
// Scalability: Suitable for small to medium-sized applications.
// Performance: May lead to unnecessary re-renders if not optimized.
// Middleware: Does not support middleware; async logic must be handled manually.
// Debugging: Relies on React DevTools, which have limited debugging for complex state.



// REACT.MEMO

// React.memo is a higher-order component (HOC) in React that is used to optimize the rendering of
// functional components. It prevents a component from re-rendering if its props have not changed,
// thereby improving performance.

//SYNTAX

// import React from "react";

// const MyComponent = React.memo((props) => {
//   console.log("Rendered!");
//   return <div>{props.value}</div>;
// });

// export default MyComponent;




//----- Example Without React.memo----
// jsx
// Copy code
// import React from "react";

// const MyComponent = (props) => {
//   console.log("Rendered!");
//   return <div>{props.value}</div>;
// };

// const Parent = () => {
//   return <MyComponent value="Hello" />;
// };

// export default Parent;
// Even if value stays the same, MyComponent will re-render every time the parent component renders.



//------ Example With React.memo-----
// jsx
// Copy code
// import React from "react";

// const MyComponent = React.memo((props) => {
//   console.log("Rendered!");
//   return <div>{props.value}</div>;
// });

// const Parent = () => {
//   return <MyComponent value="Hello" />;
// };

// export default Parent;
// Now, MyComponent will only render if value changes.



//LAZY LOADING

// What is Lazy Loading?
// Lazy loading is a design pattern where components, data, or assets are loaded only when they are needed. In React, this usually means loading components dynamically rather than all at once when the app initializes.

// Benefits of Lazy Loading
// Reduces the initial bundle size.
// Speeds up the initial load time of the application.
// Improves performance, especially for large apps.


// React Implementation of Lazy Loading
// React provides the React.lazy function to enable lazy loading of components. It works with Suspense to display
// fallback content while the component is being loaded.
import React, { Suspense } from "react";

// Lazy loading the component
// const LazyComponent = React.lazy(() => import("./LazyComponent"));

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome!</h1>
//       {/* Suspense handles the loading state */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default App;
// React.lazy dynamically imports the LazyComponent only when it is needed.
// Suspense displays a fallback (e.g., "Loading...") while the component is being loaded.




//CODE SPLITTING
// Code splitting is a technique to break up your JavaScript bundle into smaller chunks that can be loaded on demand.
//This ensures that users only download the code necessary for the part of the app they are currently using.

// Benefits of Code Splitting
// Reduces the size of the JavaScript bundle sent to the client.
// Improves app performance by splitting large files into smaller, manageable chunks.
// Facilitates lazy loading.

// Example: Code Splitting with Routes
// Code splitting is often implemented with React Router for route-based splitting.

// jsx
// Copy code
// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // Lazy load components for each route
// const Home = React.lazy(() => import("./Home"));
// const About = React.lazy(() => import("./About"));

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;
// Each route's component (Home, About) is loaded only when the user navigates to that route.


//Lazy Loading
//1.Focuses on delaying the loading of components or assets until needed.
//2.Achieved using React.lazy and Suspense.
//3.A part of implementing code splitting.

//code splitting
//1.Focuses on dividing the app into smaller bundles (chunks).
//2.Achieved using Webpack, React Router, or dynamic imports.
//3.Broader concept involving splitting code and lazy loading chunks.


// Conclusion
// Lazy Loading ensures that components and assets are loaded only when required, saving resources.
// Code Splitting breaks the app into smaller chunks, enabling lazy loading and improving performance.


// What is Webpack?
// Webpack is a popular module bundler for JavaScript applications. It takes the code, dependencies, and assets
// of your project and bundles them into optimized files (often a single file or a few files) that can be efficiently
// served to the browser.

// Webpack is highly configurable and supports features like code splitting, lazy loading, tree shaking, and more,
//  which help improve the performance of modern web applications.




//USE MEMO
// useMemo is a React Hook used to optimize the performance of a functional component by memoizing (caching) the result of a computation. It prevents expensive calculations from being unnecessarily re-executed on every render, running the computation only when its dependencies change.
// Use useMemo to memoize calculations based on props or state.


// Syntax
// javascript
// Copy code
// const memoizedValue = useMemo(() => computeValue(), [dependency1, dependency2]);
// computeValue: A function that performs an expensive calculation.
// Dependencies ([dependency1, dependency2]): The values that trigger the re-computation when they change.
// memoizedValue: The result of the computation, which is cached until dependencies change.
// Why Use useMemo?
// Expensive Calculations: Optimize components with computations that are resource-intensive or time-consuming.
// Prevent Unnecessary Re-renders: Avoid recalculating values that are dependent on unchanged props or state.
// Improved Performance: Useful for applications where re-renders impact performance.
// Example: Preventing Expensive Calculation on Every Render
// javascript
// Copy code
// import React, { useState, useMemo } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // Expensive computation
//   const expensiveCalculation = useMemo(() => {
//     console.log("Running expensive calculation...");
//     return count * 1000;
//   }, [count]); // Recomputes only if 'count' changes

//   return (
//     <div>
//       <h1>Expensive Calculation: {expensiveCalculation}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />
//     </div>
//   );
// };

// export default App;
// The expensive calculation (count * 1000) runs only when count changes, not when text updates.


//useCallback

// What is useCallback in React?
// useCallback is a React Hook used to memoize functions. It prevents functions from being re-created on every render
//  unless their dependencies change. This is particularly useful when passing callbacks to child components to avoid
//  unnecessary re-renders

//Avoids unnecessary re-creation of functions, especially in components that re-render frequently.


// const memoizedCallback = useCallback(() => {
//     // Your function logic here
//   }, [dependency1, dependency2]);




// Without useCallback:

// javascript
// Copy code
// import React, { useState } from "react";

// const Child = ({ onClick }) => {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     console.log("Increment clicked");
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Child onClick={increment} />
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//     </div>
//   );
// };

// export default App;
// The Child component re-renders every time the App component re-renders because the increment function
// is recreated on every render.



// With useCallback:
// javascript
// Copy code
// import React, { useState, useCallback } from "react";

// const Child = React.memo(({ onClick }) => {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     console.log("Increment clicked");
//   }, []); // Function reference remains stable

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Child onClick={increment} />
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//     </div>
//   );
// };

// export default App;
// Now, the Child component will not re-render unless the increment function's dependencies change (none in this case).


// import React, { useState, useCallback } from "react";
// import debounce from "lodash/debounce";

// const DebouncedInput = () => {
//   const [inputValue, setInputValue] = useState(""); // Immediate value
//   const [debouncedValue, setDebouncedValue] = useState(""); // Debounced value

//   // Debounced function to update the state
//   const updateDebouncedValue = useCallback(
//     debounce((value) => {
//       setDebouncedValue(value); // Update the debounced state
//     }, 300),
//     [] // Ensure the debounce function is stable
//   );

//   // Handle input changes
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value); // Update the immediate value
//     updateDebouncedValue(value); // Call the debounced updater
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Type something..."
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <p>Immediate Value: {inputValue}</p>
//       <p>Debounced Value: {debouncedValue}</p>
//     </div>
//   );
// };

// export default DebouncedInput;



//THROTTLING

// Throttle is a technique used to control the frequency at which a function executes over time. Unlike debounce,
// which delays execution until the activity has stopped for a specific time, throttle ensures that the function is
// called at most once within a specified time interval.


// Throttle is a technique used to control the frequency at which a function executes over time. Unlike debounce,
// which delays execution until the activity has stopped for a specific time, throttle ensures that the function is
// called at most once within a specified time interval.

// How Throttle Works
// When a throttled function is invoked, it runs immediately if enough time has passed since the last invocation.
// If it's called again before the interval has elapsed, the call is ignored or delayed until the interval is over.



//throttle from Lodash:

//The throttle function ensures that the setScrollPosition logic runs at most once every 300ms, even if the scroll
// event is triggered continuously.
//Why Use throttle:

//Without throttling, the scroll event fires too frequently, which can negatively affect performance.
// Throttling ensures smoother performance by limiting the frequency of updates.


// import React, { useState, useEffect } from "react";
// import throttle from "lodash/throttle";

// const ThrottledComponent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     // Define a throttled version of the scroll handler
//     const throttledScrollHandler = throttle(() => {
//         console.log('throttle')
//       setScrollPosition(window.scrollY);
//     }, 300); // 300ms throttle delay

//     // Add the event listener
//     window.addEventListener("scroll", throttledScrollHandler);

//     return () => {
//       // Clean up the listener to avoid memory leaks
//       window.removeEventListener("scroll", throttledScrollHandler);
//     };
//   }, []); // Empty dependency array ensures this effect runs once

//   return (
//     <div>
//       <h1>Throttled Scroll Event with Lodash</h1>
//       <p>Scroll Position: {scrollPosition}px</p>
//       <div style={{ height: "200vh", background: "linear-gradient(to bottom, #fff, #ddd)" }}>
//         Scroll down to see the throttled effect in action!
//       </div>
//     </div>
//   );
// };

// export default ThrottledComponent;


//NEXT ROUTER

// Router Methods
// router.push(url, as, options):

// Navigates to a new route.
// Example: router.push('/about').
// router.replace(url, as, options):

// Replaces the current route without adding to the history stack.
// Example: router.replace('/about').
// router.prefetch(url):

// Prefetches the route in the background for faster navigation.
// router.back():

// Navigates back in the history stack.
// router.reload():

// Reloads the current route.



// Dynamic Routes
// Defining a Dynamic Route
// Create a file with square brackets in the pages/ directory:

// javascript
// Copy code
// // pages/post/[id].js
// import { useRouter } from "next/router";

// export default function Post() {
//   const router = useRouter();
//   const { id } = router.query;

//   return <h1>Post ID: {id}</h1>;
// }
// Navigating to a Dynamic Route
// javascript
// Copy code
// router.push(`/post/${postId}`);


//what is key in REACT why it is important

// A key in React is a special attribute used in lists to help React identify which items have changed,
//  been added, or removed. It is essential for improving performance and ensuring the efficient rendering of list elements.

// Why Are Keys Important?
// React uses keys to track and manage elements efficiently during the reconciliation process.
// Without keys, React would re-render the entire list whenever there’s a change. With keys,
// React can optimize updates by identifying the specific elements that changed.
// How Keys Work
// Each element in a list should have a unique key.
// React uses these keys to compare elements between renders and determine:
// Which elements need to be updated
// Which need to be removed
// Which need to be added


//USEREF

// import React, { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(); // Create a ref for the input element

//   const focusInput = () => {
//     inputRef.current.focus(); // Focus the input element when called
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Click button to focus me" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default FocusInput;




//CODING ROUND INTERVIEW QUESTIONS ANSWERS
//1.Reverse a string without using built-in methods.


// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// // Example usage
// console.log(reverseString("hello")); // Output: "olleh"



//2.Write a function to find two numbers in an array that sum to a target value.
             // const nums = [2, 7, 11, 15];
            // const target = 9;
// const nums = [2, 7, 11, 15, 5, 4];
// const target = 9;

// function findTwoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]; // Return the indices of the two numbers
//             }
//         }
//     }
//     return []; // Return empty array if no pair is found
// }

// // Example usage
// const result = findTwoSum(nums, target);
// console.log(result); // Output: [0, 1]

//3.Write a function to sort an object by its keys.
// javascript
// Copy code
// const obj = { b: 2, a: 1, c: 3 };
// console.log(sortObjectByKey(obj)); // { a: 1, b: 2, c: 3 }



////8. Removes dublicates from an array

// Example usage
// let dublArray = [2, 34, 5, 2, 4, 3, 5, 6, 74, 6];
// let result = removeDuplicates(dublArray);
// console.log(result); // Output: [2, 34, 5, 4, 3, 6, 74]

// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;

//         // Check if the current element is already in the uniqueArray
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         // If not a duplicate, add it to uniqueArray
//         if (!isDuplicate) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }


// let dublArray=[2,34,5,2,4,3,5,6,74,6]


// const noDublArray=[...dublArray]
// const remvDublElemArry=()=>{
//     for(let i=0;i<dublArray.length;i++){
//         for(let l=i+1;l<dublArray.length;l++){
//             if(dublArray[i]==dublArray[l]){
//                 noDublArray.splice(l,1)

//             }
//         }
//     }
// }
// remvDublElemArry()


//9.Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; and
//for multiples of both, print "FizzBuzz".


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//Retry mechanism const useRetryFetch = (url, retries = 3) => {
//   const [data, setData] = useState(null);
  //const [loading, setLoading] = useState(true);
 // const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       let attempt = 0;
//       let success = false;
//       while (attempt < retries && !success) {
//         try {
//           const response = await fetch(url);
//           if (!response.ok) throw new Error('Failed to fetch');
//           const result = await response.json();
//           setData(result);
//           success = true;
//         } catch (error) {
//           setError(error.message);
//           attempt++;
//           if (attempt === retries) {
//             setLoading(false);
//           }
//         }
//       }
//     };
//     fetchData();
//   }, [url, retries]);

//   return { data, loading, error };
// };
