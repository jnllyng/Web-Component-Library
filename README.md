# Coding Assignment 12: Web Component Library

A React component library built with TypeScript, Styled Components, and Storybook. The production build is containerized with Docker and served via Nginx on localhost port 8083.

---

## Environment

| Tool          | Version  |
|---------------|----------|
| Node.js       | v24.12.0 |
| npm           | v11.6.2  |
| Docker Desktop| 29.1.3   |

---

## Project Setup

### 1. Create React App with TypeScript

The project was bootstrapped using Create React App with the TypeScript template:

```bash
npx create-react-app jueun_yang_ui_garden --template typescript
cd jueun_yang_ui_garden
```

### 2. Install Styled Components

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

### 3. Install Storybook

```bash
npx storybook init
```

This automatically configured Storybook with the React Webpack5 builder.

### 4. Install Testing Libraries

```bash
npm install --save-dev jest-styled-components
```

---

## Project Structure

```
jueun_yang_ui_garden/
├── public/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.tests.tsx
│   │   │   └── index.ts
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
├── Dockerfile
└── README.md
```

Each component folder contains:
- `Component.tsx`: component implementation using Styled Components
- `Component.types.tsx`: TypeScript interface/props definition
- `Component.stories.tsx`: Storybook stories with controls
- `Component.tests.tsx`: Jest tests (visibility + disabled state)
- `index.ts`: exports

---

## Available Scripts

### Start development server
```bash
npm start
```
Runs the app at `http://localhost:3000`

### Run Storybook
```bash
npm run storybook
```
Runs Storybook at `http://localhost:6006`

### Run tests
```bash
npm test
```

### Build production
```bash
npm run build
```
Creates an optimized production build in the `/build` folder.

---

## Docker Setup

### Dockerfile

The Dockerfile uses a multi-stage build:
1. **Build stage** uses `node:20-alpine` to install dependencies and build the React app
2. **Serve stage** uses `nginx:alpine` to serve the static production build

The working directory inside the container is `/yang_jueun_ui_garden`.

### Prerequisites

Make sure **Docker Desktop** is installed and running before proceeding.
- Download: https://www.docker.com/products/docker-desktop/
- After opening Docker Desktop, wait until the whale icon 🐳 appears in the system tray and the status shows **"Docker Desktop is running"**

---

## Running on localhost:8083

### Step 1. Navigate to the project folder

```bash
cd path/to/jueun_yang_ui_garden
```

### Step 2. Build the Docker image

```bash
docker build -t yang_jueun_coding_assignment12 .
```

### Step 3. Run the container

```bash
docker run --name yang_jueun_coding_assignment12 -p 8083:80 yang_jueun_coding_assignment12
```

### Step 4. Open in browser

```
http://localhost:8083
```

---

## Components

| Component   | Description                              |
|-------------|------------------------------------------|
| Button      | Clickable button with label and disabled state |
| Label       | Inline label with disabled state         |
| Text        | Styled paragraph text                    |
| Dropdown    | Select input with configurable options   |
| RadioButton | Radio input with label and disabled state|
| Img         | Styled image with disabled state         |
| HeroImage   | Full-width banner image with title overlay|
| Card        | Content card with title and body         |
| Table       | Full table with Header, Row, Cell, Footer|

All components support:
- `disabled` prop: visually greys out the component and sets `cursor: not-allowed`
- `backgroundColor` prop: allows custom background color via Storybook controls
- Responsive design via `@media (max-width: 600px)`
