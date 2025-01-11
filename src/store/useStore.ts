import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Course {
  id: string;
  title: string;
  progress: number;
  instructor: string;
  description: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  content: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  completed: boolean;
  description: string;
}

export interface Announcement {
  id: string;
  courseId: string;
  title: string;
  content: string;
  date: string;
  read: boolean;
}

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  email: string;
  enrollmentStatus: string;
  program: string;
  semester: number;
}

interface Store {
  student: Student;
  courses: Course[];
  assignments: Assignment[];
  announcements: Announcement[];
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  markAssignmentComplete: (id: string) => void;
  markAnnouncementRead: (id: string) => void;
}

// Mock data
const mockStudent: Student = {
  id: "1",
  name: "Sarah Khan",
  rollNo: "2021-CS-123",
  email: "sarah.khan@university.edu",
  enrollmentStatus: "Active",
  program: "Computer Science",
  semester: 5,
};

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Advanced Web Development",
    progress: 65,
    instructor: "Dr. Ali Ahmed",
    description: "Learn modern web development techniques and frameworks",
    modules: [
      {
        id: "m1",
        title: "React Fundamentals",
        content: "Introduction to React and its core concepts",
      },
      {
        id: "m2",
        title: "State Management",
        content: "Understanding state management in React applications",
      },
    ],
  },
  {
    id: "2",
    title: "Data Structures",
    progress: 45,
    instructor: "Prof. Fatima Zahra",
    description: "Comprehensive study of data structures and algorithms",
    modules: [
      {
        id: "m3",
        title: "Arrays and Linked Lists",
        content: "Understanding basic data structures",
      },
      {
        id: "m4",
        title: "Trees and Graphs",
        content: "Advanced data structures and their applications",
      },
    ],
  },
  {
    id: "3",
    title: "Database Systems",
    progress: 80,
    instructor: "Dr. Hassan Malik",
    description: "Database design and management principles",
    modules: [
      {
        id: "m5",
        title: "SQL Fundamentals",
        content: "Basic SQL queries and database operations",
      },
      {
        id: "m6",
        title: "Database Design",
        content: "Principles of database design and normalization",
      },
    ],
  },
];

const mockAssignments: Assignment[] = [
  {
    id: "a1",
    courseId: "1",
    title: "React Project",
    dueDate: "2024-02-20",
    completed: false,
    description: "Build a simple React application with state management",
  },
  {
    id: "a2",
    courseId: "2",
    title: "Implementation of Binary Trees",
    dueDate: "2024-02-25",
    completed: false,
    description: "Implement a binary tree with basic operations",
  },
  {
    id: "a3",
    courseId: "3",
    title: "Database Design Project",
    dueDate: "2024-02-28",
    completed: true,
    description: "Design a database schema for a library management system",
  },
];

const mockAnnouncements: Announcement[] = [
  {
    id: "an1",
    courseId: "1",
    title: "Project Deadline Extended",
    content: "The deadline for the React project has been extended by one week.",
    date: "2024-02-15",
    read: false,
  },
  {
    id: "an2",
    courseId: "2",
    title: "Extra Tutorial Session",
    content: "Additional tutorial session on Binary Trees this Saturday.",
    date: "2024-02-14",
    read: false,
  },
];

export const useStore = create<Store>()(
  persist(
    (set) => ({
      student: mockStudent,
      courses: mockCourses,
      assignments: mockAssignments,
      announcements: mockAnnouncements,
      selectedCourseId: null,
      setSelectedCourseId: (id) => set({ selectedCourseId: id }),
      markAssignmentComplete: (id) =>
        set((state) => ({
          assignments: state.assignments.map((assignment) =>
            assignment.id === id
              ? { ...assignment, completed: true }
              : assignment
          ),
        })),
      markAnnouncementRead: (id) =>
        set((state) => ({
          announcements: state.announcements.map((announcement) =>
            announcement.id === id
              ? { ...announcement, read: true }
              : announcement
          ),
        })),
    }),
    {
      name: 'student-dashboard-storage',
    }
  )
);