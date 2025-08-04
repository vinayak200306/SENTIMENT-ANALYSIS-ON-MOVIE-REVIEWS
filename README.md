# 🎬 Movie Sentiment Analyzer

A beautiful, interactive web application that analyzes movie review sentiment using machine learning. Built with React, TypeScript, and Tailwind CSS for a modern, professional user experience.

## ✨ Features

- **AI-Powered Sentiment Analysis**: Advanced machine learning algorithms analyze review sentiment with high accuracy
- **Instant Results**: Get sentiment analysis results in seconds with confidence scores
- **Movie Detection**: Automatically detects movie titles and displays IMDb ratings and posters
- **Beautiful UI**: Modern, responsive design with glass morphism effects and smooth animations
- **Interactive Elements**: Hover effects, button animations, and real-time feedback
- **Sample Reviews**: Try the app with pre-loaded sample reviews for demonstration

## 🚀 Live Demo

[View Live Demo](https://sentiment-analysis-on-movies-review.netlify.app/)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify/Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-sentiment-analyzer.git
cd movie-sentiment-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open (https://sentiment-analysis-on-movies-review.netlify.app/) in your browser.

## 🏗️ Project Structure

```
movie-sentiment-analyzer/
├── public/
│   └── data/
│       └── mini_imdb_reviews.csv    # Sample dataset
├── src/
│   ├── components/
│   │   ├── Header.tsx               # App header with title
│   │   ├── ReviewInput.tsx          # Review input form
│   │   ├── SentimentResult.tsx      # Results display
│   │   └── Features.tsx             # Features showcase
│   ├── hooks/
│   │   └── useSentiment.ts          # Custom hook for sentiment analysis
│   ├── services/
│   │   └── sentimentService.ts      # Sentiment analysis logic
│   ├── types/
│   │   └── index.ts                 # TypeScript type definitions
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 How It Works

1. **Input**: Users enter movie reviews in the text area
2. **Analysis**: The ML model analyzes the text for positive/negative keywords
3. **Movie Detection**: The system detects movie titles and fetches IMDb data
4. **Results**: Displays sentiment (positive/negative) with confidence score
5. **Visual Feedback**: Beautiful animations and color-coded results

## 🎨 Design Features

- **Glass Morphism**: Modern glass effect cards with backdrop blur
- **Gradient Backgrounds**: Beautiful purple-to-slate gradient theme
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Works perfectly on all device sizes
- **Interactive Elements**: Hover effects and button animations
- **Professional Typography**: Inter font family for clean readability

## 🔧 Customization

### Adding New Movies
Edit `src/services/sentimentService.ts` to add more movies to the database:

```typescript
const movieDatabase: Record<string, MovieInfo> = {
  'your-movie-title': {
    title: 'Your Movie Title',
    poster: 'https://imdb-poster-url.jpg',
    rating: 8.5,
    year: 2023
  }
};
```

### Styling
Modify `src/index.css` and `tailwind.config.js` to customize the design theme.

## 📊 Machine Learning Model

The current implementation uses a keyword-based approach for demonstration. In a production environment, you would:

1. Train a proper ML model (Logistic Regression, SVM, or BERT)
2. Use a larger dataset (IMDb reviews, Rotten Tomatoes)
3. Implement proper model serving (Flask API, TensorFlow Serving)
4. Add model evaluation metrics (Accuracy, F1-score, Precision, Recall)

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy to Netlify with the `dist` folder
3. Configure environment variables if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


## 🙏 Acknowledgments

- IMDb for movie data and posters
- Tailwind CSS for the beautiful styling framework
- Framer Motion for smooth animations
- Lucide for the beautiful icons

---


**Built with ❤️ for movie lovers and AI enthusiasts** 


