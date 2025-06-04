


// What is the use of ref in React?

// forward use Ref

 import React, { forwardRef,useEffect,useState } from "react";


//  ref provides a way to access and manipulate DOM elements or React components directly.
//  Use React.createRef for class components and useRef for functional components.
//  It is commonly used for managing focus, animations, and integrating with third-party libraries.


const ChildComponent = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

function ParentComponent() {
  const inputRef = React.useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  let name = "Ankush kumar"
  name = [...name]
  let remvName = name.forEach((item,i)=>{
          for(l=1;l<=name.length;l++){
            if(name[i]===name[l]){
                remvName.push(name[i])
            }
          }
  })



  console.log(name,'name')
  console.log(remvName,'remvName')




  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={focusInput}>Focus Child Input</button>
    </div>
  );
}

export default ParentComponent;






// function MyComponent() {
//     const inputRef = React.useRef(null);

//     const showValue = () => {
//       alert(inputRef.current.value); // Access input value
//     };

//     return (
//       <div>
//         <input type="text" ref={inputRef} />
//         <button onClick={showValue}>Show Input Value</button>
//       </div>
//     );
//   }

//   export default MyComponent;







//Explain the useEffect hook in react?

//The useEffect hook in React allows you to perform side effects in functional components. 
// It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount 
// used in class components. Side effects can include data fetching, updating the DOM, 
// setting up subscriptions, and more.

// Runs After Render:

// By default, useEffect runs after the component renders and updates the DOM.
// Dependency Array:

// Controls when the effect runs by specifying dependencies.
// Cleanup Function:

// Allows you to clean up resources (e.g., subscriptions, timers) to prevent memory leaks.
// Runs Conditionally:

// Based on the dependencies provided, the effect can run on every render, specific updates, or once.

  // Effect logic here
//   return () => {
//     // Optional cleanup logic
//   };
// }, [dependencies]);




// What happens if you omit the dependency array?

// The effect runs after every render.
// Can you call useEffect conditionally?

// No, useEffect cannot be called conditionally. If needed, conditionally execute logic inside the effect.
// What is the difference between componentDidMount and useEffect?

// useEffect with an empty dependency array ([]) is equivalent to componentDidMount.
// Can you have multiple useEffect hooks?

// Yes, you can have as many useEffect hooks as needed.









// 1. Without Dependencies (Runs on Every Render)
// If you don’t pass a dependency array, the effect runs after every render.

// Example:

// jsx
// Copy code
// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Effect ran!");
//   });

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;
// Every time the component re-renders (e.g., when count changes), the effect runs.










// With an Empty Dependency Array (Runs Once)
// Passing an empty array ensures the effect runs only once after the initial render.

// Example:

// jsx
// Copy code
// useEffect(() => {
//   console.log("Effect ran once!");
// }, []);
// Useful for fetching data or initializing variables when the component mounts.






// 3. With Dependencies (Runs When Dependencies Change)
// The effect runs only when one of the dependencies changes.

// Example:

// jsx
// Copy code
// useEffect(() => {
//   console.log(`Count changed to ${count}`);
// }, [count]);







// 4. Cleanup Function
// If the effect sets up resources (e.g., subscriptions, event listeners), you can clean them up to prevent memory leaks.

// Example:

// jsx
// Copy code
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Timer running");
//   }, 1000);

//   return () => {
//     clearInterval(timer); // Cleanup when the component unmounts or dependencies change
//     console.log("Timer cleaned up");
//   };
// }, []);



// useEffect(() => {
//     const handleResize = () => {
//       console.log("Window resized");
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);





// What is prop drilling and its disadvantages


//Prop drilling is a concept in React (or similar component-based frameworks) where you pass data (props) from a parent component down to deeply nested child components.

//  const App = () => {
//     const user = { name: "John", age: 30 };

//     return <Parent user={user} />;
//   };

//   const Parent = ({ user }) => {
//     return <Child user={user} />;
//   };

//   const Child = ({ user }) => {
//     return <GrandChild user={user} />;
//   };

//   const GrandChild = ({ user }) => {
//     return <div>Hello, {user.name}!</div>;
//   };

//   export default App




  // what is context api


//   The Context API in React is a feature that allows you to share data across the entire component tree without needing to explicitly pass props down at every level. It helps manage "global" state, such as themes, user data, or authentication, and reduces the need for prop drilling.

// Key Concepts of the Context API:
// Context: A Context is created using the React.createContext() method. It provides a way to define a global state that can be accessed by any component in the tree.

// Provider: The Provider component is used to wrap parts of the component tree that need access to the context. It accepts a value prop, which defines the data that will be available to all consumers of the context.

// Consumer: The Consumer component is used to access the context value in child components. Alternatively, you can use the useContext hook for easier access.



// Step 1: Create a Context
// jsx
// Copy code
// import React, { createContext, useContext } from "react";

// // Create a Context
// const UserContext = createContext();
// Step 2: Use a Provider to Wrap Components
// jsx
// Copy code
// const App = () => {
//   const user = { name: "Alice", age: 25 };

//   return (
//     <UserContext.Provider value={user}>
//       <Dashboard />
//     </UserContext.Provider>
//   );
// };
// Step 3: Consume the Context

// Using useContext Hook:
// jsx
// Copy code
// const Dashboard = () => {
//   const user = useContext(UserContext);

//   return <h1>Welcome, {user.name}!</h1>;
// };
// Using Consumer Component:
// jsx
// Copy code
// const Dashboard = () => (
//   <UserContext.Consumer>
//     {user => <h1>Welcome, {user.name}!</h1>}
//   </UserContext.Consumer>
// );






//LIFE CYCLE METHOD REACT

//The component lifecycle in React refers to the sequence of events that occur from the creation of a component to its removal from the DOM. React components go through several stages in their lifecycle: mounting, updating, and unmounting. React provides specific lifecycle methods (in class components) and hooks (in functional components) to control behavior during these stages.


// componentDidMount():

// Runs after the component is rendered in the DOM.
// Commonly used for API calls, subscriptions, or DOM manipulations.

//useEffect(() => {...}, []): Acts like componentDidMount.



// componentDidUpdate(prevProps, prevState, snapshot):

// Runs after the DOM has been updated.
// Useful for operations like fetching new data or DOM updates.
// Functional Components:
// Hooks:
// useEffect(() => {...}, [dependencies]): Acts like componentDidUpdate when dependencies change.




// componentWillUnmount():
// Runs before the component is destroyed.
// Used for cleanup, such as canceling API calls, removing subscriptions, or clearing timers.
// Functional Components:
// Hooks:
// useEffect(() => {...; return cleanup}, []): Cleanup function simulates componentWillUnmount.


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
// These methods allow you to control a component's behavior at different stages of its lifecycle. For functional components,
//  similar functionality can be achieved using the useEffect hook.



// CLEAN UP function working
// const TimerComponent = () => {
//     const [count, setCount] = useState(0);

//     const Increment = ()=>{
//         setCount((prev)=>{prev + 1})
//     }

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);


//       // every time this useEffect call a new setInterval is set inside useEffect due to which multiple values of count is
//       // set which is incorrect so we need to clear other setInterval after every useEffect calling so that count value will remain
//       // same as it need to be. For this to clear other memories we use clean up function in useEffect as shown below


//       console.log(count,'count')
//       return () => {
//         clearInterval(interval); // Cleanup to avoid memory leaks
//       };
//     }); // Empty dependency array ensures cleanup runs on unmount

//     return <div onClick={Increment}>Timer: {count}</div>;
//   };

// export default TimerComponent




//USE MEMO

// Key Features of useMemo
// Avoids Expensive Calculations:

// useMemo caches the result of a function and returns the cached result during subsequent renders if the dependencies haven't changed.
// Improves Performance:

// It is particularly useful when the computation is heavy or when the result is used in multiple places.
// Similar to React.memo:

// While React.memo optimizes components by memoizing the rendered output, useMemo memoizes a calculated value.
// Syntax
// jsx
// Copy code
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// computeExpensiveValue is the function whose result you want to memoize.
// [a, b] are the dependencies. The function will only re-run if a or b changes.
// Example 1: Basic Usage
// jsx
// Copy code
// import React, { useState, useMemo } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [items, setItems] = useState([1, 2, 3]);

//   // Memoizing the total calculation
//   const total = useMemo(() => {
//     console.log("Computing total...");
//     return items.reduce((sum, item) => sum + item, 0);
//   }, [items]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Total: {total}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setItems([...items, items.length + 1])}>
//         Add Item
//       </button>
//     </div>
//   );
// };

// export default App;
// What Happens:
// The total is recalculated only when items changes.
// Clicking "Increment Count" doesn’t trigger the calculation of total, improving performance.





// USE CALLBACK


// Memoizes Function References:

// Prevents re-creation of a function on every render unless dependencies change.
// Improves Performance:

// Helps optimize child components that rely on functions passed as props by ensuring the same function reference is passed unless necessary to update.
// Similar to useMemo:

// While useMemo memoizes a computed value, useCallback memoizes a function.

// const memoizedCallback = useCallback(() => {
//     // Function logic
//   }, [dependencies]);
//   () => The function to memoize.
//   [dependencies] => The dependencies that determine when to recreate the function.



// const Button = React.memo(({ handleClick }) => {
//     console.log("Button re-rendered!");
//     return <button onClick={handleClick}>Click Me</button>;
//   });

//   const App = () => {
//     const [count, setCount] = useState(0);

//     // Without useCallback, this function would be recreated on every render
//     const increment = useCallback(() => {
//       setCount((prev) => prev + 1);
//     }, []);

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <Button handleClick={increment} />
//       </div>
//     );
//   };

//   export default App;
//   What Happens:
//   The increment function reference is stable across renders because it’s wrapped in useCallback.
//   The Button component (wrapped in React.memo) avoids unnecessary re-renders.




// REACT.MEMO

// React.memo works by shallowly comparing the component’s props:
// If the props remain the same between renders, the component will not re-render.
// If any prop changes, the component will re-render.
// Syntax
// jsx
// Copy code
// const MemoizedComponent = React.memo(Component);



// const ChildComponent = React.memo(({ count }) => {
//     console.log("ChildComponent rendered!");
//     return <p>Count: {count}</p>;
//   });

//   const App = () => {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState("");

//     return (
//       <div>
//         <ChildComponent count={count} />
//         <button onClick={() => setCount(count + 1)}>Increment Count</button>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type something"
//         />
//       </div>
//     );
//   };

//   export default App;
//   What Happens:
//   The ChildComponent only re-renders when the count prop changes.
//   Typing in the input (which updates the text state) does not trigger a re-render of ChildComponent, improving performance.