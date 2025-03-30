import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './data/blogPosts';
import { Calendar, ThumbsUp, ThumbsDown } from 'lucide-react';
import './Home.css';
import Footer from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
      </div>
    );
  }

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
    }
    setDisliked(!disliked);
  };

  return (
    <div className="home-container min-h-screen flex flex-col">
      <Navbar />
      <article className="container mx-auto px-4 py-8 max-w-4xl flex-1">
        <div className="w-full rounded-lg overflow-hidden mb-8 mt-20">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 text-center">{post.title}</h1>
          <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col sm:flex-row items-center text-gray-400 text-sm mb-4 justify-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
          <span className="hidden sm:block">•</span>
          <span>2 min read</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-800 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 text-center sm:text-left leading-relaxed">
          <p>{post.content}</p>
        </div>
        <div className="flex justify-center sm:justify-start items-center gap-4 mt-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${liked ? 'bg-blue-600' : 'bg-gray-700 hover:bg-blue-500'}`}
          >
            <ThumbsUp className="w-5 h-5" /> {likes}
          </button>
          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${disliked ? 'bg-red-600' : 'bg-gray-700 hover:bg-red-500'}`}
          >
            <ThumbsDown className="w-5 h-5" /> {dislikes}
          </button>
        </div>
      </article>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
