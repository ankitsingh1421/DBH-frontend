// import React from "react";

// const InternshipCards = ({ img, title }) => {
//   return (
//     <div className="intern-card bg-gray-100 dark:bg-card-dark dark:border dark:border-white shadow-lg rounded-3xl p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//       {/* Card Image */}
//       <img
//         src={img}
//         alt={title}
//         className="w-full h-[200px] object-cover rounded-md mb-4 transition-opacity duration-300 hover:opacity-90"
//       />

//       {/* Card Title */}
//       <p className="text-lg font-semibold text-gray-800 dark:text-card-text-dark bg-white dark:bg-card-title-dark px-4 py-2 rounded-lg shadow-sm text-center transition-colors duration-300">
//         {title}
//       </p>

//       {/* Enroll Now Button */}
//       <a
//         href="https://forms.gle/z1p7zYR9Juekuy327"
//         className="mt-4 px-6 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-[#233142] rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300"
//       >
//         Enroll Now
//       </a>
//     </div>
//   );
// };

// export default InternshipCards;



// import React from 'react';
// import { course } from '../components/Data/Coursedata.json'

// interface CourseCardProps {
//   course: Course;
//   onClick: (course: Course) => void;
// }

// const InternshipCards: React.FC<CourseCardProps> = ({ course, onClick }) => {
//   return (
//     <div
//       className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
//       onClick={() => onClick(course)}
//     >
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{course.title}</h3>
//         <p className="text-gray-600 mb-4">{course.description}</p>
//         <div className="flex justify-between items-center">
//           {/* <span className="text-purple-600 font-semibold">
//             {course.chapters.length} chapters
//           </span> */}
//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipCards;












// import React from 'react';

// // Define the structure for your course data
// interface Course {
//   id: string;
//   img: string;
//   title: string;
//   description: string;
// }

// interface CourseCardProps {
//   course: Course;
//   onClick: (course: Course) => void;
// }

// const InternshipCards: React.FC<CourseCardProps> = ({ course, onClick }) => {
//   return (
//     <div
//       className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
//       onClick={() => onClick(course)}
//     >
//       <img
//         src={course.img} // Corrected to use 'img' instead of 'image'
//         alt={course.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{course.title}</h3>
//         <p className="text-gray-600 mb-4">{course.description}</p>
//         <div className="flex justify-between items-center">

//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipCards;



import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Define the structure for your course data
interface Course {
  id: string;
  img: string;
  title: string;
  description: string;
}

interface CourseCardProps {
  course: Course;
}

const InternshipCards: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <Link to={`/course/${course.id}`}> {/* Link to course details page */}
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-48 "
          style={{ objectFit: "cover" }}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex justify-between items-center">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Know More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InternshipCards;

