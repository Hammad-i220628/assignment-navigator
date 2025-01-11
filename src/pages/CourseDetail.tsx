import { useStore } from "@/store/useStore";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CourseDetail() {
  const { courseId } = useParams();
  const { courses, assignments, announcements } = useStore();

  const course = courses.find((c) => c.id === courseId);
  const courseAssignments = assignments.filter((a) => a.courseId === courseId);
  const courseAnnouncements = announcements.filter((a) => a.courseId === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <div className="text-gray-600">
          Instructor: {course.instructor}
        </div>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-2">Course Progress</h3>
        <Progress value={course.progress} className="mb-2" />
        <p className="text-sm text-gray-600">{course.progress}% Complete</p>
      </Card>

      <Tabs defaultValue="modules">
        <TabsList>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-4 mt-4">
          {course.modules.map((module) => (
            <Card key={module.id} className="p-6">
              <h3 className="font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.content}</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4 mt-4">
          {courseAssignments.map((assignment) => (
            <Card key={assignment.id} className="p-6">
              <h3 className="font-semibold mb-2">{assignment.title}</h3>
              <p className="text-gray-600 mb-2">{assignment.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  assignment.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {assignment.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4 mt-4">
          {courseAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="p-6">
              <h3 className="font-semibold mb-2">{announcement.title}</h3>
              <p className="text-gray-600 mb-2">{announcement.content}</p>
              <p className="text-sm text-gray-600">Posted on: {announcement.date}</p>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}