import { getCourseInPath } from "@/data/learningPaths";
import { notFound } from "next/navigation";
import { CourseDetailClient } from "./CourseDetailClient";
import type { Module } from "@/data/learningPaths";

function getDefaultModules(courseTitle: string): Module[] {
  return [
    { id: "m1", title: "Introduction", type: "video", duration: "15 min", completed: false },
    { id: "m2", title: "Core Concepts", type: "video", duration: "25 min", completed: false, locked: true },
    { id: "m3", title: "Deep Dive", type: "video", duration: "30 min", completed: false, locked: true },
    { id: "m4", title: "Practice Assignment", type: "assignment", duration: "45 min", completed: false, locked: true },
    { id: "m5", title: "Module Quiz", type: "quiz", duration: "10 min", completed: false, locked: true },
  ];
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ pathId: string; courseId: string }>;
}) {
  const { pathId, courseId } = await params;
  const result = getCourseInPath(pathId, courseId);

  if (!result) notFound();

  const { path, course } = result;
  const modules =
    course.modules.length > 0
      ? course.modules
      : getDefaultModules(course.title);

  return (
    <CourseDetailClient
      path={path}
      course={{
        ...course,
        modules,
      }}
    />
  );
}
