Live link: https://support-desk-bd.netlify.app/

# React Basics Q&A

## 1. What is JSX, and why is it used?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It is used in React to write UI components in a more readable way and makes code easier to understand.

---

## 2. What is the difference between State and Props?
**Answer:**  
- **State**: Managed inside a component, can change over time.  
- **Props**: Passed from parent to child, read-only.  

---

## 3. What is the useState hook, and how does it work?
**Answer:** `useState` is a React hook that lets you add state to a functional component. It returns a state variable and a function to update it.

---

## 4. How can you share state between components in React?
**Answer:** By lifting the state up to the nearest common parent and passing it down as props, or by using Context API/State management libraries.

---

## 5. How is event handling done in React?
**Answer:** Event handling is done using camelCase syntax (e.g., `onClick`, `onChange`) with functions passed as event handlers.
