import WelcomeCard from "@/components/learner/WelcomeCard";
import ReadinessOverviewCard from "@/components/learner/ReadinessOverviewCard";
import ContinueLearning from "@/components/learner/ContinueLearning";
import UpcomingTasks from "@/components/learner/UpcomingTasks";
import LearningPathStepper from "@/components/learner/LearningPathStepper";
import AIMentorCard from "@/components/learner/AIMentorCard";
import ProgressCharts from "@/components/learner/ProgressCharts";

export default function LearnerDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <WelcomeCard />

      {/* Readiness (BIG CARD) */}
      <ReadinessOverviewCard />

      {/* Continue Learning */}
      <ContinueLearning />

      {/* Tasks + Learning Path */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingTasks />
        <LearningPathStepper />
      </div>

      {/* AI + Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIMentorCard />
        <ProgressCharts />
      </div>
    </div>
  );
}
