import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import CourseDetail from './CourseDetail'; // Import your course details component
import ChapterPlayer from './ChapterPlayer';
import Waiting from './pages/Waiting';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import PageError from './pages/PageError';



function App() {
  return (
    <Router>
      <div className="content bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for course details */}
          <Route path="/course/:id" element={<CourseDetail />} />

          {/* New route for playing video */}
          <Route path="/course/play/:id" element={<ChapterPlayer />} />

          
          <Route path="/my-course" element={< PageError/>} />
          <Route path="/saved-course" element={<PageError />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
