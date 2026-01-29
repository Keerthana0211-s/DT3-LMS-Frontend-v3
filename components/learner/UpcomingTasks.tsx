const tasks = [
  { title: "Quiz 3", course: "React", due: "Tomorrow" },
  { title: "Assignment", course: "Backend", due: "2 days" },
  { title: "Mock Test", course: "DSA", due: "5 days" },
];

export default function UpcomingTasks() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      <h3 className="text-slate-900 font-semibold mb-4">
        Upcoming Tasks
      </h3>

      <div className="space-y-4">
        {tasks.map((t) => (
          <div
            key={t.title}
            className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"
          >
            <div>
              <p className="text-slate-800 font-medium">{t.title}</p>
              <p className="text-slate-500 text-sm">{t.course}</p>
            </div>

            <span className="text-slate-600 text-sm">{t.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
