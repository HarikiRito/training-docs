# Git Exercise: Mastering Git Stash

## Exercise Objective
Learn advanced Git stashing techniques to manage work-in-progress changes efficiently and switch contexts seamlessly.

### Scenario
You're a developer working on multiple features simultaneously and need to switch between tasks quickly without losing work.

### Prerequisites
- Intermediate Git knowledge
- Understanding of branching
- Comfortable with command line

### Tasks

1. **Initialize Repository**
   ```bash
   mkdir multi-project
   cd multi-project
   git init
   ```

2. **Create Initial Project**
   ```bash
   echo "# Project Management Tool" > README.md
   git add README.md
   git commit -m "Initialize project"
   ```

3. **Start Feature Development**
   ```bash
   git checkout -b feature/user-dashboard
   echo "## User Dashboard Module" >> README.md
   git add README.md
   git commit -m "Add user dashboard initial structure"
   ```

4. **Simulate Interrupted Work**
   ```bash
   # Modify files with uncommitted changes
   echo "### Dashboard Layout" >> README.md
   echo "function createDashboard() {" > dashboard.js
   echo "  // Dashboard layout code" >> dashboard.js
   echo "}" >> dashboard.js
   ```

5. **Stash Changes**
   ```bash
   # Stash current changes
   git stash save "WIP: Dashboard development"

   # List all stashes
   git stash list
   ```

6. **Switch Context**
   ```bash
   # Switch to another branch for urgent fix
   git checkout -b hotfix/critical-bug
   echo "## Critical Bug Fix" >> README.md
   git add README.md
   git commit -m "Address critical system bug"
   ```

7. **Apply Stashed Changes**
   ```bash
   # Return to dashboard feature
   git checkout feature/user-dashboard

   # Apply most recent stash
   git stash apply

   # Or pop the stash (apply and remove)
   git stash pop
   ```

8. **Advanced Stashing**
   ```bash
   # Create multiple stashes
   git stash save "Dashboard layout"
   git stash save "Dashboard functionality"

   # Apply specific stash
   git stash apply stash@{1}
   ```

### Stashing Techniques Explored
- Basic stashing
- Named stashes
- Stash listing
- Applying and popping stashes
- Managing multiple stashes

### Learning Objectives
- Understand Git stash workflow
- Quickly switch between tasks
- Preserve work-in-progress changes
- Manage complex development scenarios

### Common Stashing Scenarios
- Switching branches with uncommitted changes
- Pausing current work for urgent fixes
- Experimenting without committing
- Cleaning working directory

### Bonus Challenges
- Create a stash with untracked files
- Use `git stash branch` to create a branch from a stash
- Explore `git stash drop` and `git stash clear`

### Evaluation Criteria
- Successful stash creation
- Proper stash management
- Ability to apply and pop stashes
- Understanding of stash workflow