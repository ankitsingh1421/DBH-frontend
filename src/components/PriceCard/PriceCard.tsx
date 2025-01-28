import React from "react";

interface PriceCardProps {
    price: number;
    originalPrice: number;
    discount: string;
    currency: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ price, originalPrice, discount, currency }) => {
    return (
        <div className="bg-blur p-6 rounded-lg shadow-md w-80   " style={{ marginLeft: '00px' }}>
            <div className="text-sm text-gray-200 uppercase mb-2">Price</div>
            <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-white">{currency}{price}</span>
                <span className="text-gray-400 line-through text-lg">{currency}{originalPrice}</span>
                <span className="text-green-600 text-xl font-semibold">{discount} off</span>
            </div>

        </div>
    );
};
 
export default PriceCard;




// import React, { useState } from "react";

// interface CourseOption {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice: number;
//   discount: string;
//   currency: string;
// }

// const courseOptions: CourseOption[] = [
//   { id: "crash", name: "Crash Course", price: 10000, originalPrice: 15000, discount: "33%", currency: "INR" },
//   { id: "diploma", name: "Diploma", price: 20000, originalPrice: 30000, discount: "33%", currency: "INR" },
//   { id: "degree", name: "Degree", price: 50000, originalPrice: 75000, discount: "33%", currency: "INR" },
//   { id: "superDegree", name: "Super Degree", price: 100000, originalPrice: 150000, discount: "33%", currency: "INR" },
// ];

// const PriceCard: React.FC = () => {
//   const [selectedCourse, setSelectedCourse] = useState<CourseOption>(courseOptions[0]);

//   const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selected = courseOptions.find((course) => course.id === e.target.value);
//     if (selected) {
//       setSelectedCourse(selected);
//     }
//   };

//   return (
//     <div className="bg-blur p-6 rounded-lg shadow-md w-80">
//       {/* Dropdown for course selection */}
//       <div className="mb-4">
//         <select
//           id="course-select"
//           className="w-full p-2 rounded bg-gray-700 text-white"
//           value={selectedCourse.id}
//           onChange={handleCourseChange}
//         >
//           {courseOptions.map((course) => (
//             <option key={course.id} value={course.id}>
//               {course.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Price display */}
//       <div>
//         <div className="text-sm text-gray-200 uppercase mb-2">Price</div>
//         <div className="flex items-center space-x-2">
//           <span className="text-3xl font-bold text-white">
//             {selectedCourse.currency}
//             {selectedCourse.price}
//           </span>
//           <span className="text-gray-400 line-through text-lg">
//             {selectedCourse.currency}
//             {selectedCourse.originalPrice}
//           </span>
//           <span className="text-green-600 text-xl font-semibold">{selectedCourse.discount} off</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceCard;
