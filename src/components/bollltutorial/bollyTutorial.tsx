import React, { useRef, useState } from "react";

const BollyTutorial: React.FC = () => {
    // Correct embed video URLs
    const videoUrls = [
        "https://www.youtube.com/embed/m0BAwlQ189E",
        "https://www.youtube.com/embed/E5p6oBRmm30",
        "https://www.youtube.com/embed/1eFWZnMNHkk",
        "https://www.youtube.com/embed/LAPRwDscmoo",
    ];

    // Reference for the scrollable container
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // State to handle dragging
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse and Touch Event Handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Adjust scroll sensitivity
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen ">
            {/* Heading */}
            <div className="text-6xl font-bold flex justify-center text-white mb-8" style={{ marginTop: "100px" }}>
                Bollywood  <div className="text-purple-500 pl-4">Tutorial</div>
            </div>

            {/* Horizontal Scroll Section */}
            <div
                ref={scrollContainerRef}
                className="relative w-full max-w-5xl flex gap-8 overflow-x-auto scrollbar-hide p-4  rounded-lg"
                style={{ scrollBehavior: "smooth", cursor: isDragging ? "grabbing" : "grab" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* Video Cards */}
                {videoUrls.map((videoUrl, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[600px] bg-white shadow-lg rounded-lg overflow-hidden"
                        style={{ height: "400px" }}
                    >
                        <iframe
                            style={{ height: "400px" }}
                            className="w-full h-64"
                            src={videoUrl}
                            title={`YouTube Video ${index}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BollyTutorial;

