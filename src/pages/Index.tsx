import { useState } from "react";
import { Hero } from "@/components/Hero";
import { UploadArea } from "@/components/UploadArea";
import { CaptionInput } from "@/components/CaptionInput";
import { PredictionResults } from "@/components/PredictionResults";
import { Button } from "@/components/ui/button";
import { Zap, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setShowResults(false);
    setPrediction(null);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setShowResults(false);
    setPrediction(null);
  };


  const handlePredict = async () => {
    if (!selectedFile || !caption.trim()) {
      toast({
        title: "Missing Information",
        description: "Please upload a file and add a caption to get your viral prediction.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setShowResults(true);

    // TODO: Replace with actual API call to your Flask backend
    // const formData = new FormData();
    // formData.append('file', selectedFile);
    // formData.append('caption', caption);
    // 
    // try {
    //   const response = await fetch('/api/predict', {
    //     method: 'POST',
    //     body: formData
    //   });
    //   const result = await response.json();
    //   setPrediction(result);
    // } catch (error) {
    //   console.error('Prediction failed:', error);
    // }
    
    setIsLoading(false);
  };

  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div id="upload-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Test Your Content's <span className="bg-gradient-viral bg-clip-text text-transparent">Viral Potential</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your content and get instant AI-powered predictions on how likely it is to go viral
            </p>
          </div>

          <UploadArea 
            onFileSelect={handleFileSelect}
            selectedFile={selectedFile}
            onClearFile={handleClearFile}
          />

          <CaptionInput 
            caption={caption}
            onCaptionChange={setCaption}
          />

          <div className="text-center">
            <Button 
              variant="viral" 
              size="lg" 
              onClick={handlePredict}
              disabled={!selectedFile || !caption.trim() || isLoading}
              className="text-lg px-12 py-6"
            >
              <Zap className="w-5 h-5" />
              {isLoading ? 'Analyzing...' : 'Predict Viral Potential'}
            </Button>
          </div>

          {showResults && (
            <PredictionResults 
              prediction={prediction}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 p-0"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Index;
