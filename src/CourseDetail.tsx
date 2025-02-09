import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from './components/Data/course';
import { Course } from './types/course';
import ChapterList from './ChapterList';
import CourseHighlights from './CourseHighlights';
import VideoPlayer from './VideoPlayer';
import './styles/course.css';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import ReviewComponent from './components/review/ReviewComponent';
import Morecourses from './components/more/Morecourses';
import './styles/loader.css'
import { ToastContainer, toast } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
import api from '../src/API' // Adjust the import path to where your api instance is defined
import axios from 'axios';

// Import Payment Failed and Payment Success components
import PaymentFailed from './components/Payment/PaymentFailed';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import { use } from 'framer-motion/client';
import Payment from './components/Payment/Payment';
import { CheckCircle } from 'lucide-react';
import Notification from './components/notification-ui/Notification';

interface CourseDetailProps {
    onWatchClick: (videoUrl: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
    const { id } = useParams(); // Get the course ID from URL params
    const [course, setCourse] = useState<Course | null>(null);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [buy, setBuy] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showPaymentPage, setShowPaymentPage] = useState<'success' | 'failed' | null>(null); // New state for payment status
    const [setBut, setSetBut] = useState(false);
    const [showNoti , setshowNoti] = useState(false);
    const navigate = useNavigate();
    const { user, isSignedIn } = useUser();

    useEffect(() => {
        if (showNoti) {
          const timer = setTimeout(() => setshowNoti(false), 3000); // Auto-close after 3 sec
          return () => clearTimeout(timer); // Cleanup on unmount
        }
      }, [showNoti]);
    useEffect(() => {
        const courseData = courses.find((course: any) => course.id === id);
        setCourse(courseData || null);

        // Scroll to top of the page on navigation
        window.scrollTo(0, 0);
    }, [id]); // Dependency ensures this runs when `id` changes

    if (!course) {
        return (
            <div className="overlay">
                <div className="loader"></div>
            </div>
        );
    }

    
    // Navigate to CoursePlayer
    const handleWatchClick = (videoUrl: string, chapterId: string) => {
        navigate(`/course/play/${id}`);
    };

    // Handle Enroll Course Button Click
    const handleEnrollClick = () => {
        // setShowPaymentModal(true);
        // toast.info("working in process")
         setshowNoti(true);
         // Show the payment modal when the user clicks "Enroll"
      };
      const handlePaymentDecision = (decision: 'yes' | 'no') => {
        setShowPaymentModal(false); // Close the payment modal
    
        if (decision === 'yes') {
          setShowPaymentPage('success'); // Show success page
          setBuy(true); // Enable the Resume Course button
          setTimeout(() => {
            setShowPaymentPage(null); // Close the payment page after 3 seconds
          }, 3000);
        } else {
          setShowPaymentPage('failed'); // Show failure page
          setTimeout(() => {
            setShowPaymentPage(null); // Close the payment page after 3 seconds
          }, 3000);
        }
      };

    // Handle redirect to other course details with loading state
    const handleCourseRedirect = (courseId: string) => {
        setIsLoading(true);
        // Set loading state to true
        setTimeout(() => {
            navigate(`/course/${courseId}`); // After 3 seconds, navigate to the new course
            setIsLoading(false); // Reset loading state
        }, 1000); // 1 second delay for loading
    };

    

    return (
        <div className="home-container min-h-screen">
            {/* Full-page overlay when loading */}
            {isLoading && (
                <div className="overlay">
                    <div className="loader"></div>
                </div>
            )}

            <Navbar />
            {/* Home Section */}
            <div id="home" className="flex flex-col items-center">
                <VideoPlayer
                    videoUrl={course.demoVideo}
                    title={`${course.title} - Course Preview`}
                    price={{
                        amount: course.price.amount,
                        originalAmount: course.price.originalAmount,
                        discount: course.price.discount,
                        currency: course.price.currency,
                    }}
                />

                <div className="flex gap-4 mt-6">
                    {isSignedIn ? (
                        buy ? (
                            <button
                            className={`${
                              buy ? 'bg-blue-600' : 'bg-green-600'
                            } text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition`}
                            onClick={buy ? () => handleWatchClick(course.chapters[0].videos[0].url, course.chapters[0].id) : handleEnrollClick}
                          >
                            {buy ? 'Resume Course' : 'Enroll Course'}
                          </button>
                        ) : (
                            <button
                                className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium transition"
                                onClick={handleEnrollClick} // Handle Enroll Click
                            >
                                Enroll Course
                            </button>
                        )
                    ) : (
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <span className="text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                                        Enroll Now
                                    </span>
                                </SignInButton>
                            </SignedOut>
                        </button>
                    )}


{showNoti && (
  <div
    className="fixed inset-0 bg-black/30 flex items-end justify-center z-50"
    onClick={() => setshowNoti(false)} // Close when clicking outside
  >
    <div
      className="absolute bottom-10 rounded-md shadow-lg"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <Notification
        type="info"
        message="work in process"
        onClose={() => setshowNoti(false)}
      />
    </div>
  </div>
)}


<button
  className="bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium transition"
>
  Watch Later
</button>
                </div>
            </div>
    
{showPaymentModal && <Payment handlePaymentDecision={handlePaymentDecision} />}

{/* Show Payment Page (Success or Failed) */}
{showPaymentPage === 'failed' && <PaymentFailed closeModal={() => setShowPaymentPage(null)} />}
{showPaymentPage === 'success' && <PaymentSuccess closeModal={() => setShowPaymentPage(null)} />}


            {/* Course Info Section */}
            <div id="about" className="home-container max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-white">{course.title}</h1>

                <CourseHighlights highlights={course.highlights} />

                {/* Syllabus Section */}
                <div id="courses" className="bg-transparent border border-gray-500 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h2>
                    <ChapterList
                        chapters={course.chapters}
                        activeChapter={0}
                        onChapterClick={() => { }}
                        onVideoClick={onWatchClick}
                    />
                </div>
            </div>

            {/* Reviews and More Courses Section */}
            <div>
                <h1
                    style={{
                        fontSize: "30px",
                        textAlign: "center",
                        fontWeight: "600",
                        color: "white",
                    }}
                >
                    Reviews and Testimonials
                </h1>
                <div>
                    <ReviewComponent courseId={id!} />
                </div>
                {/* More courses section */}
                <div>
                    {/* <Morecourses
                        courses={courses.filter((c) => c.id !== id)} // Exclude the current course
                        onCourseClick={handleCourseRedirect} // Handle redirection
                    /> */}
                </div>
            </div>

            <Footer />
            <ToastContainer />
        </div>
    );
};

export default CourseDetail;
