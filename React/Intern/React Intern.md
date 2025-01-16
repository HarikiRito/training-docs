# React Intern Level

Congratulations on your first day of React Internship! In order to get started, you must know the basics of React. The following concepts should be familiar to you:

- [React Components](https://react.dev/learn/your-first-component) - Learn how to create and use components
- [JSX](https://react.dev/learn/writing-markup-with-jsx) - Understand the syntax extension for JavaScript
- [State](https://react.dev/learn/state-a-components-memory) - Manage component's internal data that can change over time
- [Props](https://react.dev/learn/passing-props-to-a-component) - Pass data from parent to child components
- [Hooks](https://react.dev/learn/react-hooks) - Use state and other React features in functional components

References:
- [React Quick Start Guide](https://react.dev/learn)
- [React Documentation](https://react.dev)

The whole React documentation is available here: [React Documentation](https://react.dev/learn)


## TypeScript

Although you can use React without TypeScript, TypeScript is a must for this internship. Why, you ask? Almost all of the enterprise projects use TypeScript to build their applications. When you working as a team, the JavaScript codebase often falls apart really quick as the time goes by. This is due to the nature that JavaScript is a dynamic language, and you can only find out the error when you run the code. 

With TypeScript, it is a different story. TypeScript is a statically typed language, which means that you can find out the error before you run the code using the compiler. Although it takes time to learn from the start to understand the concept, it is crucial for any good codebase that reduce the cost of maintenance significantly.

For you to pass this level, you must be able to understand the following concepts:

- [Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) - Understand the fundamental data types in TypeScript, including `boolean`, `number`, `string`, and more.
- [Interfaces and Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) - Learn how to define contracts within your code using interfaces, which describe the shape of objects.

These are the basic concepts of TypeScript that will be use throughout the course for more advanced concepts later on. Make sure you understand these concepts before moving on to the next level.

## React

As of right now, there are two ways create React components:

- Class Components
- Functional Components

Although the class components are still valid, this course will only focus on the functional components

You can read the official documentation here: [React Documentation](https://react.dev/learn) on how React works. 

The concept is really simple: you break it down into smaller components and then compose them together to create a complex UI. Think of it as a lego set, where each piece is a component. The hardest part is to make a well-designed component that can be glued together with other components to create the desired UI.

An example of a functional component is as follows:

```tsx
function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>My count is {count}</button>;
}
```

Let break down the code:

- `function MyComponent() { ... }` - This is the function that returns a React component. As you can see, the syntax is similar to the HTML structure, and it is called JSX. More about JSX can be found [here](https://react.dev/learn/writing-markup-with-jsx)
- The `useState` is the basic hook that is used to create interactive UI to the component. The return value is an array that contains the current state value and a function to update the state. For example, `const [count, setCount] = useState(0);` means that the `count` is the current state value, and `setCount` is the function to update the state. Whenever you trigger the `setCount` function, the component will re-render with the new state value, and then the UI will be updated accordingly.

To learn more about how React works, you can read the official documentation [here](https://react.dev/learn). This official documentation is the best place to learn React, and at the end of this internship, you should familiar with the basic concepts of React like components, props, state, and hooks.

## Comprehensive React Learning Resources

### Official Documentation
- [React Quick Start Guide](https://react.dev/learn)
- [React Tutorial: Tic-Tac-Toe Game](https://react.dev/learn/tutorial-tic-tac-toe)

### Online Courses
- [Udemy: React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

### Beginner Tutorials
- [React for Beginners by Tania Rascia](https://www.taniarascia.com/getting-started-with-react/)
- [Build with React Tutorial](https://buildwithreact.com/tutorial)

### Practice Platforms
- [CodeSandbox](https://codesandbox.io/)

### Additional Learning Resources
- [MDN JavaScript Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [javascript.info](https://javascript.info/)

### Community Support
- [React Community Forums](https://react.dev/community)
- [React Twitter @reactjs](https://twitter.com/reactjs)


## Exercises

To solidify your understanding of the concepts covered in this internship, you will complete a series of exercises. These exercises are designed to help you apply what you've learned about React and TypeScript in practical scenarios. Make sure to complete each exercise to gain hands-on experience.

You can use [CodeSandbox](https://codesandbox.io/) to practice these exercises. It allows you to quickly prototype and share your React projects, making it an excellent tool for experimenting with the concepts you learn.

### Exercise Links
- [Counter Exercise](./Exercises/CounterExercise.tsx)
- [Props Exercise](./Exercises/PropsExercise.tsx)
- [Todo List Exercise](./Exercises/TodoListExercise.tsx)
- [Shopping Cart Exercise](./Exercises/ShoppingCartExercise.tsx)
- [Data Fetch Exercise](./Exercises/DataFetchExercise.tsx)
- [Quiz App Exercise](./Exercises/QuizAppExercise.tsx)
- [Currency Converter Exercise](./Exercises/CurrencyConverterExercise.tsx)
- [Image Gallery Exercise](./Exercises/ImageGalleryExercise.tsx)
- [Stopwatch Exercise](./Exercises/StopwatchExercise.tsx)

Make sure to review the relevant documentation and resources as you work through these exercises. Good luck!