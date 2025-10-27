import { createContext } from "react";

// Core context object kept in a small JS module so files that export
// components (JSX) don't also export non-component values — this
// avoids React Fast Refresh warnings.
export const TicketsContext = createContext(null);
