import { motion } from 'framer-motion';
import { Brain, Zap, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze sentiment with high accuracy'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get sentiment analysis results in seconds with confidence scores'
  },
  {
    icon: Star,
    title: 'Movie Detection',
    description: 'Automatically detects movie titles and shows IMDb ratings'
  },
  {
    icon: TrendingUp,
    title: 'Detailed Insights',
    description: 'Comprehensive analysis with confidence percentages and visual feedback'
  }
];

export const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}; 