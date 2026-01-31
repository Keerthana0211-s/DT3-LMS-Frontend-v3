"use client";

import { useState } from "react";
import AssignmentCard from "./AssignmentCard";
import AssignmentFilters from "./AssignmentFilters";
import { assignments } from "@/data/assignments";
import type { Assignment } from "@/data/assignments";

const initialSorted = [...assignments].sort(
  (a, b) =>
    new Date(a.dueDateISO).getTime() - new Date(b.dueDateISO).getTime()
);

export default function AssignmentListing() {
  const [filtered, setFiltered] = useState<Assignment[]>(initialSorted);

  return (
    <div className="space-y-6">
      <AssignmentFilters onFilter={setFiltered} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => (
          <AssignmentCard key={a.id} assignment={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
          No assignments match your filters.
        </div>
      )}
    </div>
  );
}
