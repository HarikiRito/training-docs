# Git Exercise: Advanced Merging Techniques

## Exercise Objective
Master Git merging strategies, handle complex merge scenarios, and understand different merge workflows.

### Scenario
You're part of a team developing a web application with multiple ongoing features.

### Prerequisites
- Intermediate Git knowledge
- Understanding of branching
- Familiarity with command line

### Tasks

1. **Setup Repository**
   ```bash
   mkdir team-project
   cd team-project
   git init
   ```

2. **Create Base Branch**
   ```bash
   git checkout -b main
   echo "# Web Application Project" > README.md
   git add README.md
   git commit -m "Initialize project repository"
   ```

3. **Create Feature Branches**
   ```bash
   git checkout -b feature/user-authentication
   git checkout -b feature/dashboard
   git checkout -b feature/reporting
   ```

4. **Simulate Parallel Development**
   ```bash
   # On user-authentication branch
   echo "function login() {}" > auth.js   git add auth.js
   git commit -m "Add login function"

   # On dashboard branch
   echo "function createDashboard() {}" > dashboard.js
   git add dashboard.js
   git commit -m "Create dashboard layout"

   # On reporting branch
   echo "function generateReport() {}" > reports.js
   git add reports.js
   git commit -m "Add reporting functionality"
   ```

5. **Merge Strategies**
   ```bash
   # Fast-forward merge
   git checkout main
   git merge feature/user-authentication

   # Three-way merge
   git merge feature/dashboard

   # Squash merge
   git merge --squash feature/reporting
   ```

### Merge Types Explored
- Fast-forward merge
- Three-way merge
- Squash merge
- Rebase merge

### Learning Objectives
- Understand different merge strategies
- Handle complex merge scenarios
- Resolve potential merge conflicts
- Maintain clean project history

### Conflict Resolution
1. Identify merge conflicts
2. Edit conflicting files manually
3. Mark conflicts as resolved
4. Complete the merge

### Bonus Challenges
- Create intentional merge conflicts
- Use `git rebase` for linear history
- Implement a merge strategy for your team

### Evaluation Criteria
- Successful merges without conflicts
- Clean and understandable commit history
- Proper use of merge strategies
- Effective conflict resolution
