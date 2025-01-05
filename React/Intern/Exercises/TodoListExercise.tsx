import React, { useState } from 'react';

/**
 * Exercise: Todo List Management
 * 
 * Task: Create a todo list application with full CRUD functionality
 * 
 * Requirements:
 * 1. Add new todo items
 *    - Input field for new todo
 *    - Add button to create todo
 * 
 * 2. Display todo list
 *    - Show all todos
 *    - Each todo should have:
 *      - Text
 *      - Completion status
 * 
 * 3. Implement todo operations:
 *    - Mark todo as complete/incomplete
 *    - Delete todo
 *    - Edit existing todo
 * 
 * Hints:
 * - Use useState for managing todo state
 * - Create interfaces for Todo type
 * - Use map for rendering todo list
 * - Implement conditional rendering
 */

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoListExercise() {
  // TODO: Implement state for todos

  // TODO: Implement function to add new todo

  // TODO: Implement function to toggle todo completion

  // TODO: Implement function to delete todo

  // TODO: Implement function to edit todo

  return (
    <div>
      {/* TODO: Create input for new todos */}
      {/* TODO: Render list of todos with action buttons */}
    </div>
  );
}

export default TodoListExercise; 