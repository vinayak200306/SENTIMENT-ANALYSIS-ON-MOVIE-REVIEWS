import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useSentiment } from './hooks/useSentiment';
import { Header } from './components/Header';
import { ReviewInput } from './components/ReviewInput';
import { SentimentResultComponent } from './components/SentimentResult';
import { Features } from './components/Features';

function App() {
  const { isLoading, result, error, analyzeReview, clearResult, getSampleReview } = useSentiment();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          {/* Main Analysis Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 mb-8"
          >
            <ReviewInput
              onAnalyze={analyzeReview}
              onSampleReview={getSampleReview}
              isLoading={isLoading}
            />
          </motion.div>

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-400">{error}</span>
            </motion.div>
          )}

          {/* Results Section */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Analysis Results</h2>
                <motion.button
                  onClick={clearResult}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </motion.button>
              </div>
              <SentimentResultComponent result={result} />
            </motion.div>
          )}

          {/* Features Section */}
          <Features />

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center py-8 text-gray-400"
          >
            <p className="text-sm">
              Built with React, TypeScript, and Tailwind CSS • 
              Powered by Machine Learning Sentiment Analysis
            </p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}

export default App; 