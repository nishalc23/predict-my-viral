import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Heart, Share2, MessageCircle } from "lucide-react";

interface PredictionData {
  viralScore: number;
  confidence: number;
  estimatedReach: number;
  estimatedEngagement: number;
  insights: string[];
  category: 'High Viral Potential' | 'Moderate Potential' | 'Low Potential';
}

interface PredictionResultsProps {
  prediction: PredictionData;
  isLoading: boolean;
}

export const PredictionResults = ({ prediction, isLoading }: PredictionResultsProps) => {
  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-viral rounded-full flex items-center justify-center mx-auto animate-viral-pulse">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Analyzing Viral Potential...</h3>
          <div className="space-y-2">
            <Progress value={33} className="animate-pulse" />
            <p className="text-muted-foreground text-sm">Processing your content with AI...</p>
          </div>
        </div>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'bg-gradient-success';
    if (score >= 60) return 'bg-gradient-social';
    return 'bg-gradient-to-r from-red-500 to-orange-500';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 space-y-6">
      {/* Main Score */}
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {prediction.category}
        </Badge>
        
        <div className="relative">
          <div className={`w-32 h-32 rounded-full ${getScoreGradient(prediction.viralScore)} flex items-center justify-center mx-auto animate-viral-pulse`}>
            <div className="text-3xl font-bold text-white">
              {prediction.viralScore}%
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <span className="text-sm text-muted-foreground bg-card px-2 py-1 rounded-full border">
              {prediction.confidence}% confidence
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold">Viral Potential Score</h3>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center space-y-2">
          <Eye className="w-6 h-6 text-viral-blue mx-auto" />
          <div className="text-lg font-semibold">{(prediction.estimatedReach / 1000).toFixed(1)}K</div>
          <div className="text-xs text-muted-foreground">Estimated Reach</div>
        </div>
        
        <div className="text-center space-y-2">
          <Heart className="w-6 h-6 text-viral-pink mx-auto" />
          <div className="text-lg font-semibold">{(prediction.estimatedEngagement / 1000).toFixed(1)}K</div>
          <div className="text-xs text-muted-foreground">Engagement</div>
        </div>
        
        <div className="text-center space-y-2">
          <Share2 className="w-6 h-6 text-viral-cyan mx-auto" />
          <div className="text-lg font-semibold">{Math.round(prediction.estimatedEngagement * 0.1)}</div>
          <div className="text-xs text-muted-foreground">Shares</div>
        </div>
        
        <div className="text-center space-y-2">
          <MessageCircle className="w-6 h-6 text-viral-purple mx-auto" />
          <div className="text-lg font-semibold">{Math.round(prediction.estimatedEngagement * 0.05)}</div>
          <div className="text-xs text-muted-foreground">Comments</div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-viral-purple" />
          AI Insights
        </h4>
        
        <div className="space-y-2">
          {prediction.insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-viral-purple rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};