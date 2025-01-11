import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProgressPage() {
  const { courses, assignments } = useStore();

  const completedAssignments = assignments.filter((a) => a.completed).length;
  const totalAssignments = assignments.length;
  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;

  const chartData = courses.map((course) => ({
    name: course.title,
    progress: course.progress,
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Progress Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Overall Progress</h3>
          <Progress value={overallProgress} className="mb-2" />
          <p className="text-sm text-gray-600">{Math.round(overallProgress)}% Complete</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Completed Assignments</h3>
          <p className="text-3xl font-bold text-primary">{completedAssignments}/{totalAssignments}</p>
          <p className="text-sm text-gray-600 mt-2">
            {Math.round((completedAssignments / totalAssignments) * 100)}% Completion Rate
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Active Courses</h3>
          <p className="text-3xl font-bold text-secondary">{courses.length}</p>
          <p className="text-sm text-gray-600 mt-2">Currently Enrolled</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Course Progress Chart</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Course Details</h2>
        {courses.map((course) => (
          <Card key={course.id} className="p-6">
            <h3 className="font-semibold mb-2">{course.title}</h3>
            <Progress value={course.progress} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{course.progress}% Complete</span>
              <span>Instructor: {course.instructor}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}