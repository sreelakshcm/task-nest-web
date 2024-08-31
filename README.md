# task-management (Task Nest) - Web

**Task Nest** is a task management application designed to help users efficiently manage their tasks and projects. This application leverages a modern tech stack, including React, Redux, TypeScript, Tailwind CSS, and more, to deliver a seamless and responsive user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [License](#license)

## Features

- **Task Management**: Create, update, and delete tasks.
- **Project Organization**: Group tasks into projects for better organization.
- **Dark Mode**: Toggle between light and dark themes.
- **Persistent State**: Redux Persist to save your application state.
- **Responsive Design**: Optimized for all devices.

## Tech Stack

- **Frontend**:
  - React: ^18.3.1
  - Redux Toolkit: ^2.2.7
  - React Router DOM: ^6.26.1
  - Tailwind CSS: ^3.4.10
  - Framer Motion: ^11.3.31
  - TypeScript: ^5.5.3

- **Tooling**:
  - Vite: ^5.4.1
  - ESLint: ^9.9.0
  - PostCSS: ^8.4.41
  - Autoprefixer: ^10.4.20

## Getting Started

To get started with **taskNest**, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/sreelakshcm/task-management.git
    cd task-management-web
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Build the application**:

    ```bash
    npm run build
    ```

5. **Preview the build**:

    ```bash
    npm run preview
    ```

## Folder Structure

The project structure is organized as follows:

```plaintext
task-management-web/
│
├── src/
│   ├── app/
│   │   ├── Features/       # Redux slices
│   │   ├── store/          # Redux store
│   ├── assets/             # Static assets
│   ├── components/         # Reusable components
│   ├── constants/          # Global constants
│   ├── pages/              # Application pages
│   ├── styles/             # Tailwind CSS and other styles
│   ├── utils/              # Utility functions
│   └── App.tsx             # Main application file
│
├── public/                 # Public assets
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── .eslintrc.js            # ESLint configuration
└── tsconfig.json           # TypeScript configuration
```

## Scripts

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run preview`**: Previews the production build locally.
