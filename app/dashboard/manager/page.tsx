export default function ManagerDashboard() {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-green-900 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Manager</h2>
          <ul className="space-y-4">
            <li>Team Overview</li>
            <li>Learner Progress</li>
            <li>Reports</li>
          </ul>
        </aside>
  
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold">
            Manager Dashboard
          </h1>
        </main>
      </div>
    )
  }
  