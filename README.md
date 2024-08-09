# Todo List Application - React + TypeScript + Vite + Kinde

This project is a Todo List application built as a part of the **"React Project Tutorial for Beginners"** which covers fundamental React concepts such as Hooks, Context API, and also integrates Tailwind CSS for styling, TypeScript for type safety, and authentication mechanisms.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [ESLint Configuration](#eslint-configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **React Hooks:** Use of state and effect hooks to manage component state and side effects.
- **Context API:** For state management and passing data across components.
- **Tailwind CSS:** For responsive and modern UI design.
- **TypeScript:** Provides static type checking.
- **Authentication:** Simple user authentication for login and registration.
- **Vite:** Blazing fast build tool for modern web projects.

## Project Structure

```bash
├── node_modules          # Project dependencies
├── public                # Public static assets
├── src                   # Source files
│   ├── assets            # Asset files (e.g., images, icons)
│   ├── components        # Reusable UI components
│   ├── contexts          # Context API for global state management
│   ├── lib               # Utility functions and TypeScript types
│   ├── main.tsx          # Vite entry file
│   └── vite-env.d.ts     # Vite environment types
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig*.json        # TypeScript configurations
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A next-generation front-end tool that delivers faster and leaner development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **ESLint**: A tool for identifying and fixing problems in your JavaScript code.
- **React Context API**: For state management across the app.
- **Kinde**: Basic user authentication mechanism.

## Getting Started

Follow these instructions to set up the project locally.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build the project for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run serve
   ```

### Usage

1. Add tasks to your Todo List using the input field and the "Add to list" button.
2. Mark tasks as complete by clicking on them.
3. Remove tasks using the red "X" button next to each task.
4. Register and log in to save your todo list across sessions.

## Expanding the ESLint Configuration

If you are developing this project for production, it is recommended to expand the ESLint configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
