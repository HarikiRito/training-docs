# Git Exercise: Basic Branching Mastery

## Exercise Objective
Learn the fundamentals of Git branching and how to effectively manage different feature branches.

### Scenario
You're a developer working on a personal blog project. You want to add new features without disrupting the main codebase.

### Prerequisites
- Basic Git knowledge
- Terminal/Command line access
- Git installed on your system

### Tasks

1. **Initialize Repository**
   ```bash
   mkdir personal-blog
   cd personal-blog
   git init
   ```

2. **Create Initial Blog Post**
   ```bash
   echo "# My First Blog Post" > blog-post.md
   git add blog-post.md
   git commit -m "Initial blog post creation"
   ```

3. **Create Feature Branches**
   ```bash
   # Create branches for different features
   git checkout -b feature/dark-mode
   git checkout -b feature/comments-section
   git checkout -b feature/responsive-design
   ```

4. **List and Verify Branches**
   ```bash
   git branch  # Show all local branches
   git branch -r  # Show remote branches
   ```

5. **Switch Between Branches**
   ```bash
   git checkout main
   git checkout feature/dark-mode
   ```

### Learning Objectives
- Understand branch creation
- Navigate between branches
- Manage multiple feature branches
- Isolate development work

### Common Pitfalls
- Avoid working directly on `main`
- Always create descriptive branch names
- Keep branches focused on single features

### Best Practices
- Use `git checkout -b` for creating and switching branches
- Delete merged branches with `git branch -d`
- Use meaningful branch names

### Bonus Challenges
- Create a branch from a specific commit
- Rename an existing branch
- Push branches to a remote repository

### Evaluation Criteria
- Correct branch creation
- Proper branch naming
- Ability to switch between branches
- Understanding of branch isolation

## Solution Verification
```bash
# Verify branch count and names
git branch -a

# Check current branch
git rev-parse --abbrev-ref HEAD
```

## Recommended Tools
- Git Bash
- GitHub Desktop
- Visual Studio Code with Git integration