import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, RotateCcw } from 'lucide-react';

interface ReviewInputProps {
  onAnalyze: (text: string) => void;
  onSampleReview: () => string;
  isLoading: boolean;
}

export const ReviewInput = ({ onAnalyze, onSampleReview, isLoading }: ReviewInputProps) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim() && !isLoading) {
      onAnalyze(reviewText);
    }
  };

  const handleSampleReview = () => {
    const sample = onSampleReview();
    setReviewText(sample);
  };

  const handleClear = () => {
    setReviewText('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Enter your movie review here... (e.g., 'Inception is absolutely amazing! The concept is mind-blowing and the visual effects are stunning.' or 'The Dark Knight is a brilliant film with outstanding performances.')"
            className="input-field min-h-[120px] resize-none"
            disabled={isLoading}
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            {reviewText && (
              <motion.button
                type="button"
                onClick={handleClear}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={isLoading}
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            type="submit"
            disabled={!reviewText.trim() || isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Analyze Sentiment
              </>
            )}
          </motion.button>

          <motion.button
            type="button"
            onClick={handleSampleReview}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            <Sparkles className="w-4 h-4" />
            Sample Review
          </motion.button>
        </div>
      </form>

      {/* Character count */}
      <div className="text-right text-sm text-gray-400">
        {reviewText.length} characters
      </div>
    </motion.div>
  );
}; 