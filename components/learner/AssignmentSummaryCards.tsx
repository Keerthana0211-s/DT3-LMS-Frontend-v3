export default function AssignmentSummaryCards() {
    const stats = [
      { label: "Total Assignments", value: 15, icon: "📌" },
      { label: "Pending", value: 3, icon: "⏳" },
      { label: "Completed", value: 10, icon: "✅" },
      { label: "Overdue", value: 1, icon: "🕒" },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <div className="text-2xl">{s.icon}</div>
            <p className="text-sm text-slate-500 mt-2">{s.label}</p>
            <p className="text-2xl font-semibold text-slate-800">{s.value}</p>
          </div>
        ))}
      </div>
    );
  }
  