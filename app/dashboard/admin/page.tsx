export default function AdminDashboard() {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-red-900 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Admin</h2>
          <ul className="space-y-4">
            <li>User Management</li>
            <li>Role Management</li>
            <li>Course Management</li>
            <li>Analytics</li>
          </ul>
        </aside>
  
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold">
            Admin Dashboard
          </h1>
        </main>
      </div>
    )
  }
  