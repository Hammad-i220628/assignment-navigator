import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
  const { student, courses, assignments } = useStore();

  const completedAssignments = assignments.filter((a) => a.completed).length;
  const totalAssignments = assignments.length;

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Profile Header with Decorative Elements */}
        <div className="absolute -top-6 -left-6 -right-6 h-48 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-xl blur-xl"></div>
        
        <Card className="relative overflow-hidden border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-float-medium"></div>
          
          <div className="relative p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-32 h-32 border-4 border-purple-200 dark:border-purple-900 shadow-xl">
                <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {student.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{student.rollNo}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium">{student.email}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
                    <p className="font-medium">{student.program}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative p-6 backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-gray-600 dark:text-gray-400">Enrolled Courses</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {courses.length}
            </p>
          </div>
        </Card>

        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative p-6 backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-gray-600 dark:text-gray-400">Completed Assignments</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              {completedAssignments}/{totalAssignments}
            </p>
          </div>
        </Card>

        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative p-6 backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-gray-600 dark:text-gray-400">Current Semester</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {student.semester}
            </p>
          </div>
        </Card>
      </div>

      <Card className="relative overflow-hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5"></div>
        <div className="relative p-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Academic Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Enrollment Status</p>
              <p className="font-medium">{student.enrollmentStatus}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Semester Progress</p>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  style={{ width: `${(student.semester / 8) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}