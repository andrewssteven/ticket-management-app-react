export function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validateTicket(ticket) {
  const errors = {};
  if (!ticket.title || !ticket.title.trim()) errors.title = "Title is required";
  if (!ticket.status) errors.status = "Status is required";
  return errors;
}
