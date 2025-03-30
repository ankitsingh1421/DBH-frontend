export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of Music: How Genres Have Transformed Over Time',
    date: 'Mar 29, 2025',
    excerpt: 'From classical symphonies to electronic beats, music has constantly evolved, shaping cultures and emotions across generations.',
    content: 'Music has been an essential part of human culture for centuries, evolving with time, technology, and societal changes. In the early days, classical compositions by artists like Mozart and Beethoven dominated the scene, focusing on intricate symphonies and orchestral arrangements. As time progressed, blues and jazz emerged, introducing improvisation and soul into music. The 1950s and 60s witnessed the birth of rock and roll, with legends like The Beatles and Elvis Presley revolutionizing the industry. The late 20th century saw the rise of hip-hop, pop, and electronic music, fueled by new digital production techniques. Today, streaming services and AI-driven music creation have changed the way artists produce and distribute songs, making music more accessible than ever. Genres continue to blend, giving rise to new styles like lo-fi hip-hop, synthwave, and hyperpop. Music’s evolution reflects society’s growth, allowing artists to experiment and audiences to experience diverse sounds from around the world. No matter the era, music remains a universal language that connects people, evokes emotions, and continues to evolve with time.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000',
    tags: ['music', 'evolution', 'genres']
},

];