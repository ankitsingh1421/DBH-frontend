// import React from 'react';

// const courses = [
//     {
//         id: "1",
//         img: "/synthesizer.jpeg",
//         title: "Synthesizer",
//         description: "Unlock the magic of electronic melodies and create immersive soundscapes",
//     },
//     {
//         id: "2",
//         img: "/Guitar.jpeg",
//         title: "Guitar",
//         description: "Strum your way to soulful expressions and captivating tunes",
//     },
//     // Add the rest of the courses here...
// ];
// interface MoreCoursesProps {
//     courses: Course[];
//     onCourseClick: (courseId: string) => void;
// }

// const Morecourses: React.FC<MoreCoursesProps> = ({ courses, onCourseClick }) => {
//     return (
//         <div className="more-courses-container bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-white">Explore More Courses</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {courses.map((course) => (
//                     <div
//                         className="course-card bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition cursor-pointer"
//                         key={course.id}
//                         onClick={() => onCourseClick(course.id)}
//                     >
//                         <img
//                             src={course.img} // Ensure the path is correct
//                             alt={course.title}
//                             className="w-full h-48 rounded-md"
//                             style={{ objectFit: "cover" }}
//                         />
//                         <h3 className="text-xl font-bold text-white mt-2">{course.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// export default Morecourses;
import React from "react";
import coursesData from '../Data/Coursedata.json'

interface Course {
    id: string;
    img: string;
    title: string;
    description: string;
}

interface MoreCoursesProps {
    onCourseClick: (courseId: string) => void;
}

const Morecourses: React.FC<MoreCoursesProps> = ({ onCourseClick }) => {
    return (
        <div className="more-courses-container bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Explore More Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.map((course: Course) => (
                    <div
                        className="course-card bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition cursor-pointer"
                        key={course.id}
                        onClick={() => onCourseClick(course.id)}
                    >
                        <img
                            src={course.img} // Ensure the path is correct
                            alt={course.title}
                            className="w-full h-48 rounded-md"
                            style={{ objectFit: "cover" }}
                        />
                        <h3 className="text-xl font-bold text-white mt-2">{course.title}</h3>
                        <p className="text-sm text-gray-300 mt-1">{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Morecourses;

