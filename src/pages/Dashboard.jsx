import React from "react";
import { Link } from "react-router-dom";
import { useTickets } from "../contexts/useTickets";

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  const { tickets = [] } = useTickets();

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const resolved = tickets.filter((t) => t.status === "closed").length;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Tickets" value={total} />
        <SummaryCard title="Open Tickets" value={open} />
        <SummaryCard title="Resolved Tickets" value={resolved} />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Quick actions</h3>
        <div className="mt-4 flex gap-2">
          <Link
            to="/tickets"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Manage Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
