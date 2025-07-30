import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-viral-purple/20 via-background to-viral-pink/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-viral-blue/10 via-transparent to-viral-cyan/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-viral-purple/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-viral-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-viral-cyan/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <TrendingUp className="w-8 h-8 text-viral-purple animate-viral-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-viral bg-clip-text text-transparent">
            ViralVision
          </h1>
          <Zap className="w-8 h-8 text-viral-pink animate-viral-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Predict viral potential before you post. Upload your content, add a caption, 
          and get instant AI-powered insights on how likely it is to go viral.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="viral" size="lg" className="text-lg px-8 py-6">
            <BarChart3 className="w-5 h-5" />
            Try Viral Prediction
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-viral-purple mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-muted-foreground text-sm">Advanced machine learning models analyze your content for viral potential</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <Zap className="w-8 h-8 text-viral-pink mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-muted-foreground text-sm">Get your virality score in seconds, not hours</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <BarChart3 className="w-8 h-8 text-viral-cyan mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
            <p className="text-muted-foreground text-sm">Detailed feedback to improve your content strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
};