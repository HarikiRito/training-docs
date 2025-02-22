# React Fresher Level

Welcome to the React Fresher level! This document will guide you through the essential skills and project requirements to become a proficient React developer.

## Project Overview

This project will be a comprehensive learning experience using:
- React
- Vite
- Remix
- TailwindCSS
- Shadcn UI
- Storybook

## Project Goals

The primary objectives of this level are to:
- Master basic React and TypeScript concepts
- Develop clean, maintainable code
- Create reusable components
- Build responsive web applications
- Work effectively in a team environment

## Technical Requirements

### Technology Stack
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Routing**: Remix
- **Styling**: 
  - TailwindCSS
  - Shadcn UI
- **Component Documentation**: Storybook

### Code Quality Standards
1. **Linting**
   - All lints must pass
   - Zero TypeScript errors
   - Maximum file length: 400 lines

2. **Naming Conventions**
   - Use clear, descriptive names
   - Follow React and TypeScript naming best practices
   - Use PascalCase for components
   - Use camelCase for functions and variables

### Responsive Design
- Ensure full responsiveness for:
  - Desktop
  - Tablet
  - Mobile devices

## Component Development Guidelines

### Component Creation
1. Create small, focused components
2. Use TypeScript for type safety
3. Implement prop types and interfaces
4. Follow single responsibility principle

### Example Component Structure
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function Button({ 
  label, 
  onClick, 
}: ButtonProps) {
  return (
    <button 
      className="bg-blue-500 text-white p-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

## Storybook Integration

### Component Story Requirements
- Create a story for each component
- Demonstrate different states and variants
- Include responsive design variations

## Team Collaboration

### Roles
- **Project Leader**: 
  - Overall project management
  - Technical guidance
  - Code review
  - Mentoring team members

### Leadership Opportunities
- Anyone can become a project leader
- Leadership requires:
  - Technical expertise
  - Communication skills
  - Problem-solving abilities
  - Willingness to help others

## Performance Evaluation Criteria

1. Code Quality
   - Adherence to coding standards
   - Clean, readable code
   - Efficient implementations

2. Technical Skills
   - Proficiency with React and TypeScript
   - Understanding of responsive design
   - Component design skills

3. Teamwork
   - Collaboration
   - Communication
   - Helping team members

## Learning Resources

### Recommended Tutorials
- [React Official Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Remix Documentation](https://remix.run/docs)
- [Storybook Tutorials](https://storybook.js.org/tutorials/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)

### Practice Platforms
- [Frontend Mentor Challenges](https://www.frontendmentor.io/)
- [Codecademy React Courses](https://www.codecademy.com/learn/react-101)



## Pull Request (PR) Submission Guidelines

### PR Submission Requirements
1. **Mandatory Code Review**
   - All code changes must be submitted via a Pull Request (PR)
   - PRs are required for code review and collaboration
   - Only approved and reviewed code will be merged into the main branch

2. **PR Description**
   - Provide a clear, detailed description of the feature or changes
   - For frontend work, include a screenshot of the UI changes
   - Explain the purpose and functionality of your implementation

3. **PR Scope**
   - Focus on a single feature or improvement per PR
   - Limit the number of files changed to maintain clarity
   - Avoid large, complex PRs that are difficult to review

4. **Best Practices**
   - Keep PRs small and focused
   - Ensure all tests and linters pass before submission
   - Be open to feedback and suggested improvements
   - Respond promptly to review comments

### Example PR Template
```markdown
## Description
[Provide a brief overview of the feature/fix]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Screenshots (if applicable)
[Insert UI screenshots or relevant images]

## Checklist
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have added tests that prove my fix/feature works
- [ ] My changes generate no new warnings
```

## Practice Project

Using this website as a reference, create a similar website using the technology stack above.

Metronic: https://keenthemes.com/metronic/tailwind/react/demo1
Materialize: https://demos.pixinvent.com/materialize-html-admin-template/html/vertical-menu-template/app-ecommerce-dashboard.html


