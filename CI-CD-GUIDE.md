# 🚀 CI/CD Pipeline Guide

## Overview
This project uses GitHub Actions for automated testing, building, and deployment to GitHub Pages.

## Pipeline Structure

### 🧪 Job 1: Test & Code Quality
- **Triggers**: On every push and pull request
- **Node.js Version**: 18.x
- **Steps**:
  1. Install dependencies with `npm ci`
  2. Run ESLint for code quality
  3. Execute tests with coverage
  4. Upload coverage to Codecov
  5. Test build process

### 🚀 Job 2: Build & Deploy
- **Triggers**: Only on push to main/master branch
- **Depends on**: Test job must pass
- **Steps**:
  1. Build production version
  2. Deploy to GitHub Pages

## Local Development Commands

```bash
# Development
npm start                 # Start development server
npm test                 # Run tests in watch mode
npm run test:ci          # Run tests once with coverage
npm run test:coverage    # Run tests and open coverage report

# Code Quality
npm run lint             # Check code style
npm run lint:fix         # Fix code style issues

# Building
npm run build            # Production build
npm run build:local      # Build without source maps
npm run analyze          # Analyze bundle size

# Deployment
npm run deploy           # Manual deploy to GitHub Pages
```

## CI/CD Features

### ✅ Automated Testing
- Unit tests run on every commit
- Code coverage reporting
- Test results visible in GitHub Actions

### 🔍 Code Quality
- ESLint checks for code style and errors
- Prevents deployment if quality checks fail
- Automated code formatting validation

### 🚀 Automated Deployment
- Deploys only after tests pass
- Only deploys from main/master branch
- Uses GitHub Pages for hosting

### 📊 Monitoring & Reporting
- Build status badges
- Test coverage reports
- Deployment status tracking

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to repository Settings → Pages
2. Select "GitHub Actions" as source
3. Save settings

### 2. Branch Protection (Recommended)
1. Go to Settings → Branches
2. Add rule for main/master branch
3. Enable "Require status checks to pass"
4. Select "Test & Code Quality" check

### 3. Environment Variables (Optional)
Add in repository Settings → Secrets:
- `CODECOV_TOKEN` for coverage reports
- Custom environment variables as needed

## Workflow Triggers

### Automatic Triggers
- **Push to main/master**: Full CI/CD pipeline
- **Pull Requests**: Tests and quality checks only
- **Manual**: Can be triggered from Actions tab

### Branch Strategy
- `main/master`: Production branch (auto-deploy)
- Feature branches: Create PR → Tests run → Merge after approval

## Monitoring Your Pipeline

### GitHub Actions Tab
- View all workflow runs
- Debug failed builds
- Monitor deployment status

### Status Checks
- All PRs show test results
- Prevents merging broken code
- Clear feedback on failures

## Troubleshooting

### Common Issues
1. **Tests failing**: Check test logs in Actions tab
2. **Build errors**: Verify dependencies and build script
3. **Deployment fails**: Check GitHub Pages settings
4. **Lint errors**: Run `npm run lint:fix` locally

### Debug Commands
```bash
# Run the same commands as CI locally
npm ci
npm run lint
npm run test:ci
npm run build
```

## Best Practices

### Code Quality
- Write tests for new components
- Fix lint errors before committing
- Keep test coverage above 80%

### Git Workflow
- Create feature branches
- Make small, focused commits
- Write descriptive commit messages
- Use pull requests for code review

### Performance
- Monitor bundle size with `npm run analyze`
- Optimize images and assets
- Use code splitting for large apps

## Pipeline Status

Add these badges to your main README:

```markdown
![CI/CD Status](https://github.com/yourusername/portfolio/workflows/CI%2FCD%20Pipeline%20-%20Portfolio/badge.svg)
![Deployment Status](https://github.com/yourusername/portfolio/deployments/activity_log?environment=github-pages)
```

## Next Steps

### Enhancements
- [ ] Add visual regression testing
- [ ] Implement semantic versioning
- [ ] Add performance monitoring
- [ ] Set up staging environment
- [ ] Add security scanning
- [ ] Implement automated dependency updates

### Advanced Features
- [ ] Multi-environment deployments
- [ ] Blue-green deployments
- [ ] Automated rollbacks
- [ ] Performance budgets
- [ ] E2E testing with Playwright/Cypress
