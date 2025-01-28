import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CourseHighlightsProps {
  highlights: string[];
}

const CourseHighlights: React.FC<CourseHighlightsProps> = ({ highlights }) => {
  return (
    <div className="  bg-navy-950 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-4">About this Course</h2>
      <ul className="space-y-2 " >
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center text-white">
            <ChevronRight className="text-purple-500 mr-2" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseHighlights;