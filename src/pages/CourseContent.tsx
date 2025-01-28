import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { Course } from '../types/course';
import ChapterList from '../components/ChapterList';
import { useVideoState } from '../hooks/useVideoState';

interface CourseContentProps {
  course: Course;
}

const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const { videoState, updateVideo } = useVideoState();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar with Content List */}
      <div className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Course Content</h2>
          <ChapterList
            chapters={course.chapters}
            activeChapter={activeChapter}
            onChapterClick={setActiveChapter}
            onVideoClick={updateVideo}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <VideoPlayer
          videoUrl={videoState.url}
          title={videoState.title}
        />
      </div>
    </div>
  );
};

export default CourseContent;