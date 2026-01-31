import { getPathBySlug } from "@/data/learningPaths";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, BookOpen } from "lucide-react";
import { PathProgressHeader } from "@/components/learner/PathProgressHeader";

export default async function LearningPathPage({
  params,
}: {
  params: Promise<{ pathId: string }>;
}) {
  const { pathId } = await params;
  const path = getPathBySlug(pathId);

  if (!path) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link
            href="/dashboard/learner/courses"
            className="text-sm text-slate-500 hover:text-teal-600 mb-4 inline-block"
          >
            ← Back to My Courses
          </Link>
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            {path.title}
          </h1>
          <p className="text-slate-600 text-sm mb-4">{path.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {path.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {path.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={14} />
              {path.phases.reduce((acc, p) => acc + p.courses.length, 0)} courses
            </span>
          </div>
          <PathProgressHeader path={path} />
        </div>

        <div className="space-y-8">
          {path.phases.map((phase, phaseIdx) => (
            <section key={phaseIdx}>
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                {phase.name}
              </h2>
              <div className="space-y-3">
                {phase.courses.map((course, courseIdx) => (
                    <Link
                      key={course.id}
                      href={`/dashboard/learner/courses/${path.slug}/${course.id}`}
                      className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-200 hover:shadow-sm transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600 font-semibold text-sm">
                          {phaseIdx * 10 + courseIdx + 1}
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-slate-900 group-hover:text-teal-700">
                            {course.title}
                          </h3>
                          <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">
                            {course.description}
                          </p>
                          <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                            <span>{course.duration}</span>
                            <span>{course.instructor.name}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className="text-slate-400 group-hover:text-teal-600 transition flex-shrink-0"
                      />
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
