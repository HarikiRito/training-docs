# Git Exercise: Security Best Practices and .gitignore Mastery

## Exercise Objective
Learn how to secure your Git repositories, protect sensitive information, and effectively use `.gitignore` to manage file tracking.

### Scenario
You're working on a project that contains sensitive configuration files, API keys, and personal development environment files that should not be tracked by Git.

### Prerequisites
- Basic Git knowledge
- Text editor
- Git installed on your system

### Exercise 1: Creating a Comprehensive .gitignore

1. **Initialize a New Project**
```bash
mkdir secure-project
cd secure-project
git init
```

2. **Create a Robust .gitignore File**
```bash
touch .gitignore
```

3. **Add Common Ignore Patterns**
```gitignore
# Operating System Files
.DS_Store
Thumbs.db
*.swp

# IDE and Editor Files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Dependency Directories
node_modules/
vendor/
__pycache__/

# Environment and Configuration Files
.env
*.env
.env.local
.env.development
.env.production

# Build and Compiled Files
build/
dist/
*.log
*.pid

# Sensitive Credentials (NEVER commit these)
*.key
*.pem
id_rsa
id_ed25519

# Temporary Files
*.tmp
*.bak
*.swp

# Specific Project Exclusions
config/secrets.yml
```

### Exercise 2: Removing Sensitive Information

1. **Simulate Accidental Commit of Sensitive File**
```bash
# Create a file with sensitive information
echo "DATABASE_PASSWORD=mysecretpassword" > config.env
git add config.env
git commit -m "Add configuration file"
```

2. **Remove Sensitive File from Git History**
```bash
# Use BFG Repo-Cleaner or git filter-branch
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config.env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push to remote (use with caution!)
git push origin --force --all
```

### Exercise 3: Secure Credential Management

1. **Use Environment Variables**
```bash
# Create a .env.example file with placeholder values
cat > .env.example << EOL
DATABASE_URL=postgresql://username:password@localhost/database
API_KEY=your_api_key_here
SECRET_TOKEN=your_secret_token
EOL

# Ensure .env is in .gitignore
echo ".env" >> .gitignore
```

2. **Use Git Credential Helpers**
```bash
# Configure credential helper
git config --global credential.helper cache
# Or for more persistent storage
git config --global credential.helper store
```

### Exercise 4: Advanced .gitignore Techniques

1. **Global .gitignore**
```bash
# Create a global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Add global ignore patterns
cat > ~/.gitignore_global << EOL
# macOS
.DS_Store

# Windows
Thumbs.db

# IDEs
.vscode/
.idea/
EOL
```

2. **Selective File Tracking**
```bash
# Ignore everything in a directory
logs/*

# But track a specific file
!logs/.gitkeep

# Ignore all .log files
*.log

# But track important.log
!important.log
```

### Learning Objectives
- Understand the importance of `.gitignore`
- Learn to protect sensitive information
- Manage different types of files in Git
- Use advanced ignore patterns

### Security Best Practices
- Never commit passwords or API keys
- Use environment-specific configuration files
- Regularly audit your repository for sensitive data
- Use Git hooks for pre-commit checks
- Implement two-factor authentication
- Use SSH keys for repository access

### Common Pitfalls
- Forgetting to add sensitive files to `.gitignore`
- Committing credentials accidentally
- Not using environment variables
- Sharing repositories with sensitive information

### Bonus Challenges
- Set up a pre-commit hook to check for sensitive data
- Create a script to sanitize repository history
- Implement secure credential rotation