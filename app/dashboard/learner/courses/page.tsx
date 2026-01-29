import CourseFilterBar from "@/components/learner/CourseFilterBar";
import CourseCard from "@/components/learner/CourseCard";
import RecommendedCourses from "@/components/learner/RecommendedCourses";
import CompletedCourses from "@/components/learner/CompletedCourses";
import { learnerCourses } from "@/data/learnerCourses";

export default function MyCoursesPage() {
  return (
    <div className="bg-slate-50 min-h-screen p-6 space-y-8">
      <CourseFilterBar />

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          My Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {learnerCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <RecommendedCourses />
      <CompletedCourses />
    </div>
  );
}
