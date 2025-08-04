import { motion } from 'framer-motion';
import { Film, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        >
          <Film className="w-8 h-8 text-white" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-4"
      >
        Movie Sentiment Analyzer
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Analyze the sentiment of movie reviews using advanced machine learning. 
        Get instant insights into whether a review is positive or negative with confidence scores.
      </motion.p>
    </motion.header>
  );
}; 