export default function AICoachingCard() {
    return (
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
        <h3 className="font-semibold text-indigo-700 mb-2">
          🤖 AI Progress Review
        </h3>
  
        <p className="text-slate-700 mb-2">
          Your backend skills are improving fast 👍
        </p>
        <p className="text-slate-700 mb-4">
          Focus on cloud basics to boost readiness.
        </p>
  
        <div className="flex gap-3">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            View Action Plan
          </button>
          <button className="border border-indigo-300 px-4 py-2 rounded-lg text-indigo-600">
            Ask AI Mentor
          </button>
        </div>
      </div>
    );
  }
  