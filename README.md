# Coding Assignment 13: UC Component Library — Build Checks

A React component library built with TypeScript, Styled Components, and Storybook.
This assignment extends Assignment 12 by adding code quality checks to the build process:
Prettier, ESLint, and Jest are enforced via Husky pre-commit hooks and GitHub Actions CI/CD.

---

## Environment

| Tool             | Version      |
|------------------|--------------|
| Node.js (local)  | v24.12.0     |
| npm              | v11.6.2      |
| Node.js (Docker) | v20 (alpine) |
| Docker Desktop   | 29.1.3       |

---

## Code Quality Setup

### Prettier

Prettier is used for consistent code formatting across all TypeScript and TSX files.

Install:
```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Configuration is defined in `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### ESLint

ESLint is configured in `package.json` under `"eslintConfig"` to extend `react-app` and integrate with Prettier so that formatting violations are reported as lint errors.

### Husky + lint-staged

Husky runs pre-commit hooks automatically before every `git commit`.
lint-staged ensures only staged files are checked.

Install:
```
npm install --save-dev husky lint-staged
npx husky init
```

`.husky/pre-commit` runs:
1. `npx lint-staged` — runs Prettier and ESLint on staged files
2. `CI=true npm test -- --watchAll=false --passWithNoTests` — runs all Jest tests

If any check fails, the commit is blocked.

`lint-staged` configuration in `package.json`:
```json
"lint-staged": {
  "src/**/*.{ts,tsx}": [
    "prettier --write",
    "eslint --fix"
  ]
}
```

### GitHub Actions CI

A CI workflow is defined in `.github/workflows/ci.yml`.
On every push or pull request to `main`, GitHub Actions runs:
1. Prettier check
2. ESLint
3. Jest tests

If any step fails, the build is marked as failed and the developer is notified.

---

## Project Structure
```
jueun_yang_ui_garden/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── pre-commit
├── .storybook/
├── public/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Dropdown/
│   │   ├── HeroImage/
│   │   ├── Img/
│   │   ├── Label/
│   │   ├── RadioButton/
│   │   ├── Table/
│   │   ├── TableCell/
│   │   ├── TableFooter/
│   │   ├── TableHeader/
│   │   ├── TableRow/
│   │   └── Text/
│   └── App.tsx
├── .prettierrc
├── Dockerfile
└── README.md
```

---

## Available Scripts

### Start development server
```
npm start
```
Runs the app at `http://localhost:3000`

### Run Storybook
```
npm run storybook
```
Runs Storybook at `http://localhost:6006`

### Run tests
```
npm test
```
Runs all 27 Jest tests across 14 test suites.

### Build production
```
npm run build
```
Creates an optimized production build in the `/build` folder.

---

## Docker Setup

The Dockerfile uses a multi-stage build:

1. **Build stage** — `node:20-alpine` installs dependencies and builds the React app.
2. **Serve stage** — `nginx:alpine` serves the static production build on port 80 inside the container.

The working directory inside the container is `/yang_jueun_ui_garden_build_checks`.

### Prerequisites

Make sure Docker Desktop is installed and running.
- Download: https://www.docker.com/products/docker-desktop/

---

## Running on localhost:8018

### Step 1. Clone the repository
```
git clone https://github.com/jnllyng/Web-Component-Library.git
cd Web-Component-Library/jueun_yang_ui_garden
```

### Step 2. Build the Docker image
```
docker build -t yang_jueun_coding_assignment13 .
```

### Step 3. Run the container
```
docker run --name yang_jueun_coding_assignment13 -p 8018:80 yang_jueun_coding_assignment13
```

### Step 4. Open in browser
```
http://localhost:8018
```

### Managing the container

Stop the container:
```
docker stop yang_jueun_coding_assignment13
```

Restart the container:
```
docker start yang_jueun_coding_assignment13
```

Rebuild after code changes:
```
docker stop yang_jueun_coding_assignment13
docker rm yang_jueun_coding_assignment13
docker build -t yang_jueun_coding_assignment13 .
docker run --name yang_jueun_coding_assignment13 -p 8018:80 yang_jueun_coding_assignment13
```

---

## Components

| Component   | Description                                    |
|-------------|------------------------------------------------|
| Button      | Clickable button with label and disabled state |
| Label       | Inline label with disabled state               |
| Text        | Styled paragraph text                          |
| Dropdown    | Select input with configurable options         |
| RadioButton | Radio input with label and disabled state      |
| Img         | Styled image with disabled state               |
| HeroImage   | Full-width banner image with title overlay     |
| Card        | Content card with title and body               |
| Table       | Full table with Header, Row, Cell, Footer      |

All components support:
- `disabled` prop: visually greys out the component and sets `cursor: not-allowed`
- `backgroundColor` prop: allows custom background color via Storybook controls
- Responsive design via `@media (max-width: 600px)`