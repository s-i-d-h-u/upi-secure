# Frontend Project

This project is a React-based frontend application set up with Vite for fast development and hot module replacement (HMR). It follows best practices and includes ESLint for code quality enforcement.

## 📦 Tech Stack
- **React** - A JavaScript library for building user interfaces
- **Vite** - A fast build tool for modern web projects
- **ESLint** - Linting for maintaining code quality
- **SWC/Babel** - Fast compilation and transformation (depends on the plugin used)

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/frontend.git
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development
Start the development server with hot module replacement (HMR):
```sh
npm run dev
# or
yarn dev
```

### Build for Production
To create an optimized production build:
```sh
npm run build
# or
yarn build
```

### Linting & Code Formatting
Run ESLint to check for issues:
```sh
npm run lint
# or
yarn lint
```

## 🔌 Plugins
This setup supports the following official Vite plugins:
- `@vitejs/plugin-react` - Uses Babel for Fast Refresh
- `@vitejs/plugin-react-swc` - Uses SWC for Fast Refresh

You can install and configure the desired plugin in `vite.config.js`.

## 📜 License
This project is licensed under [MIT License](LICENSE).

---

Happy coding! 🚀


