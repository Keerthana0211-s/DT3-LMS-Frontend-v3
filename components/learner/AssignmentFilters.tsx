export default function AssignmentFilters() {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search assignment or course..."
          className="border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 w-64"
        />
  
        <select className="filter-select">
          <option>Status</option>
          <option>Pending</option>
          <option>Submitted</option>
          <option>Reviewed</option>
          <option>Overdue</option>
        </select>
  
        <select className="filter-select">
          <option>Course</option>
          <option>Backend</option>
          <option>DSA</option>
          <option>Cloud</option>
        </select>
  
        <select className="filter-select">
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
    );
  }
  