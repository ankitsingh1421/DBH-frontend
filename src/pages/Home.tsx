import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Welcome } from '../components/Welcome/Welcome';
import { Vision } from '../components/Vision/Vision';
import Courses from '../components/Courses/Courses';
import { Offers } from '../components/Offers/offers';
import Internship from '../Internship/Internship';
import About from '../components/about/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './Home.css'
import YouTubeVideos from '../components/youtube/Yt';
import CoverSongs from '../components/coverSongs/CoverSongs';
import BollyTutorial from '../components/bollltutorial/bollyTutorial';



export function Home() {
  return (
    <div className="home-container bg-navy-950 min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Vision />
      {/* <Offers /> */}
      <Internship />
      <YouTubeVideos />
      {/* <CoverSongs/>
      <BollyTutorial/> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
