export default function InstructorDashboard() {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-blue-900 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Instructor</h2>
          <ul className="space-y-4">
            <li>My Courses</li>
            <li>Create Course</li>
            <li>Students</li>
            <li>Analytics</li>
          </ul>
        </aside>
  
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold">
            Instructor Dashboard
          </h1>
        </main>
      </div>
    )
  }
  