import { SentimentResult, MovieInfo } from '../types';

// Simple keyword-based sentiment analysis for demo purposes
const positiveKeywords = [
  'amazing', 'excellent', 'outstanding', 'brilliant', 'fantastic', 'wonderful',
  'great', 'good', 'awesome', 'incredible', 'perfect', 'beautiful', 'stunning',
  'masterpiece', 'classic', 'enjoyable', 'entertaining', 'fun', 'love', 'like',
  'recommend', 'best', 'top', 'favorite', 'enjoyed', 'loved', 'amazing', 'superb'
];

const negativeKeywords = [
  'terrible', 'awful', 'horrible', 'bad', 'worst', 'disappointing', 'boring',
  'waste', 'hate', 'dislike', 'poor', 'weak', 'lame', 'stupid', 'ridiculous',
  'annoying', 'frustrating', 'confusing', 'mess', 'disaster', 'avoid', 'skip',
  'regret', 'boring', 'slow', 'predictable', 'cliché', 'overrated'
];

// Enhanced movie database
const movieDatabase: Record<string, MovieInfo> = {
  'inception': {
    title: 'Inception',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    rating: 8.8,
    year: 2010
  },
  'the dark knight': {
    title: 'The Dark Knight',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    rating: 9.0,
    year: 2008
  },
  'pulp fiction': {
    title: 'Pulp Fiction',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.9,
    year: 1994
  },
  'forrest gump': {
    title: 'Forrest Gump',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.8,
    year: 1994
  },
  'the matrix': {
    title: 'The Matrix',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.7,
    year: 1999
  },
  'titanic': {
    title: 'Titanic',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtYjI4ZGVmYzI5OWU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 7.9,
    year: 1997
  },
  'avatar': {
    title: 'Avatar',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00M2UyLTg3MzUtYTlmNTVjYjNhNjc5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    rating: 7.8,
    year: 2009
  },
  'interstellar': {
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.6,
    year: 2014
  },
  'the godfather': {
    title: 'The Godfather',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxOWJmNWYtZjJlZDg3MzM3N2M5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 9.2,
    year: 1972
  },
  'shawshank redemption': {
    title: 'The Shawshank Redemption',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    rating: 9.3,
    year: 1994
  },
  'fight club': {
    title: 'Fight Club',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.8,
    year: 1999
  },
  'goodfellas': {
    title: 'Goodfellas',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.7,
    year: 1990
  },
  'joker': {
    title: 'Joker',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    rating: 8.4,
    year: 2019
  },
  'parasite': {
    title: 'Parasite',
    poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    rating: 8.6,
    year: 2019
  },
  'spider man': {
    title: 'Spider-Man: Into the Spider-Verse',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg',
    rating: 8.4,
    year: 2018
  }
};

export const analyzeSentiment = async (text: string): Promise<SentimentResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const lowerText = text.toLowerCase();
  
  // Count positive and negative keywords
  let positiveScore = 0;
  let negativeScore = 0;
  
  positiveKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) {
      positiveScore += matches.length;
    }
  });
  
  negativeKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) {
      negativeScore += matches.length;
    }
  });
  
  // Additional sentiment indicators
  const exclamationCount = (lowerText.match(/!/g) || []).length;
  const questionCount = (lowerText.match(/\?/g) || []).length;
  
  // Adjust scores based on punctuation
  positiveScore += exclamationCount * 0.5;
  negativeScore += questionCount * 0.3;
  
  // Determine sentiment
  const totalScore = positiveScore + negativeScore;
  const sentiment = positiveScore > negativeScore ? 'positive' : 'negative';
  const confidence = totalScore > 0 ? Math.min(0.95, Math.abs(positiveScore - negativeScore) / totalScore + 0.5) : 0.5;
  
  // Try to detect movie title
  const movieInfo = detectMovieTitle(lowerText);
  
  return {
    sentiment,
    confidence: Math.round(confidence * 100) / 100,
    movieInfo
  };
};

const detectMovieTitle = (text: string): MovieInfo | undefined => {
  // First, check for exact matches in the database
  for (const [key, movie] of Object.entries(movieDatabase)) {
    if (text.includes(key)) {
      return movie;
    }
  }
  
  // Check for common movie patterns
  const moviePatterns = [
    /(?:the\s+)?([a-z]+(?:\s+[a-z]+)*)\s+(?:movie|film)/i,
    /(?:watching|watched|saw)\s+(?:the\s+)?([a-z]+(?:\s+[a-z]+)*)/i,
    /(?:movie|film)\s+(?:called\s+)?([a-z]+(?:\s+[a-z]+)*)/i,
    /(?:about|review\s+of)\s+(?:the\s+)?([a-z]+(?:\s+[a-z]+)*)/i
  ];
  
  for (const pattern of moviePatterns) {
    const match = text.match(pattern);
    if (match) {
      const potentialTitle = match[1].toLowerCase();
      if (movieDatabase[potentialTitle]) {
        return movieDatabase[potentialTitle];
      }
    }
  }
  
  return undefined;
};

export const getSampleReviews = () => [
  "Inception is absolutely amazing! The concept is mind-blowing and the visual effects are stunning. Christopher Nolan has created a masterpiece that keeps you thinking long after the credits roll.",
  "The Dark Knight is a brilliant film with outstanding performances. Heath Ledger's Joker is incredible and the story is perfectly crafted. One of the best superhero movies ever made.",
  "Avatar was visually stunning but the story was predictable and cliché. The special effects were good but the plot was boring and the characters were flat. Not worth the hype.",
  "Pulp Fiction is a masterpiece of storytelling. The dialogue is sharp, the characters are memorable, and the non-linear narrative is executed perfectly. A true classic that never gets old.",
  "Titanic was a waste of time. The love story was cheesy and the dialogue was terrible. The only good thing was the special effects, but that's not enough to save this boring movie.",
  "The Godfather is a cinematic masterpiece. The performances are outstanding, the story is compelling, and the direction is flawless. A true classic that defines the crime genre.",
  "Fight Club is a mind-bending masterpiece. The plot twists are incredible, the social commentary is sharp, and the performances are outstanding. One of the most thought-provoking films ever made.",
  "Parasite is a brilliant and innovative film. The storytelling is masterful, the social commentary is powerful, and the direction is flawless. A well-deserved Best Picture winner.",
  "Joker is a dark and powerful film. Joaquin Phoenix delivers an incredible performance, and the psychological depth is fascinating. A bold and controversial masterpiece."
]; 