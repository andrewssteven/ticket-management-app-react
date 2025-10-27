// A simple localStorage-backed tickets API simulation
const KEY = "ticketapp_tickets";

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    // normalize stored data to always be an array of tickets
    if (Array.isArray(parsed)) return parsed;
    if (parsed && typeof parsed === "object") return [parsed];
    return [];
  } catch {
    return [];
  }
}

function writeAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export async function fetchTickets() {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 200));
  return readAll();
}

export async function createTicket(payload) {
  const list = readAll();
  const id = Date.now().toString(36);
  const ticket = { id, ...payload };
  list.unshift(ticket);
  writeAll(list);
  return ticket;
}

export async function updateTicket(payload) {
  const list = readAll();
  const idx = list.findIndex((t) => t.id === payload.id);
  if (idx === -1) throw new Error("Not found");
  list[idx] = { ...list[idx], ...payload };
  writeAll(list);
  return list[idx];
}

export async function deleteTicket(payload) {
  const list = readAll();
  const next = list.filter((t) => t.id !== payload.id);
  writeAll(next);
  return payload;
}
