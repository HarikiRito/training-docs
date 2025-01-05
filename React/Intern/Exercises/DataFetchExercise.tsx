import React, { useState, useEffect } from 'react';

/**
 * Exercise: Data Fetching with React Hooks
 * 
 * Task: Create a component that fetches and displays user data from an API
 * 
 * Requirements:
 * 1. Use useState to manage the following states:
 *    - users (array of user data)
 *    - loading (boolean)
 *    - error (string or null)
 * 
 * 2. Use useEffect to fetch data from: 
 *    https://jsonplaceholder.typicode.com/users
 * 
 * 3. Implement error handling and loading states
 * 
 * 4. Render the fetched users with the following information:
 *    - Name
 *    - Email
 *    - Company Name
 * 
 * Hints:
 * - Use fetch or axios for API calls
 * - Handle async operations with try/catch
 * - Conditionally render loading and error states
 * - Use an empty dependency array to fetch data only once
 * - Consider using TypeScript interfaces for type safety
 */

// TODO: Define User interface

function DataFetchExercise() {
  // TODO: Implement state management with useState

  // TODO: Implement useEffect for data fetching

  // TODO: Implement conditional rendering for loading and error states

  return (
    <div>
      {/* TODO: Render fetched user data */}
    </div>
  );
}

export default DataFetchExercise;