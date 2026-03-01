# Coding Assignment 12: Web Component Library

A React component library built with TypeScript, Styled Components, and Storybook. The production build is containerized with Docker and served via Nginx on localhost port 8083.

---

## Environment

| Tool            | Version      |
|-----------------|--------------|
| Node.js (local) | v24.12.0     |
| npm             | v11.6.2      |
| Node.js (Docker)| v20 (alpine) |
| Docker Desktop  | 29.1.3       |

---

## Project Setup

### 1. Create React App with TypeScript

The project was bootstrapped using Create React App with the TypeScript template. This sets up the full React development environment with TypeScript support, including Jest for testing and a preconfigured build pipeline via `react-scripts`.

```
npx create-react-app jueun_yang_ui_garden --template typescript
cd jueun_yang_ui_garden
```

### 2. Install Styled Components

Styled Components is used for all component styling. It allows writing actual CSS inside TypeScript files and supports dynamic styling based on props, which is how the `disabled` state styling is implemented across all components.

```
npm install styled-components
npm install --save-dev @types/styled-components
```

### 3. Install Storybook

Storybook was initialized using the following command, which automatically detects the React + Webpack5 setup and configures itself accordingly. This creates a `.storybook/` folder with `main.ts` and `preview.ts` configuration files.

```
npx storybook init
```

This automatically configured Storybook with the React Webpack5 builder.

### 4. Install Testing Libraries

`jest-styled-components` is required to test styled-component styles such as `background-color` using Jest and `@testing-library/react`.

```
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
* `Component.tsx`: the main component implementation using Styled Components. Each component accepts a `disabled` prop that visually greys out the component, changes the cursor to `not-allowed`, and disables pointer events. A `backgroundColor` prop allows custom color overrides.
* `Component.types.tsx`: TypeScript interface defining all props for the component.
* `Component.stories.tsx`: Storybook stories with Controls for modifying props like text, background color, and disabled state interactively. Each component has a `Default` and a `Disabled` story.
* `Component.tests.tsx`: Jest tests using `@testing-library/react` and `jest-styled-components`. Each component has at least two tests: one that checks the component is visible, and one that checks the background color changes in the disabled state.
* `index.ts`: re-exports the component and its types for clean imports.

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

Runs Storybook at `http://localhost:6006`. Use this to browse all components interactively with controls.

### Run tests

```
npm test
```

Runs all Jest tests. Each component has at least two tests — one for visibility and one for disabled background color.

### Build production

```
npm run build
```

Creates an optimized production build in the `/build` folder.

---

## Docker Setup

### Dockerfile

The Dockerfile uses a multi-stage build to keep the final image small:

1. **Build stage** uses `node:20-alpine` to install dependencies and build the React app. It copies `package.json` first, runs `npm install`, then copies the rest of the source code and runs `npm run build` to create the production build in the `/build` folder.
2. **Serve stage** uses `nginx:alpine` to serve the static production build. Only the build output from Stage 1 is copied into Nginx's HTML directory (`/usr/share/nginx/html`). Nginx serves the static files on port 80 inside the container, which is then mapped to port 8083 on the local machine.

The working directory inside the container is `/yang_jueun_ui_garden`.

### Prerequisites

Make sure Docker Desktop is installed and running before proceeding.
* Download: https://www.docker.com/products/docker-desktop/
* After opening Docker Desktop, wait until the whale icon 🐳 appears in the system tray and the status shows "Docker Desktop is running"

---

## Running on localhost:8083

### Step 1. Navigate to the project folder

```
cd path/to/jueun_yang_ui_garden
```

### Step 2. Build the Docker image

```
docker build -t yang_jueun_coding_assignment12 .
```

This installs all dependencies and creates the production build inside the container. The first build may take a few minutes.

### Step 3. Run the container

```
docker run --name yang_jueun_coding_assignment12 -p 8083:80 yang_jueun_coding_assignment12
```

This maps port 8083 on your local machine to port 80 inside the container where Nginx is running.

### Step 4. Open in browser

```
http://localhost:8083
```

### Managing the container

Stop the container:
```
docker stop yang_jueun_coding_assignment12
```

Restart the container:
```
docker start yang_jueun_coding_assignment12
```

Rebuild after code changes:
```
docker stop yang_jueun_coding_assignment12
docker rm yang_jueun_coding_assignment12
docker build -t yang_jueun_coding_assignment12 .
docker run --name yang_jueun_coding_assignment12 -p 8083:80 yang_jueun_coding_assignment12
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

### Button

A styled clickable button rendered as a `<button>` element. In the default state the background is `#CB0000` (red) with white text. In the disabled state the background changes to `#d1d5db` (grey), the text turns black, and the cursor changes to `not-allowed`.

| Prop            | Type       | Default   | Description             |
|-----------------|------------|-----------|-------------------------|
| label           | string     | required  | Button text             |
| disabled        | boolean    | false     | Toggles disabled state  |
| backgroundColor | string     | `#CB0000` | Custom background color |
| onClick         | () => void | —         | Click handler           |

### Label

A styled inline label rendered as a `<span>`. Shares the same color scheme as Button — red by default, grey when disabled.

| Prop            | Type    | Default   | Description             |
|-----------------|---------|-----------|-------------------------|
| text            | string  | required  | Label text              |
| disabled        | boolean | false     | Toggles disabled state  |
| backgroundColor | string  | `#CB0000` | Custom background color |

### Text

A styled paragraph rendered as a `<p>`. Uses the same red/grey color scheme as Button and Label.

| Prop            | Type    | Default   | Description             |
|-----------------|---------|-----------|-------------------------|
| text            | string  | required  | Paragraph text          |
| disabled        | boolean | false     | Toggles disabled state  |
| backgroundColor | string  | `#CB0000` | Custom background color |

### Dropdown

A styled select input wrapped in a `<div>`. The wrapper handles the disabled background color. The inner `<select>` is also disabled natively when the `disabled` prop is passed.

| Prop            | Type                                 | Default     | Description             |
|-----------------|--------------------------------------|-------------|-------------------------|
| options         | `{ label: string; value: string }[]` | required    | Dropdown options        |
| disabled        | boolean                              | false       | Toggles disabled state  |
| backgroundColor | string                               | transparent | Custom background color |

### RadioButton

A styled radio input with a label, wrapped in a `<label>` element. The wrapper handles the background color and cursor styling. Supports controlled usage via `checked` and `onChange` props.

| Prop            | Type                    | Default     | Description              |
|-----------------|-------------------------|-------------|--------------------------|
| label           | string                  | required    | Radio label text         |
| name            | string                  | required    | Input group name         |
| value           | string                  | required    | Input value              |
| checked         | boolean                 | false       | Controlled checked state |
| disabled        | boolean                 | false       | Toggles disabled state   |
| backgroundColor | string                  | transparent | Custom background color  |
| onChange        | (value: string) => void | —           | Change handler           |

### Img

A styled image component. The image is wrapped in a `<div>` that handles the background color and border radius. In the disabled state the image opacity is reduced to 0.7 and the wrapper background becomes grey.

| Prop            | Type    | Default   | Description             |
|-----------------|---------|-----------|-------------------------|
| src             | string  | required  | Image source URL        |
| alt             | string  | required  | Alt text                |
| disabled        | boolean | false     | Toggles disabled state  |
| backgroundColor | string  | `#f3f4f6` | Custom background color |

### HeroImage

A full-width banner image with an optional title overlay. Built on the same structure as Img but with a fixed height of 260px and an absolute-positioned title rendered over the image.

| Prop            | Type    | Default   | Description             |
|-----------------|---------|-----------|-------------------------|
| src             | string  | required  | Image source URL        |
| alt             | string  | required  | Alt text                |
| title           | string  | —         | Overlay title text      |
| disabled        | boolean | false     | Toggles disabled state  |
| backgroundColor | string  | `#f3f4f6` | Custom background color |

### Card

A styled article card with a title and body text. In the default state the background is white with a subtle box shadow. In the disabled state the background changes to grey and the box shadow is removed.

| Prop            | Type    | Default   | Description             |
|-----------------|---------|-----------|-------------------------|
| title           | string  | required  | Card title              |
| body            | string  | required  | Card body text          |
| disabled        | boolean | false     | Toggles disabled state  |
| backgroundColor | string  | `#ffffff` | Custom background color |

### Table

The table is composed of five separate components that work together: `Table`, `TableHeader`, `TableRow`, `TableCell`, and `TableFooter`. All five accept `disabled` and `backgroundColor` props independently, allowing fine-grained control over which parts of the table appear disabled.

* `Table`: the outer wrapper and inner `<table>`. The wrapper handles overflow scrolling for responsiveness and applies background color and disabled styling. Default background is `#e0f2fe`, disabled background is `#bae6fd`.
* `TableHeader`: a styled `<thead>`. Default background is `#e0f2fe`, disabled background is `#bae6fd`.
* `TableRow`: a styled `<tr>`. Transparent by default, `#bae6fd` when disabled.
* `TableCell`: a styled `<td>` or `<th>` (controlled via the `as` prop). Supports `colSpan` for spanning multiple columns.
* `TableFooter`: a styled `<tfoot>`. Same color scheme as TableHeader.

| Prop                  | Type              | Default  | Description                 |
|-----------------------|-------------------|----------|-----------------------------|
| children              | React.ReactNode   | required | Table content               |
| disabled              | boolean           | false    | Toggles disabled state      |
| backgroundColor       | string            | —        | Custom background color     |
| as (TableCell)        | `"td"` \| `"th"` | `"td"`   | Renders as td or th         |
| colSpan (TableCell)   | number            | —        | Spans multiple columns      |

---

All components support:
* `disabled` prop: visually greys out the component and sets `cursor: not-allowed`
* `backgroundColor` prop: allows custom background color via Storybook controls
* Responsive design via `@media (max-width: 600px)`