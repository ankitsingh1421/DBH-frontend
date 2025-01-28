
import { OffersList } from './OffersList';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './HomeBanner.css';
import bannerData from '../Data/bannerData.json';


export const Offers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const leftClickHandle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
    );
  };

  var rightClickHandle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length)
  }

  const bannerImg = bannerData[currentIndex]?.url;

  return (
    // <section className="py-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900">
    <section className='py-20'>
      <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="text-purple-500">What We</span>{' '}
              <span className="text-white">Offer</span>
            </h2>
      {/* <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            
            <OffersList />
          </div>
          
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1621976360623-004223992275?auto=format&fit=crop&q=80&w=800"
              alt="Mobile app interface"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div> */}
    {/* <div className="home-banner-container mt-4 " >
    <div className="icon-left" onClick={leftClickHandle} style={{marginTop:"-180px"}}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="banner-home-img flex-row justify-center items-center " >
     
        <img className='pr-3 pl-3' src={bannerImg} alt='Banner'    
      style={{height:"400px"}}/>
        <div className="banner-bullets" style={{marginTop:"10px"}}>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 0 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 1 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 2 ? 'text-black' :''} icon={faCircleDot} />
          </div>
          <div className="banner-bullet " text-center>
            <FontAwesomeIcon className={currentIndex === 3 ? 'text-black' :''} icon={faCircleDot} />
          </div>
        </div>
      </div>
      <div className="icon-right" onClick={rightClickHandle} style={{marginTop:"-180px"}}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div> */}
 <div className="home-banner-container mt-4">
  <div className="icon-left" onClick={leftClickHandle} style={{ marginTop: "-180px" }}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
  
  <div className="banner-home-img flex-row justify-center items-center relative">
    {/* Banner Image */}
    <img
      className="pr-3 pl-3"
      src={bannerImg}
      alt="Banner"
      style={{ height: "400px" }}
    />
    
    {/* Bullet Points */}
    <div
      className="banner-bullets absolute flex justify-center"
      style={{ bottom: "20px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="banner-bullet text-center mx-1">
        <FontAwesomeIcon className={currentIndex === 0 ? "text-black" : ""} icon={faCircleDot} />
      </div>
      <div className="banner-bullet text-center mx-1">
        <FontAwesomeIcon className={currentIndex === 1 ? "text-black" : ""} icon={faCircleDot} />
      </div>
      <div className="banner-bullet text-center mx-1">
        <FontAwesomeIcon className={currentIndex === 2 ? "text-black" : ""} icon={faCircleDot} />
      </div>
      <div className="banner-bullet text-center mx-1">
        <FontAwesomeIcon className={currentIndex === 3 ? "text-black" : ""} icon={faCircleDot} />
      </div>
    </div>
  </div>
  
  <div className="icon-right" onClick={rightClickHandle} style={{ marginTop: "-180px" }}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
</div>


    </section>
  );
};