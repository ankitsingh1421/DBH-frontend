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
    const navigate = useNavigate();
    const { user, isSignedIn } = useUser();


    const course_Id = id;
    const user_Id = user?.id


    const createPayment = async (user_Id, course_Id) => {
        try {
            const response = await fetch("http://localhost:5000/course/purchase", {  // Replace with your actual backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_Id: user_Id,
                    course_Id: course_Id,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Payment failed");
            }

            setShowPaymentPage('success');
            setBuy(true); // Enable the Resume Course button

            setTimeout(() => {
                setShowPaymentPage(null); // Close the payment page after 3 seconds
            }, 3000);

        } catch (error) {
            console.error("Payment Error:", error);
        }
    };




    const fetchPurchaseInfo = async () => {
        try {
            const response = await fetch(    `http://localhost:5000/course/purchase/info/${user_Id}/${course_Id}`
                , {  // Replace with your actual backend URL
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                
            });

            const data = await response.json();
            console.log("Payment finded",data.payment.Payment)

            const paymentStatus = data.payment.Payment;
            if(paymentStatus){
                setBuy(true)
            }else{
                setBuy(false);
            }

            if (!response.ok) {
                throw new Error(data.message || "Payment not found");
                setBuy(false)
            }


        } catch (error) {
            console.error("Payment done catch error", error);
            setBuy(false)
        }
    };


    // Call the function inside useEffect
    useEffect(() => {
        fetchPurchaseInfo()
    }, []);




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
        setShowPaymentModal(true);
        // toast.info("working in process")
        // Show the payment modal when the user clicks "Enroll"
    };
    const handlePaymentDecision = (decision: 'yes' | 'no') => {
        setShowPaymentModal(false); // Close the payment modal

        if (decision === 'yes') {
            createPayment(user_Id, course_Id); // Show success page
           
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
                                className={`${buy ? 'bg-blue-600' : 'bg-green-600'
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
