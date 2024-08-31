# task-management (Task Nest) - Web

Task Nest is a robust task management system designed to provide a seamless user experience. This repository contains the frontend codebase built with modern web technologies.

## Features

- **Responsive Design:** Tailored to work on all devices with Tailwind CSS.
- **Dark Mode:** Switch between light and dark modes.
- **State Management:** Powered by Redux Toolkit with state persistence.
- **Smooth Animations:** Enhances user interaction with Framer Motion.
- **Routing:** Managed by React Router DOM for intuitive navigation.

## Tech Stack

- **React**: ^18.3.1
- **Redux Toolkit**: ^2.2.7
- **Tailwind CSS**: ^3.4.10
- **Framer Motion**: ^11.3.31
- **React Router DOM**: ^6.26.1
- **PostCSS**: ^8.4.41
- **Autoprefixer**: ^10.4.20

## Installation

### Prerequisites

- Node.js (v16 or above)
- npm (v8 or above)

### Steps

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/sreelakshcm/task-management.git
   cd task-management
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Run the application:**

   - **Development Mode:**
     \`\`\`bash
     npm run dev
     \`\`\`

   - **Preview Mode:**
     \`\`\`bash
     npm run preview
     \`\`\`

4. **Build for production:**

   \`\`\`bash
   npm run build
   \`\`\`

5. **Lint the code:**

   \`\`\`bash
   npm run lint
   \`\`\`

## Project Structure

\`\`\`plaintext
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
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.
