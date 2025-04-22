import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './data/blogPosts';
import { Calendar } from 'lucide-react';
import { Navbar } from '../components/Navbar/Navbar';
import './Home.css'
import '../styles/blogbutton.css'
import Footer from '../components/Footer/Footer';
const BlogList = () => {
  return (
    <div className="container    mx-auto  py-2 px-2 home-container">
        <div style={{marginTop:"-10px"}} >
     <Navbar/>
     </div>
     <div className="hero-and-description flex flex-col gap-1 items-center justify-center my-20">
            <h1 className="hero w-fit h-fit text-2xl sm:text-3xl md:text-4xl font-bold text-center text-wrap text-neutral-800 ">
            <button className="btn-53">
  <div className="original text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Melody Journal 🎵 </div>
  <div className="letters">
  <div className="flex">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">M</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">e</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">l</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">o</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">d</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">y</span>
  </div>

  <div className="ml-2"> {/* Adds margin-left for spacing */}
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'> Journal 🎵</span>
  </div>
  </div>
</button>

            </h1>
          </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
      
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
              <div className="mt-4 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
     <div className='mt-10 '>
     <Footer/>
     </div>
    </div>
  );
};

export default BlogList;