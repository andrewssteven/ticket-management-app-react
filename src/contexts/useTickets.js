import { useContext } from "react";
import { TicketsContext } from "./TicketsContextCore";

export function useTickets() {
  const ctx = useContext(TicketsContext);
  if (!ctx) throw new Error("useTickets must be used within TicketsProvider");
  return ctx;
}
