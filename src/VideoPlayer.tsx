import React from 'react';
import './components/Courses/Videoplayer.css'
import PriceCard from './components/PriceCard/PriceCard';
import './VideoPlayer.css'

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
    price: {
        amount: number;
        originalAmount: number;
        discount: string;
        currency: string;
    };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, price }) => {
    return (
        <div className="flex flex-col items-center mx-auto">
            <div
                className="w-[700px] h-[400px] bg-transparent rounded-lg overflow-hidden shadow-lg other"
                style={{ marginTop: '100px' }}
            >
                <img
                    style={{
                        borderRadius: "20px",
                    }}
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    alt={title}
                />

            </div>
            <div className='video-title-price-cls'>
                <h2 className="res-title bg-blur p-6 rounded-lg shadow-md text-xl text-white font-semibold mt-4 text-center">{title}</h2>
                <span className='flex-class-card justify-center mt-4'>
                    <PriceCard
                        price={price.amount}
                        originalPrice={price.originalAmount}
                        discount={price.discount}
                        currency={price.currency}
                    />
                </span>

            </div>
        </div>
    );
};

export default VideoPlayer;
