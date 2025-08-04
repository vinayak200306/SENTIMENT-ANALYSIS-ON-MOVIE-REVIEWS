import { motion } from 'framer-motion';
import { Star, TrendingUp, TrendingDown, ExternalLink, Calendar, Award, Film, Info } from 'lucide-react';
import { SentimentResult } from '../types';

interface SentimentResultProps {
  result: SentimentResult;
}

export const SentimentResultComponent = ({ result }: SentimentResultProps) => {
  const { sentiment, confidence, movieInfo } = result;
  const isPositive = sentiment === 'positive';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Sentiment Badge */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`sentiment-badge ${
            isPositive ? 'sentiment-positive' : 'sentiment-negative'
          } flex items-center gap-2`}
        >
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-lg font-bold">
            {isPositive ? 'Positive' : 'Negative'} Sentiment
          </span>
        </motion.div>
      </div>

      {/* Confidence Score */}
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">
          {Math.round(confidence * 100)}%
        </div>
        <div className="text-gray-300 text-sm">Confidence Score</div>
      </div>

      {/* Enhanced Movie Info Card */}
      {movieInfo ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="movie-card group"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Movie Poster */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <img
                src={movieInfo.poster}
                alt={movieInfo.title}
                className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-xl shadow-2xl border-2 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            {/* Movie Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {movieInfo.title}
                </h3>
                
                {/* Rating and Year */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-bold text-lg">
                      {movieInfo.rating}/10
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{movieInfo.year}</span>
                  </div>
                </div>
                
                {/* IMDb Badge */}
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-semibold">IMDb Rating</span>
                </div>
              </div>
              
              {/* Movie Description */}
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>
                  {isPositive 
                    ? `This review expresses positive sentiment about "${movieInfo.title}". The reviewer enjoyed the film and would likely recommend it to others.`
                    : `This review expresses negative sentiment about "${movieInfo.title}". The reviewer was not satisfied with the film and would likely not recommend it.`
                  }
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on IMDb
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all duration-200 border border-white/20"
                >
                  <Star className="w-4 h-4" />
                  Rate This Movie
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* No Movie Detected Section */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="movie-card"
        >
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Film className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                No Movie Detected
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We couldn't identify a specific movie in your review. Try mentioning a movie title like "Inception", "The Dark Knight", or "Avatar" to see movie information and ratings.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
              <Info className="w-4 h-4" />
              <span>Supported movies: Inception, The Dark Knight, Pulp Fiction, Avatar, Titanic, and more!</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Analysis Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-gray-300 text-sm"
      >
        {isPositive ? (
          <p>This review expresses positive sentiment about the movie.</p>
        ) : (
          <p>This review expresses negative sentiment about the movie.</p>
        )}
      </motion.div>
    </motion.div>
  );
}; 