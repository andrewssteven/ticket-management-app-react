# FlowDesk — React implementation

This folder contains the React + Vite implementation of the FlowDesk demo app. It is a client-only SPA that simulates authentication and a backend using `localStorage`.

## Quick start

1. Install dependencies

```bash
cd ticket-management-react
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open the URL shown by Vite (usually http://localhost:5173).

## Frameworks & libraries

- React 19
- Vite (dev server / build)
- Tailwind CSS (utility styles)
- react-router-dom (routing)
- @tanstack/react-query (included but not required for localStorage mock)
- ESLint for linting (dev)

## What this implementation includes

- Landing page with wave SVG hero, decorative circles, and CTA buttons.
- Login and Signup pages with inline validation and toast feedback.
- Protected Dashboard and Tickets pages (protected with `ticketapp_session`).
- Tickets CRUD (create, read, update, delete) persisted in `localStorage`.
- Centralized Toast provider for user feedback.
- Consistent layout (max-width: 1440px) and responsive design.

## App structure and key files

- `src/main.jsx` — bootstraps the app and wraps with `ToastProvider` and `TicketsProvider`.
- `src/App.jsx` — routes and layout.
- `src/pages/Landing.jsx` — hero and marketing cards.
- `src/pages/auth/Login.jsx`, `src/pages/auth/Signup.jsx` — auth forms.
- `src/pages/Dashboard.jsx` — summary cards and quick actions.
- `src/pages/Tickets.jsx` — tickets CRUD form and listing.
- `src/components/TicketCard.jsx` — ticket card UI.
- `src/components/Header.jsx`, `src/components/Footer.jsx` — shared layout.
- `src/components/Toast.jsx`, `src/contexts/ToastContext.js` — notification system.
- `src/contexts/TicketsContext.jsx`, `src/contexts/TicketsContextCore.js`, `src/contexts/useTickets.js` — tickets provider and hook.
- `src/utils/tickets.js` — localStorage-backed tickets API (key: `ticketapp_tickets`).
- `src/utils/auth.js` — simulated auth using `localStorage` key `ticketapp_session`.

## Data shapes and state

- Session token is stored in `localStorage` under `ticketapp_session` (string).
- Tickets are stored under `ticketapp_tickets` as an array of objects. Ticket shape:

```json
{
  "id": "string",
  "title": "string",
  "description": "string (optional)",
  "status": "open|in_progress|closed"
}
```

- `TicketsProvider` exposes: `{ tickets, isLoading, refetch, create, update, remove }` and handles persistence.

## Validation & error handling

- Title and status are required. Status must be one of: `open`, `in_progress`, `closed`.
- Description is optional but limited to 1000 characters.
- UI shows inline field errors and toasts for success / failure.
- Protected pages redirect to `/auth/login` with a toast when session is missing or expired.

## Accessibility notes

- Uses semantic HTML elements (header, main, footer, form controls).
- Inputs include visible focus states via default browser focus + Tailwind utility styles.
- Color contrast chosen to be readable; status chips use distinct background & text colors.
- ARIA: forms include `aria-describedby` for inline error messages where applicable.

## Test credentials

- This demo accepts any non-empty email and password. Example test account:
  - Email: `test@example.com`
  - Password: `password123`


## Known issues & notes

- There is no real backend: the app uses `localStorage` and simulates latency.
- No automated E2E tests are included (I can add simple Playwright/Cypress smoke tests on request).
- Legacy `priority` field was removed from the UI; existing localStorage entries may still include it — consider running a migration to clean stored tickets (I can add this migration).

