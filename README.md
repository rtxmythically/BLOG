# ⚛️ React + TypeScript + Vite

This template provides a minimal setup to get **React** working with **Vite**, **TypeScript**, and **Hot Module Replacement (HMR)**.  
Includes a base **ESLint configuration** and support for expanding type-aware linting.

---

## 🚀 Features

- ⚡️ Built with [Vite](https://vitejs.dev/)
- 🔥 React + HMR (Fast Refresh)
- ✨ TypeScript support
- 📏 ESLint pre-configured (with option to expand)
- 📦 Minimal setup, ready to scale

---

## 🔌 Plugins for React HMR

You can choose between **two official plugins**:

1. [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react)
   - Uses **Babel** for Fast Refresh

2. [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc)
   - Uses **SWC** for Fast Refresh

---

## 🧹 Expanding the ESLint Configuration

If you're building a **production-ready app**, it's recommended to enhance ESLint with **type-aware rules**.

### 1. Configure `parserOptions` in ESLint config

```ts
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
