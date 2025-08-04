import { useState, useCallback } from 'react';
import { analyzeSentiment, getSampleReviews } from '../services/sentimentService';
import { AnalysisState } from '../types';

export const useSentiment = () => {
  const [state, setState] = useState<AnalysisState>({
    isLoading: false,
    result: null,
    error: null
  });

  const analyzeReview = useCallback(async (text: string) => {
    if (!text.trim()) {
      setState(prev => ({ ...prev, error: 'Please enter a movie review to analyze.' }));
      return;
    }

    setState({
      isLoading: true,
      result: null,
      error: null
    });

    try {
      const result = await analyzeSentiment(text);
      setState({
        isLoading: false,
        result,
        error: null
      });
    } catch (error) {
      setState({
        isLoading: false,
        result: null,
        error: 'Failed to analyze sentiment. Please try again.'
      });
    }
  }, []);

  const clearResult = useCallback(() => {
    setState({
      isLoading: false,
      result: null,
      error: null
    });
  }, []);

  const getSampleReview = useCallback(() => {
    const samples = getSampleReviews();
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    return randomSample;
  }, []);

  return {
    ...state,
    analyzeReview,
    clearResult,
    getSampleReview
  };
}; 