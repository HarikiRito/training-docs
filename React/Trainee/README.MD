# React Trainee Level

Welcome to the React Trainee level! This document will guide you through advanced React and TypeScript concepts that will help you become a more proficient developer.

## React Development Best Practices

### Component Structure and Maintainability

Creating readable and maintainable React components is crucial for long-term project success. Here are key principles:

1. **Component Organization**
   - Keep components small and focused
   - Use meaningful and descriptive component names
   - Separate concerns: UI rendering, state management, and business logic

2. **Component Structure Example**
```tsx
// Good component structure
interface UserProfileProps {
  user: User;
  onEdit: (user: User) => void;
}

function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <div className="user-profile">
      <UserDetails user={user} />
      <UserActions onEdit={() => onEdit(user)} />
    </div>
  );
}
```

**Learning Resources for Component Structure:**
- 🎓 [Dev.to: React Best Practices for Front-End Developers](https://dev.to/krentrox/react-best-practices-for-front-end-developers-4nhl)
  - Detailed guide on component organization
  - Examples of reusable component design

### Responsive Web Design

Understanding responsive design is critical for modern web development:

1. **Responsive Design Principles**
   - Use flexible layouts (flexbox, grid)
   - Implement media queries
   - Create mobile-first designs

2. **CSS Frameworks**
   - **TailwindCSS**: Utility-first CSS framework
     ```tsx
     <div className="w-full md:w-1/2 lg:w-1/3 p-4 responsive-container">
       {/* Responsive element */}
     </div>
     ```
   - **Emotion/Styled-Components**: CSS-in-JS solutions
     ```tsx
     const ResponsiveCard = styled.div`
       width: 100%;
       @media (min-width: 768px) {
         width: 50%;
       }
     `;
     ```

**Learning Resources for Responsive Design:**
- 🌐 [UXPin: React Best Practices for Responsive Design](https://www.uxpin.com/studio/blog/react-best-practices/)
  - Insights on creating scalable component hierarchies
  - Strategies for managing complex UI designs
- 📹 Online Courses:
  - [Udacity: Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
  - [Coursera: Responsive Website Tutorials](https://www.coursera.org/courses?query=responsive%20web%20design)
- 🛠️ Practice Platforms:
  - [Responsive Web Design Challenges on Codepen](https://codepen.io/challenges/responsive-web-design/)

### State Management with Hooks

Deep dive into `useState` and `useEffect`:

1. **useState Best Practices**
```tsx
// Correct way to manage complex state
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  function addTodo(text: string) {
    setTodos(function(prevTodos) {
      return [
        ...prevTodos, 
        { id: Date.now(), text, completed: false }
      ];
    });
  }
}
```

2. **useEffect Patterns**
```tsx
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array for initial load
}
```

**Learning Resources for State Management:**
- 🎥 Video Tutorials:
  - [Egghead.io: Advanced React Hooks](https://egghead.io/courses/advanced-react-hooks)
  - [Kent C. Dodds' Epic React Hooks Course](https://epicreact.dev/learn)

### Single Responsibility Principle

Breaking down components and functions:

```tsx
// Instead of a monolithic component
function ComplexComponent() {
  // Break into smaller, focused components
  return (
    <>
      <UserProfile />
      <UserSettings />
      <UserActivity />
    </>
  );
}

// Separate utility functions
function formatDate(date: Date): string {
  // Date formatting logic
}

function validateEmail(email: string): boolean {
  // Email validation logic
}
```

**Learning Resources for Single Responsibility:**
- 🎓 SOLID Principles Courses:
  - [Pluralsight: SOLID Principles of Object-Oriented Design](https://www.pluralsight.com/courses/solid-principles-object-oriented-design)
  - [Clean Code Fundamentals on Udemy](https://www.udemy.com/topic/clean-code/)

## Additional Performance and Best Practice Resources

- 🚀 Performance Optimization:
  - [React Performance Optimization Techniques](https://dev.to/krentrox/react-best-practices-for-front-end-developers-4nhl)
  - Use `React.memo` to prevent unnecessary re-renders

## TypeScript Advanced Concepts

### Mastering Basic Types

1. **Primitive Types**
```typescript
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
```

2. **Complex Types**
```typescript
// Union Types
type Status = 'pending' | 'approved' | 'rejected';

// Intersection Types
type Employee = { id: number } & { name: string };
```

### Generics

1. **Generic Functions**
```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

2. **Generic Interfaces**
```typescript
interface Repository<T> {
  findById(id: number): T | undefined;
  create(item: T): void;
}

interface User {
  id: number;
  name: string;
}

const userRepository: Repository<User> = {
  findById: (id) => { /* implementation */ },
  create: (user) => { /* implementation */ }
};
```

### Separate utility functions
```typescript
function formatDate(date: Date): string {
  // Date formatting logic
}

function validateEmail(email: string): boolean {
  // Email validation logic
}
```

## Learning Resources

### Official Documentation
- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Recommended Courses
- [Epic React by Kent C. Dodds](https://epicreact.dev/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Practice Platforms
- [TypeScript Playground](https://www.typescriptlang.org/play)

## Exercises and Projects

To solidify your understanding, work on progressively complex projects that incorporate:
- Responsive design
- State management
- Generic type usage
- Component composition
- Performance optimization

## What Needs to Pass This Level

- Demonstrate proficiency in React component design
- Show understanding of responsive web design
- Implement at least one project using advanced TypeScript generics
- Create a responsive application using a CSS framework
- Showcase proper state management with hooks
- Apply single responsibility principle in code organization

Good luck on your learning journey!

## Final test

- Create a TODO app that have the following features:
  - Add a new todo
  - Delete a todo
  - Mark a todo as completed
  - Show all todos
  - Show active todos
  - Show completed todos
  - Reorder todos by drag and drop

The web app must be responsive on all devices, including mobile, tablet, and desktop. The web app must be decent looking, not ugly. This will be review by other members of the team and the leader. You can follow this example for the UI: https://todomvc.com/examples/react/dist/

Bonus points:
- Add dark mode and light mode
- Animation when a todo is added, deleted or completed
- Beautiful UI/UX
- Using a CSS framework
- Good folder structure and file naming
