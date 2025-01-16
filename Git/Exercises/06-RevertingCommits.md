# Git Exercise: Reverting Commits and Undoing Changes

## Exercise Objective
Learn how to effectively revert commits, undo changes, and manage your Git history safely.

### Scenario
You're working on a project and need to undo recent changes or roll back to a previous state of your repository.

### Prerequisites
- Basic Git knowledge
- Git installed on your system
- A local Git repository to practice

### Exercise 1: Basic Commit Reversion

#### Scenario: Reverting the Last Commit
1. Create a sample project```bash
mkdir git-revert-practice
cd git-revert-practice
git init

# Create some files and make initial commits
echo "// First line of code" > main.js
git add main.js
git commit -m "Initial commit"

echo "// Some experimental code" >> main.js
git add main.js
git commit -m "Add experimental feature"```

2. Revert the Last Commit
```bash
# Option 1: Soft Reset (keeps changes in working directory)
git reset --soft HEAD~1

# Option 2: Hard Reset (completely removes last commit)
git reset --hard HEAD~1

# Option 3: Create a new commit that undoes the changes
git revert HEAD
```

### Exercise 2: Selective Commit Reversion

#### Scenario: Reverting a Specific Commit
1. Create Multiple Commits
```bash
echo "// Feature A implementation" > feature_a.js
git add feature_a.js
git commit -m "Add Feature A"

echo "// Feature B implementation" > feature_b.js
git add feature_b.js
git commit -m "Add Feature B"

echo "// Feature C implementation" > feature_c.js
git add feature_c.js
git commit -m "Add Feature C"
```

2. Revert a Specific Commit
```bash
# Find the commit hash you want to revert
git log

# Revert a specific commit by its hash
git revert [COMMIT_HASH]
```

### Exercise 3: Interactive Rebase for Commit Modification

1. Prepare a Series of Commits
```bash
git checkout -b rebase-practice

echo "// Initial project setup" > project.js
git add project.js
git commit -m "Initial project setup"

echo "// First feature implementation" >> project.js
git add project.js
git commit -m "Add first feature"

echo "// Second feature implementation" >> project.js
git add project.js
git commit -m "Add second feature"
```

2. Interactive Rebase
```bash
# Start interactive rebase for last 3 commits
git rebase -i HEAD~3
```

### Learning Objectives
- Understand different methods of reverting commits
- Learn to use `git reset` and `git revert`
- Practice interactive rebasing
- Manage Git history safely

### Common Pitfalls
- Avoid using `reset` on shared branches
- Always communicate with team before major history changes
- Use `revert` for public branches
- Use `reset` for local, unpublished work

### Best Practices
- Always create a backup branch before complex history modifications
- Use descriptive commit messages
- Understand the difference between `reset` and `revert`

### Bonus Challenge
- Experiment with `git reflog` to recover "lost" commits
- Practice undoing commits in a collaborative scenario

## Recommended Tools
- Git CLI
- GitHub Desktop
- GitKraken 