import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";

export default function Profile() {
  const { student, courses, assignments } = useStore();

  const completedAssignments = assignments.filter((a) => a.completed).length;
  const totalAssignments = assignments.length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Profile</h1>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{student.name}</h2>
              
              <p className="text-gray-600">{student.rollNo}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{student.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Program</p>
              <p className="font-medium">{student.program}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Semester</p>
              <p className="font-medium">{student.semester}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Enrollment Status</p>
              <p className="font-medium">{student.enrollmentStatus}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Enrolled Courses</h3>
          <p className="text-3xl font-bold text-primary">{courses.length}</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Completed Assignments</h3>
          <p className="text-3xl font-bold text-primary">
            {completedAssignments}/{totalAssignments}
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Current Semester</h3>
          <p className="text-3xl font-bold text-primary">{student.semester}</p>
        </Card>
      </div>
    </div>
  );
}