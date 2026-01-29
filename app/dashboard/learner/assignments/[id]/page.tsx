import AssignmentSubmission from "@/components/learner/AssignmentSubmission";
import AIAssignmentFeedback from "@/components/learner/AIAssignmentFeedback";

export default function AssignmentDetailPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-2xl font-semibold text-slate-800">
        Build REST API for User Management
      </h1>

      <section className="bg-white border border-slate-200 text-slate-800  rounded-xl p-6">
        <h3 className="section-title">Problem Description</h3>
        <p>Create REST APIs to manage users with CRUD operations.</p>
      </section>

      <section className="bg-white border border-slate-200 text-slate-800  rounded-xl p-6">
        <h3 className="section-title">Deliverables</h3>
        <ul className="list-disc pl-5">
          <li>GitHub repository</li>
          <li>API documentation</li>
        </ul>
      </section>

      <section className="bg-white border border-slate-200 text-slate-800  rounded-xl p-6">
        <h3 className="section-title">Submission Guidelines</h3>
        <p>Deadline: 20 Sep 2024</p>
        <p>Late penalty: -10%</p>
      </section>

      <AssignmentSubmission />
      <AIAssignmentFeedback />
    </div>
  );
}
