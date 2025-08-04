export interface SentimentResult {
  sentiment: 'positive' | 'negative';
  confidence: number;
  movieInfo?: MovieInfo;
}

export interface MovieInfo {
  title: string;
  poster: string;
  rating: number;
  year: number;
}

export interface AnalysisState {
  isLoading: boolean;
  result: SentimentResult | null;
  error: string | null;
}

export interface MovieReview {
  text: string;
  sentiment: 'positive' | 'negative';
  confidence: number;
} 