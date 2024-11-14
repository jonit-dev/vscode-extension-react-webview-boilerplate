# Code Quality Workflow

**File:** `code-quality.yml`

**Triggers:**
- Pushes to the `main` branch.
- Pull requests to the `main` branch.

**Jobs:**
- **Build:**
  - Checks out the code.
  - Sets up Node.js.
  - Installs dependencies.
  - Runs TypeScript to check for type errors.
  - Runs ESLint to check for code style issues.
  - Runs Prettier to check for code formatting issues.
