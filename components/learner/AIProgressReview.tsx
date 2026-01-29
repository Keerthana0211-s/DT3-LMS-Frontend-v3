"use client";

export default function AIProgressReview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
        🤖 AI Progress Review
      </h2>

      <div className="mt-3 space-y-2 text-slate-800">
        <p>
          <span className="font-medium text-emerald-700">✔ Strength:</span>{" "}
          Your backend skills are improving fast 👍
        </p>
        <p>
          <span className="font-medium text-amber-700">⚠ Focus Area:</span>{" "}
          Focus on cloud basics to boost overall readiness.
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          View Action Plan
        </button>
        <button className="px-4 py-2 border border-indigo-400 text-indigo-700 rounded-lg hover:bg-indigo-100 transition">
          Ask AI Mentor
        </button>
      </div>
    </div>
  );
}
