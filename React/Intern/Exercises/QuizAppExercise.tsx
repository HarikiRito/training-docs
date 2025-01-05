import React, { useState } from 'react';

/**
 * Exercise: Quiz Application
 * 
 * Task: Create a simple multiple-choice quiz application
 * 
 * Requirements:
 * 1. Create a set of quiz questions with:
 *    - Question text
 *    - Multiple choice options
 *    - Correct answer
 * 
 * 2. Implement quiz functionality:
 *    - Display one question at a time
 *    - Allow user to select an answer
 *    - Track score
 *    - Show final score at the end
 * 
 * 3. Add basic features:
 *    - Next question button
 *    - Restart quiz option
 *    - Highlight correct/incorrect answers
 * 
 * Hints:
 * - Use useState for managing quiz state
 * - Create an interface for Question type
 * - Use array methods for question management
 * - Implement conditional rendering
 */

interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

function QuizAppExercise() {
  // TODO: Create initial questions array

  // TODO: Create state for:
  // - Current question index
  // - User's selected answer
  // - Score
  // - Quiz completion status

  // TODO: Implement function to handle answer selection

  // TODO: Implement function to move to next question

  // TODO: Implement function to restart quiz

  return (
    <div>
      {/* TODO: Conditionally render current question */}
      {/* TODO: Create answer option buttons */}
      {/* TODO: Show score and restart button when quiz is complete */}
    </div>
  );
}

export default QuizAppExercise; 