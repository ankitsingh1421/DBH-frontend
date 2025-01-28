import { Course } from '../../types/course';

export const courses: Course[] = [
    {
        id: '1',
        idNAme: "Synthesizer",
        title: 'Mastering the Synthesizer: A Bollywood Perspective',
        description: 'This comprehensive synthesizer program from Decoding Bollywood Hits Academy equips you with the skills to master the art of playing the synthesizer, with a special focus on Bollywood music. From understanding the instrument\'s basics to crafting iconic Bollywood melodies, this course is tailored for aspiring musicians and professionals alike.',
        image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800&q=80',
        demoVideo: '/comingsoon.jpeg',
        price: {
            amount: 999,
            originalAmount: 1999,
            discount: "50%",
            currency: "INR",
        },
        highlights: [
            'Instrument Fundamentals: Learn the structure and functions of a synthesizer.',
            'Bollywood Styling: Understand the unique textures and sounds of Bollywood music.',
            'Creative Compositions: Develop skills to create captivating tunes and background scores.',
            'Live Performance Training: Gain confidence to perform on stage.',
            'Recording Techniques: Learn studio methods to produce high-quality tracks.'
        ],
        chapters: [
            {
                id: 1,
                title: 'Introduction to the Synthesizer',
                videos: [
                    {
                        id: 'v1',
                        title: 'History and evolution of the synthesizer',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Components and controls',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v3',
                        title: 'Understanding sound synthesis',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Foundational Skills',
                videos: [
                    {
                        id: 'v4',
                        title: 'Keyboard techniques and finger exercises',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v5',
                        title: 'Scales, chords, and arpeggios',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v6',
                        title: 'Reading sheet music',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 3,
                title: 'Bollywood Soundscapes',
                videos: [
                    {
                        id: 'v7',
                        title: 'Analyzing Bollywood music styles',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v8',
                        title: 'Iconic synthesizer riffs in Bollywood songs',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v9',
                        title: 'Recreating classic Bollywood melodies',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 4,
                title: 'Advanced Techniques',
                videos: [
                    {
                        id: 'v10',
                        title: 'Layering and modulation',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v11',
                        title: 'Using effects to enhance sound',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v12',
                        title: 'Creating ambient and dynamic textures',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 5,
                title: 'Composition and Arrangement',
                videos: [
                    {
                        id: 'v13',
                        title: 'Structuring melodies for Bollywood tracks',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v14',
                        title: 'Harmonizing with other instruments',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v15',
                        title: 'Building engaging music pieces',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 6,
                title: 'Studio and Live Performance',
                videos: [
                    {
                        id: 'v16',
                        title: 'Synthesizer setup for live shows',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v17',
                        title: 'Recording and mixing in a studio environment',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v18',
                        title: 'Tips for a captivating stage presence',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 7,
                title: 'Final Project and Showcase',
                videos: [
                    {
                        id: 'v19',
                        title: 'Create your own Bollywood-style composition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v20',
                        title: 'Perform or record your piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v21',
                        title: 'Receive personalized feedback',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        idNAme: "Guitar",
        title: 'Bollywood Guitar Mastery: Strumming the Heart of Music',
        description: 'Explore the magic of the guitar with a Bollywood twist! This program at Decoding Bollywood Hits Academy teaches you to play iconic Bollywood melodies and rhythms while building a strong foundation in guitar techniques. From soulful ballads to foot-tapping hits, this course will transform you into a versatile guitarist with a Bollywood edge.',
        image: 'https://images.unsplash.com/photo-1593696140820-062e5f3341a3?auto=format&fit=crop&w=800&q=80',
        demoVideo: '/comingsoon.jpeg',
        price: {
            amount: 999,
            originalAmount: 1999,
            discount: "50%",
            currency: "INR",
        },
        highlights: [
            'Essential Guitar Techniques: Master chords, scales, and strumming patterns.',
            'Bollywood Styles: Learn to play famous Bollywood songs across genres.',
            'Improvisation Skills: Develop the ability to create unique riffs and solos.',
            'Performance Training: Build confidence to perform live.',
            'Music Theory Simplified: Understand how music works to enhance your playing.'
        ],
        chapters: [
            {
                id: 1,
                title: 'Getting Started with the Guitar',
                videos: [
                    {
                        id: 'v1',
                        title: 'Introduction to the guitar and its parts',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Tuning and maintenance',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v3',
                        title: 'Basic posture and finger positioning',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Building the Basics',
                videos: [
                    {
                        id: 'v4',
                        title: 'Fundamental chords and transitions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v5',
                        title: 'Basic strumming patterns and rhythm exercises',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v6',
                        title: 'Introduction to reading tablature',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 3,
                title: 'Bollywood Strumming Styles',
                videos: [
                    {
                        id: 'v7',
                        title: 'Understanding Bollywood rhythms',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v8',
                        title: 'Strumming patterns for classic and modern hits',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v9',
                        title: 'Playing popular Bollywood chord progressions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 4,
                title: 'Melodic Fingerstyle Techniques',
                videos: [
                    {
                        id: 'v10',
                        title: 'Plucking and fingerpicking basics',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v11',
                        title: 'Recreating iconic Bollywood melodies',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v12',
                        title: 'Combining melody and rhythm',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 5,
                title: 'Lead Guitar and Improvisation',
                videos: [
                    {
                        id: 'v13',
                        title: 'Scales for Bollywood solos',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v14',
                        title: 'Techniques for bending, sliding, and hammer-ons',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v15',
                        title: 'Crafting your own Bollywood-style solos',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 6,
                title: 'Performance and Song Practice',
                videos: [
                    {
                        id: 'v16',
                        title: 'Learning complete Bollywood songs',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v17',
                        title: 'Playing with backing tracks',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v18',
                        title: 'Performance tips and stage presence',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 7,
                title: 'Advanced Guitar Techniques',
                videos: [
                    {
                        id: 'v19',
                        title: 'Barre chords and advanced transitions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v20',
                        title: 'Understanding Bollywood fusion genres',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v21',
                        title: 'Experimenting with effects for Bollywood sound',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 8,
                title: 'Final Showcase and Review',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        idNAme: "Indian Classical Music",
        title: 'Indian Classical Music',
        description: 'Explore the magic of the guitar with a Bollywood twist! This program at Decoding Bollywood Hits Academy teaches you to play iconic Bollywood melodies and rhythms while building a strong foundation in guitar techniques. From soulful ballads to foot-tapping hits, this course will transform you into a versatile guitarist with a Bollywood edge.',
        image: 'https://images.unsplash.com/photo-1593696140820-062e5f3341a3?auto=format&fit=crop&w=800&q=80',
        demoVideo: '/comingsoon.jpeg',
        price: {
            amount: 999,
            originalAmount: 1999,
            discount: "50%",
            currency: "INR",
        },
        highlights: [
            'Comprehensive Understanding: In-depth lessons on Indian classical music and its influence on Bollywood songs',
            'Raga Exploration: Detailed study of major ragas and their application in popular Bollywood hits',
            'Rhythm and Tala: Learn the importance of rhythm and tala (time cycles) in shaping Bollywood music',
            'Interactive Learning: Opportunities for practical application, including music analysis and performance',
            'MCelebrity Guest Sessions: Hear from renowned musicians and composers who have bridged classical and Bollywood music'
        ],
        chapters: [
            {
                id: 1,
                title: 'Celebrity Guest Sessions: Hear from renowned musicians and composers who have bridged classical and Bollywood music',
                videos: [
                    {
                        id: 'v1',
                        title: 'Introduction to the guitar and its parts',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Tuning and maintenance',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v3',
                        title: 'Basic posture and finger positioning',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Ragas and Bollywood: From Tradition to Innovation Tala and Rhythmic Patterns',
                videos: [
                    {
                        id: 'v4',
                        title: 'Fundamental chords and transitions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v5',
                        title: 'Basic strumming patterns and rhythm exercises',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v6',
                        title: 'Introduction to reading tablature',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 3,
                title: 'The Beat of Bollywood: Tala in Film Music Classical Elements in Melody and Harmony',
                videos: [
                    {
                        id: 'v7',
                        title: 'Understanding Bollywood rhythms',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v8',
                        title: 'Strumming patterns for classic and modern hits',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v9',
                        title: 'Playing popular Bollywood chord progressions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 4,
                title: 'Classical Melodies: The Soul of Bollywood Songs Voice and Instrumentation: A Classical Approach',
                videos: [
                    {
                        id: 'v10',
                        title: 'Plucking and fingerpicking basics',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v11',
                        title: 'Recreating iconic Bollywood melodies',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v12',
                        title: 'Combining melody and rhythm',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 5,
                title: 'Voice and Instruments: The Classical Sound in Bollywood Famous Bollywood Composers and Their Classical Influence',
                videos: [
                    {
                        id: 'v13',
                        title: 'Scales for Bollywood solos',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v14',
                        title: 'Techniques for bending, sliding, and hammer-ons',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v15',
                        title: 'Crafting your own Bollywood-style solos',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 6,
                title: 'Composers Who Redefined Bollywood with Classical Music Fusion of Classical and Contemporary Elements',
                videos: [
                    {
                        id: 'v16',
                        title: 'Learning complete Bollywood songs',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v17',
                        title: 'Playing with backing tracks',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v18',
                        title: 'Performance tips and stage presence',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 7,
                title: 'The Classical-Contemporary Fusion in Modern Bollywood Hits Understanding Bollywood Songs Through Classical Theory',
                videos: [
                    {
                        id: 'v19',
                        title: 'Barre chords and advanced transitions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v20',
                        title: 'Understanding Bollywood fusion genres',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v21',
                        title: 'Experimenting with effects for Bollywood sound',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 8,
                title: 'Decoding Bollywood: Analyzing Hits Through Classical Lenses Practical Application: Creating Bollywood-Inspired Classical Music',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }, {
                id: 9,
                title: 'Crafting Your Own Bollywood Hit: A Classical Approach The Future of Indian Classical Music in Bollywood',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }, {
                id: 10,
                title: 'The Evolution and Future of Classical Music in Bollywood',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        title: 'The Classiwood Music',
        idNAme: "Classiwood Music",
        description: 'Explore the magic of the guitar with a Bollywood twist! This program at Decoding Bollywood Hits Academy teaches you to play iconic Bollywood melodies and rhythms while building a strong foundation in guitar techniques. From soulful ballads to foot-tapping hits, this course will transform you into a versatile guitarist with a Bollywood edge.',
        image: 'https://images.unsplash.com/photo-1593696140820-062e5f3341a3?auto=format&fit=crop&w=800&q=80',
        demoVideo: '/comingsoon.jpeg',
        price: {
            amount: 999,
            originalAmount: 1999,
            discount: "50%",
            currency: "INR",
        },
        highlights: [
            'Comprehensive Learning: A unique fusion of two rich musical worlds — Indian Classical and Bollywood.',
            'Interactive Modules: Practical sessions for vocal and instrumental training',
            'Creative Integration: Lessons on blending classical ragas into Bollywood compositions',
            'Performance-Based Approach: Focus on stage presence and live performance skills',
            'Expert Guidance: Learn from seasoned professionals in Indian Classical and Bollywood music',
            'Cultural Appreciation: Deepen your understanding of Indias rich musical heritage',
            'Flexible for All Levels: Tailored content for beginners, intermediates, and advanced learners'
        ],
        chapters: [
            {
                id: 1,
                title: 'The Roots of Melody',
                videos: [
                    {
                        id: 'v1',
                        title: 'Indian Classical Basics',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Tuning and maintenance',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v3',
                        title: 'Basic posture and finger positioning',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Bollywood Golden Notes',
                videos: [
                    {
                        id: 'v4',
                        title: 'An Evolution',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v5',
                        title: 'Basic strumming patterns and rhythm exercises',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v6',
                        title: 'Introduction to reading tablature',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 3,
                title: 'Ragas in Spotlight',
                videos: [
                    {
                        id: 'v7',
                        title: 'The Bollywood Connection',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v8',
                        title: 'Strumming patterns for classic and modern hits',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v9',
                        title: 'Playing popular Bollywood chord progressions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 4,
                title: 'Singing with Soul',
                videos: [
                    {
                        id: 'v10',
                        title: 'Techniques and Expression',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v11',
                        title: 'Recreating iconic Bollywood melodies',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v12',
                        title: 'Combining melody and rhythm',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 5,
                title: 'Strings and Beats',
                videos: [
                    {
                        id: 'v13',
                        title: 'Classical Instruments in Bollywood',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v14',
                        title: 'Techniques for bending, sliding, and hammer-ons',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v15',
                        title: 'Crafting your own Bollywood-style solos',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 6,
                title: 'Crafting Fusion',
                videos: [
                    {
                        id: 'v16',
                        title: 'The Art of Composition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v17',
                        title: 'Playing with backing tracks',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v18',
                        title: 'Performance tips and stage presence',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 7,
                title: 'Lights, Camera, Sing',
                videos: [
                    {
                        id: 'v19',
                        title: 'Performance Skills',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v20',
                        title: 'Understanding Bollywood fusion genres',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v21',
                        title: 'Experimenting with effects for Bollywood sound',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 8,
                title: 'Blending Horizons',
                videos: [
                    {
                        id: 'v22',
                        title: 'Classiwood’s Future',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }, {
                id: 9,
                title: 'Crafting Your Own Bollywood Hit: A Classical Approach The Future of Indian Classical Music in Bollywood',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }, {
                id: 10,
                title: 'The Evolution and Future of Classical Music in Bollywood',
                videos: [
                    {
                        id: 'v22',
                        title: 'Perform your favorite Bollywood piece',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v23',
                        title: 'Receive feedback and suggestions for improvement',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v24',
                        title: 'Certificate of completion and performance recognition',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    },
    {
        id: '5',
        title: ' Tabla ',
        idNAme: "Tabla",
        description: 'The Tabla Curriculum at Decoding Bollywood Hits Academy is an immersive program focused on mastering the art of tabla playing with a unique Bollywood twist. This program explores traditional rhythms and their fusion into Bollywood music, providing both theoretical and practical training.',
        image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800&q=80',
        demoVideo: '/comingsoon.jpeg',
        price: {
            amount: 999,
            originalAmount: 1999,
            discount: "50%",
            currency: "INR",
        },
        highlights: [
            'In-Depth Tabla Training: Detailed lessons on technique, rhythm, and improvisation.',
            'Bol Patterns & Rhythms: Explore the fundamental rhythm structures of tabla.',
            'Bollywood Fusion: Discover how tabla integrates with Bollywood compositions.',
            'Taal Mastery: Understand classical taals and their application in modern music.',
            'Live Demonstrations: Sessions with seasoned tabla maestros.',
            'Interactive Practice: Play along with Bollywood tracks and fellow students.',
            'Music Analysis: Breakdown of iconic Bollywood tracks featuring tabla.'
        ],
        chapters: [
            {
                id: 1,
                title: 'Introduction to the Tabla: History and Basics',
                videos: [
                    {
                        id: 'v1',
                        title: 'Understanding the tabla’s origins and importance',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Parts of the tabla and their functions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Fundamentals of Tabla Playing: Postures and Techniques',
                videos: [
                    {
                        id: 'v3',
                        title: 'Correct hand postures for tabla playing',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v4',
                        title: 'Basic hand strokes and sounds',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 3,
                title: 'Tabla Bol Patterns: The Language of Rhythm',
                videos: [
                    {
                        id: 'v5',
                        title: 'Learning the essential bol patterns',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v6',
                        title: 'Combining bol patterns for improvisation',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 4,
                title: 'Introduction to Taal: Rhythmic Cycles',
                videos: [
                    {
                        id: 'v7',
                        title: 'Understanding rhythmic cycles in Indian music',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v8',
                        title: 'Famous taals and their significance in Bollywood',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 5,
                title: 'Advanced Tabla Techniques: Tihai, Paran, and More',
                videos: [
                    {
                        id: 'v9',
                        title: 'Mastering the art of tihai in tabla compositions',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v10',
                        title: 'Exploring advanced patterns and rhythms',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 6,
                title: 'Analyzing Iconic Bollywood Tracks Featuring Tabla',
                videos: [
                    {
                        id: 'v11',
                        title: 'Dissecting tabla use in classic Bollywood hits',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v12',
                        title: 'Learning from modern Bollywood film scores',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 7,
                title: 'Performing Live: Showcasing Your Tabla Skills',
                videos: [
                    {
                        id: 'v13',
                        title: 'Preparing for live performances',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v14',
                        title: 'Tips for on-stage confidence and improvisation',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },

                ]
            }
        ]
    }


];





