# Git Exercise: Mastering Git Rebase

## Exercise Objective
Learn advanced Git rebasing techniques, understand interactive rebasing, and maintain a clean project history.

### Scenario
You're working on an open-source project with multiple contributors and need to clean up your commit history.

### Prerequisites
- Advanced Git knowledge
- Understanding of branching and merging
- Comfortable with command line

### Tasks

1. **Initialize Repository**
   ```bash
   mkdir open-source-project
   cd open-source-project
   git init
   ```

2. **Create Initial Commits**
   ```bash
   echo "# Project Documentation" > README.md
   git add README.md
   git commit -m "Initial project setup"

   echo "## Installation Guide" >> README.md
   git add README.md
   git commit -m "Add basic installation instructions"

   echo "### System Requirements" >> README.md
   git add README.md
   git commit -m "Document system requirements"
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/documentation-update
   ```

4. **Make Multiple Commits**
   ```bash
   echo "#### Supported Platforms" >> README.md
   git add README.md
   git commit -m "Add supported platforms"

   echo "##### Windows Setup" >> README.md
   git add README.md
   git commit -m "Add Windows setup instructions"

   echo "###### Troubleshooting" >> README.md
   git add README.md
   git commit -m "Add troubleshooting section"
   ```

5. **Interactive Rebase**
   ```bash
   # Squash last 3 commits
   git rebase -i HEAD~3
   ```

   In the interactive rebase editor:
   - Change first commit to `pick`
   - Change subsequent commits to `squash`
   - Save and close the editor
   - Edit the commit message to summarize changes

6. **Rebase onto Main Branch**
   ```bash
   git checkout main
   git rebase feature/documentation-update
   ```

### Rebase Techniques Explored
- Standard rebasing
- Interactive rebasing
- Squashing commits
- Reordering commits
- Editing commit messages

### Learning Objectives
- Understand the purpose of rebasing
- Clean up messy commit histories
- Maintain a linear project history
- Prepare branches for clean merging

### Common Rebase Scenarios
- Cleaning up local commits before pushing
- Incorporating upstream changes
- Preparing feature branches for merge

### Bonus Challenges
- Rebase with conflicts
- Split a complex commit into multiple commits
- Use `git commit --amend` for last commit modifications

### Evaluation Criteria
- Successful interactive rebase
- Clean, meaningful commit history
- Proper commit message editing
- Understanding of rebase workflow

## Solution Verification
```bash
# View commit history
git log --oneline

# Verify branch state
git status
```

## Advanced Techniques
- Use `git rebase --continue` after resolving conflicts
- Configure default editor for interactive rebase
- Understand when to use rebase vs. merge

## Recommended Tools
- GitKraken
- GitHub Desktop
- Visual Studio Code Git extensions

## Warnings and Best Practices
- Never rebase commits that have been pushed to shared repositories
- Always communicate with team before complex rebases
- Use rebase to clean local history before collaboration