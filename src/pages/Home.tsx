import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Welcome } from '../components/Welcome/Welcome';
import { Vision } from '../components/Vision/Vision';
import Internship from '../Internship/Internship';
import About from '../components/about/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './Home.css'
import YouTubeVideos from '../components/youtube/FacilitiesSection';



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
