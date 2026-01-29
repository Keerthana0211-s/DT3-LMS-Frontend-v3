import SkillRadar from "@/components/learner/SkillRadar";
import CourseProgressTable from "@/components/learner/CourseProgressTable";
import PerformanceCharts from "@/components/learner/PerformanceCharts";
import AIProgressReview from "@/components/learner/AIProgressReview";
import Achievements from "@/components/learner/Achievements";

export default function LearnerProgressPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 space-y-8">
      <SkillRadar />
      <CourseProgressTable />
      <PerformanceCharts />
      <AIProgressReview />
      <Achievements />
    </div>
  );
}
