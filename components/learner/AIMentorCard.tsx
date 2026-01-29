export default function AIMentorCard() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
      <h3 className="text-slate-900 font-semibold mb-2">
        AI Mentor Suggestions
      </h3>

      <p className="text-slate-700 mb-4">
        Revise SQL Joins to improve backend readiness.
      </p>

      <div className="flex gap-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          View Courses
        </button>
        <button className="border border-indigo-300 text-indigo-700 px-4 py-2 rounded-lg">
          Ask AI Mentor
        </button>
      </div>
    </div>
  );
}
