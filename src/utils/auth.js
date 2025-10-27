const SESSION_KEY = "ticketapp_session";

export function isAuthenticated() {
  return Boolean(localStorage.getItem(SESSION_KEY));
}

export function login({ email, password }) {
  // naive mock: accept any non-empty email/password
  if (!email || !password) return false;
  const token = `mock-token:${btoa(email)}`;
  localStorage.setItem(SESSION_KEY, token);
  // also store a minimal user
  localStorage.setItem("ticketapp_user", JSON.stringify({ email }));
  return true;
}

export function register({ email, password }) {
  // in-memory simulation
  if (!email || !password) return false;
  const token = `mock-token:${btoa(email)}`;
  localStorage.setItem(SESSION_KEY, token);
  localStorage.setItem("ticketapp_user", JSON.stringify({ email }));
  return true;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("ticketapp_user");
}

export function getSession() {
  return localStorage.getItem(SESSION_KEY);
}
