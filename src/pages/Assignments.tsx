import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Assignments() {
  const { assignments, courses, markAssignmentComplete } = useStore();

  const sortedAssignments = [...assignments].sort((a, b) => {
    if (a.completed === b.completed) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <div className="space-y-4">
        {sortedAssignments.map((assignment) => {
          const course = courses.find((c) => c.id === assignment.courseId);
          return (
            <Card key={assignment.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{assignment.title}</h3>
                  <p className="text-gray-600 mb-2">{assignment.description}</p>
                  <p className="text-sm text-gray-600">Course: {course?.title}</p>
                  <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    assignment.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assignment.completed ? 'Completed' : 'Pending'}
                  </span>
                  {!assignment.completed && (
                    <Button
                      onClick={() => markAssignmentComplete(assignment.id)}
                      variant="outline"
                      size="sm"
                    >
                      Mark as Complete
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}