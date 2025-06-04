
// 1..Explain the difference between functional and class component in React?
// Functional Component (Modern Standard)
// Uses a JavaScript function.

// Can use Hooks (useState, useEffect, etc.) for state and lifecycle.


// import React, { useState } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }




// ✅ Class Component (Older Style)
// Uses a JavaScript class that extends React.Component.

// Requires a constructor to manage state.

// Lifecycle methods like componentDidMount() are used.

// class MyComponent extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     increment = () => this.setState({ count: this.state.count + 1 });
  
//     render() {
//       return <button onClick={this.increment}>{this.state.count}</button>;
//     }
//   }



//2. Props vs State
   //


//3.What is React and why use it? 



//4 Lifecycle methods in class components   


//The component lifecycle in React refers to the sequence of events that occur from the creation of a component to its removal from the DOM. 
// React provides specific lifecycle methods (in class components) and hooks (in functional components)
//  to control behavior during these stages.


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

// 5. clean up function

    // Cleanup Function:

    // Allows you to clean up resources (e.g., subscriptions, timers) to prevent memory leaks.
    // Runs Conditionally:

    // Based on the dependencies provided, the effect can run on every render, specific updates, or once.

    // Effect logic here
    //   return () => {
    //     // Optional cleanup logic
    //   };
    // }, [dependencies]);




//6  useEffect question 
    //The useEffect hook in React allows you to perform side effects in functional components. 
    // It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount
    //  used in class components. Side effects can include data fetching, updating the DOM, setting up subscriptions, 
    // and more.

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

      // . Cleanup Function
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



//7. useContext

//8.// What is the use of ref in React?

// forward use Ref

 //import React, { forwardRef,useEffect,useState } from "react";


//  ref provides a way to access and manipulate DOM elements or React components directly.
//  Use React.createRef for class components and useRef for functional components.
//  It is commonly used for managing focus, animations, and integrating with third-party libraries.

// useRef is a React Hook that lets you persist a mutable value across renders without causing re-renders.
//  It's commonly used to:

// Access DOM elements directly (like focusing an input).

// Store mutable values (like timers or previous values) that don’t trigger re-renders.


// import React, { useRef } from 'react';

// function TextInput() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus(); // Direct DOM access
//   };

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   );
// }



//forwardRef is a React utility that allows a parent component to pass a ref directly to a child component,
//  even if that child is a functional component.

//Normally, refs only work with DOM elements or class components — forwardRef lets you expose a child’s
//  internal DOM node or instance to the parent.


// const ChildComponent = forwardRef((props, ref) => (
//   <input type="text" ref={ref} />
// ));

// function ParentComponent() {
//   const inputRef = React.useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <ChildComponent ref={inputRef} />
//       <button onClick={focusInput}>Focus Child Input</button>
//     </div>
//   );
// }

// export default ParentComponent;


//9.Context API for state management

// The Context API in React is a feature that allows you to share data across the entire component tree without needing to explicitly pass props down at every level. It helps manage "global" state, such as themes, user data, or authentication, and reduces the need for prop drilling.

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


//10. Virtual DOM and reconciliation


//11.useMemo()

   //import React, { useState, useMemo } from 'react';
   
   // If you have a function that performs a computation (e.g., sorting data, complex arithmetic),
   // React will re-run that function every time the component renders. This is fine for simple calculations,
   // but it can be inefficient for expensive or complex operations.
   // Avoiding Recalculation:
   
   // With useMemo, you memoize the result of the computation. This means React stores the result and doesn't re-run the function unless
   // the dependencies (the inputs that the function depends on) change.
   
//    export const ExpensiveComputationComponent = () => {
//      const [count, setCount] = useState(0);
//      const [name, setName] = useState('Alice');
   
//      // Expensive calculation
//      const expensiveCalculation = useMemo(() => {
//        console.log('Calculating...');
//        return count * 1000;  // Expensive operation
//      }, [count]); // Recompute only if `count` changes
   
//      return (
//        <div>
//          <p>Result of expensive calculation: {expensiveCalculation}</p>
//          <p>Name: {name}</p>
//          <button onClick={() => setCount(count + 1)}>Increment Count</button>
//          <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>Change Name</button>
//        </div>
//      );
//    };

//12.Higher-order components (HOC)


//13. //LAZY LOADING

// What is Lazy Loading?
// Lazy loading is a design pattern where components, data, or assets are loaded only when they are needed.
//  In React, this usually means loading components dynamically rather than all at once when the app initializes.

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