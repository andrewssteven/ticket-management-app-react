import React, { useState } from "react";
import { useTickets } from "../contexts/useTickets";
import TicketCard from "../components/TicketCard";
import Modal from "../components/Modal";
import { useToast } from "../contexts/ToastContext";

const empty = { title: "", description: "", status: "open" };

export default function Tickets() {
  const toast = useToast();

  const { tickets = [], isLoading, create, update, remove } = useTickets();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [confirm, setConfirm] = useState({ open: false, ticket: null });

  // create/update/delete functions are provided by the TicketsContext

  function openCreate() {
    setEditing(null);
    setForm(empty);
    setConfirm({ open: false, ticket: null });
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  }

  function handleEdit(ticket) {
    setEditing(ticket);
    setForm(ticket);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(ticket) {
    setConfirm({ open: true, ticket });
  }

  function submit_form(e) {
    e.preventDefault();
    const eobj = {};
    if (!form.title) eobj.title = "Title is required";
    if (!form.status) eobj.status = "Status is required";
    const allowed = ["open", "in_progress", "closed"];
    if (form.status && !allowed.includes(form.status))
      eobj.status = "Invalid status";
    if (form.description && form.description.length > 1000)
      eobj.description = "Description is too long (max 1000 chars)";

    setErrors(eobj);
    if (Object.keys(eobj).length > 0) {
      // focus the first invalid field
      const first = Object.keys(eobj)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) el.focus();
      return;
    }
    if (editing) {
      update(form)
        .then(() => toast?.show({ message: "Ticket updated" }))
        .catch(() =>
          toast?.show({ type: "error", message: "Failed to update ticket" })
        );
      setEditing(null);
    } else {
      create(form)
        .then(() => toast?.show({ message: "Ticket created" }))
        .catch(() =>
          toast?.show({ type: "error", message: "Failed to create ticket" })
        );
    }
    setForm(empty);
  }

  return (
    <div>
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-2">
          {editing ? "Edit ticket" : "Create ticket"}
        </h3>
        <form
          onSubmit={submit_form}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="md:col-span-2">
            <label className="block text-sm">Title</label>
            <input
              value={form.title}
              name="title"
              aria-describedby={errors.title ? "title-error" : undefined}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded border"
            />
            {errors.title && (
              <div id="title-error" className="text-xs text-red-600 mt-1">
                {errors.title}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm">Status</label>
            <select
              value={form.status}
              name="status"
              aria-describedby={errors.status ? "status-error" : undefined}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded border"
            >
              <option value="open">open</option>
              <option value="in_progress">in_progress</option>
              <option value="closed">closed</option>
            </select>
            {errors.status && (
              <div id="status-error" className="text-xs text-red-600 mt-1">
                {errors.status}
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm">
              Description{" "}
              <span className="text-xs text-gray-400">(optional)</span>
            </label>
            <textarea
              value={form.description}
              name="description"
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded border"
              rows={3}
            />
            {errors.description && (
              <div id="description-error" className="text-xs text-red-600 mt-1">
                {errors.description}
              </div>
            )}
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              {editing ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={openCreate}
              className="px-4 py-2 border rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="grid gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          tickets.map((t) => (
            <TicketCard
              key={t.id}
              ticket={t}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      <Modal
        open={confirm.open}
        title="Confirm delete"
        onClose={() => setConfirm({ open: false, ticket: null })}
      >
        <p>
          Are you sure you want to delete{" "}
          <strong>{confirm.ticket?.title}</strong>?
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              remove(confirm.ticket)
                .then(() => toast?.show({ message: "Ticket deleted" }))
                .catch(() =>
                  toast?.show({
                    type: "error",
                    message: "Failed to delete ticket",
                  })
                );
              setConfirm({ open: false, ticket: null });
            }}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={() => setConfirm({ open: false, ticket: null })}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
