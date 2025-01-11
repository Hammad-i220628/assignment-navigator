import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Announcements() {
  const { announcements, courses, markAnnouncementRead } = useStore();

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.read === b.read) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.read ? 1 : -1;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Announcements</h1>
      <div className="space-y-4">
        {sortedAnnouncements.map((announcement) => {
          const course = courses.find((c) => c.id === announcement.courseId);
          return (
            <Card 
              key={announcement.id} 
              className={`p-6 ${!announcement.read ? 'border-l-4 border-accent' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{announcement.title}</h3>
                  <p className="text-gray-600 mb-2">{announcement.content}</p>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <p>Course: {course?.title}</p>
                    <p>Posted: {announcement.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    announcement.read ? 'bg-gray-100 text-gray-800' : 'bg-accent text-white'
                  }`}>
                    {announcement.read ? 'Read' : 'New'}
                  </span>
                  {!announcement.read && (
                    <Button
                      onClick={() => markAnnouncementRead(announcement.id)}
                      variant="outline"
                      size="sm"
                    >
                      Mark as Read
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