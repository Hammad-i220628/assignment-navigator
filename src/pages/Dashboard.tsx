import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { courses, assignments, announcements, student } = useStore();
  const navigate = useNavigate();

  const pendingAssignments = assignments.filter((a) => !a.completed);
  const unreadAnnouncements = announcements.filter((a) => !a.read);
  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome back, {student.name}!</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Overall Progress</h3>
          <Progress value={overallProgress} className="mb-2" />
          <p className="text-sm text-gray-600">{Math.round(overallProgress)}% Complete</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Pending Assignments</h3>
          <p className="text-3xl font-bold text-primary">{pendingAssignments.length}</p>
          <button 
            onClick={() => navigate("/assignments")}
            className="text-sm text-primary hover:underline mt-2"
          >
            View all assignments
          </button>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">New Announcements</h3>
          <p className="text-3xl font-bold text-accent">{unreadAnnouncements.length}</p>
          <button 
            onClick={() => navigate("/announcements")}
            className="text-sm text-accent hover:underline mt-2"
          >
            View announcements
          </button>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/courses/${course.id}`)}>
              <h3 className="font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
              <Progress value={course.progress} className="mb-2" />
              <p className="text-sm text-gray-600">{course.progress}% Complete</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}