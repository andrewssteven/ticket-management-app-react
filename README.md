# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Ticketly (app scaffold)

This workspace has been extended with a small Ticket Management SPA scaffold.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Notes

- The app uses `localStorage` to simulate authentication (key: `ticketapp_session`) and ticket persistence.
- Routes: `/`, `/auth/login`, `/auth/signup`, `/dashboard`, `/tickets`.
# ticket-management-app-react
