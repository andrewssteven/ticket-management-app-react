import React from "react";

const STATUS_STYLES = {
  open: "bg-green-100 text-green-800",
  in_progress: "bg-amber-100 text-amber-800",
  closed: "bg-gray-100 text-gray-700",
};

export default function TicketCard({ ticket, onEdit, onDelete }) {
  const status = ticket?.status || "open";

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-lg">{ticket.title}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {ticket.description || "No description"}
          </p>
        </div>
        <div className="text-right">
          <div
            className={`inline-flex items-center px-3 py-1 rounded text-xs font-medium ${
              STATUS_STYLES[status] || STATUS_STYLES.open
            }`}
          >
            {status.replace("_", " ")}
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(ticket)}
          className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(ticket)}
          className="px-3 py-1 bg-red-600 text-white rounded text-sm"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
