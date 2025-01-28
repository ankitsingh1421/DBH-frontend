import React from 'react';
import { Course } from './types/course';
import CourseCard from './CourseCard';

interface CourseListProps {
    courses: Course[];
    onCourseSelect: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onCourseSelect }) => {
    return (
        <div className=" home-container container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onClick={onCourseSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseList;