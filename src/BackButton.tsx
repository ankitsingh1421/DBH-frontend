import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    onClick?: () => void; // Made optional
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Redirect to home page
        if (onClick) onClick(); // Call the passed onClick handler if provided
    };

    return (
        <button
            style={{ marginTop: "100px", borderRadius: "10px", width: "100px" }}
            onClick={handleBackClick}
            className="fixed top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3  shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 z-10 hidden md:block"
        >
            Back
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />

        </button>
    );
};

export default BackButton;
