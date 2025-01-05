# Git Exercise: Advanced Collaboration Workflow with HTML/CSS Project

## Exercise Objective
Master advanced Git collaboration techniques through a real-world HTML/CSS web project, focusing on pull request workflows and team collaboration.

### Scenario
You're part of a team developing a portfolio website with multiple contributors, each responsible for different design and functionality aspects.

### Prerequisites
- Intermediate Git and GitHub knowledge
- Basic HTML and CSS skills
- GitHub account
- Code editor (VS Code recommended)

### Project Setup

1. **Repository Initialization**
   ```bash
   mkdir portfolio-website
   cd portfolio-website
   git init
   echo "# Team Portfolio Website" > README.md
   
   # Create initial project structure
   mkdir css
   mkdir pages
   touch index.html
   touch css/styles.css
   ```

2. **Initial Commit**
   ```bash
   git add .
   git commit -m "Initial project setup with basic structure"
   ```

### Pull Request Workflow Exercises

#### Exercise 1: Feature Branch Creation
1. **Create Feature Branches**
   ```bash
   # Create branches for different website sections
   git checkout -b feature/header-design
   git checkout -b feature/about-section
   git checkout -b feature/projects-gallery
   ```

2. **Implement Header Design**
   ```bash
   # On header-design branch
   cat > index.html << EOL
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Team Portfolio</title>
       <link rel="stylesheet" href="css/styles.css">
   </head>
   <body>
       <header>
           <nav>
               <ul>
                   <li><a href="#home">Home</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#projects">Projects</a></li>
               </ul>
           </nav>
       </header>
   </body>
   </html>
   EOL

   cat > css/styles.css << EOL
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
   }
   
   header {
       background-color: #333;
       color: white;
       padding: 1rem;
   }
   
   nav ul {
       list-style: none;
       display: flex;
       justify-content: center;
   }
   
   nav ul li {
       margin: 0 15px;
   }
   
   nav ul li a {
       color: white;
       text-decoration: none;
   }
   EOL

   git add index.html css/styles.css
   git commit -m "Add initial header design with responsive navigation"
   ```

3. **Push Feature Branch**
   ```bash
   git push -u origin feature/header-design
   ```

#### Exercise 2: Pull Request Creation
1. **Create Pull Request on GitHub**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Select `feature/header-design` as compare branch
   - Write detailed PR description:
     ```markdown
     ## Header Design Implementation

     ### Changes
     - Added responsive navigation menu
     - Implemented basic header styling
     - Created semantic HTML structure

     ### Design Considerations
     - Used flexbox for navigation layout
     - Implemented mobile-friendly design
     - Chose neutral color scheme

     ### Checklist
     - [x] Responsive navigation
     - [ ] Add hover effects
     - [ ] Implement mobile menu toggle
     ```

2. **Code Review Simulation**
   Imagine reviewer comments:
   - Add hover effects to navigation links
   - Improve color contrast
   - Make navigation more accessible

3. **Address Review Comments**
   ```bash
   # Update CSS with reviewer suggestions
   cat > css/styles.css << EOL
   nav ul li a {
       color: white;
       text-decoration: none;
       transition: color 0.3s ease;
   }

   nav ul li a:hover {
       color: #00bfff;
   }

   nav ul li a:focus {
       outline: 2px solid white;
   }
   EOL

   git add css/styles.css
   git commit --amend -m "Improve header design: Add hover and focus states"
   ```

#### Exercise 3: Collaborative Workflow
1. **Merge Pull Request**
   - On GitHub, review and merge PR
   - Use "Squash and Merge" to maintain clean history

2. **Sync Local Repository**
   ```bash
   git checkout main
   git pull origin main
   ```

### Advanced PR Collaboration Techniques

#### Handling Merge Conflicts
1. **Simulate Conflicting Changes**
   ```bash
   # Create conflicting branch
   git checkout -b feature/about-section
   
   # Add about section content
   cat >> index.html << EOL
       <section id="about">
           <h2>About Our Team</h2>
           <p>We are a group of passionate developers...</p>
       </section>
   </body>
   </html>
   EOL

   git add index.html
   git commit -m "Add about section"
   git push -u origin feature/about-section
   ```

2. **Resolve Merge Conflicts**
   - Manually edit conflicting files
   - Use `git mergetool` for visual conflict resolution
   - Commit resolved changes

### Learning Objectives
- Master pull request creation workflow
- Practice collaborative code review
- Handle merge conflicts
- Maintain clean project history

### Evaluation Criteria
- Successful PR creation
- Addressing review comments
- Clean and meaningful commits
- Effective conflict resolution

### Bonus Challenges
- Implement GitHub Actions for CI/CD
- Add branch protection rules
- Create a CONTRIBUTING.md guide
- Set up semantic versioning

## Recommended Tools
- GitHub Desktop
- VS Code with Git extensions
- GitHub CLI
- Continuous Integration services

## Best Practices
- Communicate clearly in PR descriptions
- Keep commits small and focused
- Review code thoroughly
- Respect team's coding standards