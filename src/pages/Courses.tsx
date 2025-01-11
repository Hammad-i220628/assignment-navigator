import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { courses } = useStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card 
            key={course.id} 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <Progress value={course.progress} className="mb-2" />
              <p className="text-sm text-gray-600">{course.progress}% Complete</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}