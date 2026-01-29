import AssignmentSummaryCards from "@/components/learner/AssignmentSummaryCards";
import AssignmentFilters from "@/components/learner/AssignmentFilters";
import AssignmentTable from "@/components/learner/AssignmentTable";

export default function AssignmentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-800">
        Assignments
      </h1>

      <AssignmentSummaryCards />
      <AssignmentFilters />
      <AssignmentTable />
    </div>
  );
}
