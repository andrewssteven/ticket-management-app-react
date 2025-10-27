import React, { useEffect, useState, useCallback } from "react";
import { TicketsContext } from "./TicketsContextCore";
import {
  fetchTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../utils/tickets";
import { useToast } from "../contexts/ToastContext";

export function TicketsProvider({ children }) {
  const toast = useToast();
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTickets();
      setTickets(data || []);
    } catch (err) {
      // log to console; components may show their own error UI
      console.error("Failed to load tickets", err);
      // surface a user-visible error via toast
      toast?.show({
        type: "error",
        message: "Failed to load tickets. Please retry.",
      });
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    load();
  }, [load]);

  async function create(item) {
    const res = await createTicket(item);
    await load();
    return res;
  }

  async function update(item) {
    const res = await updateTicket(item);
    await load();
    return res;
  }

  async function remove(item) {
    const res = await deleteTicket(item);
    await load();
    return res;
  }

  return (
    <TicketsContext.Provider
      value={{ tickets, isLoading, refetch: load, create, update, remove }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

// NOTE: the `useTickets` hook is intentionally moved to a separate file
// (src/contexts/useTickets.js) to avoid fast-refresh issues when a file
// exports both React components and non-component helpers.
