# CI/CD Demo Application

A demonstration of Continuous Integration and Continuous Deployment using GitHub Actions.

## Project Structure

```
my-ci-cd-demo/
├── .github/workflows/         # GitHub Actions workflows
├── src/backend/               # Backend code (Node.js/Express)
├── src/frontend/              # Frontend code (HTML/CSS/JS)
├── tests/                     # Automated tests
├── package.json
└── README.md
```

## Development Workflow

1. **Branch Strategy**
   - `main` - Production branch
   - `develop` - Development branch
   - Feature branches - Created from `develop`

2. **Development Process**
   - Create feature branch from `develop`
   - Make changes and commit
   - Create pull request to `develop`
   - After review and tests pass, merge to `develop`
   - When ready for production, create PR from `develop` to `main`

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Run Tests**
   ```bash
   npm test
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## CI/CD Pipeline

The project uses GitHub Actions for CI/CD with two workflows:

1. **Development Workflow** (`.github/workflows/development.yml`)
   - Triggers on push/PR to `develop`
   - Runs tests
   - Builds the project
   - Deploys to development environment

2. **Production Workflow** (`.github/workflows/production.yml`)
   - Triggers on push/PR to `main`
   - Runs tests
   - Builds the project
   - Deploys to production environment

## Environment Variables

Create a `.env` file in the root directory with:
```
PORT=3000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 