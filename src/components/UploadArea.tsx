import { useState, useCallback } from "react";
import { Upload, Image, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UploadAreaProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClearFile: () => void;
}

export const UploadArea = ({ onFileSelect, selectedFile, onClearFile }: UploadAreaProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const isImage = selectedFile?.type.startsWith('image/');
  const isVideo = selectedFile?.type.startsWith('video/');

  return (
    <Card className="w-full max-w-2xl mx-auto p-8">
      {selectedFile ? (
        <div className="text-center">
          <div className="relative inline-block mb-4">
            {isImage && (
              <img 
                src={URL.createObjectURL(selectedFile)} 
                alt="Preview" 
                className="max-w-full max-h-64 rounded-lg object-cover"
              />
            )}
            {isVideo && (
              <video 
                src={URL.createObjectURL(selectedFile)} 
                className="max-w-full max-h-64 rounded-lg object-cover"
                controls
              />
            )}
            <Button
              variant="destructive"
              size="sm"
              className="absolute -top-2 -right-2 rounded-full w-8 h-8 p-0"
              onClick={onClearFile}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(1)} MB)
          </p>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 cursor-pointer ${
            isDragging 
              ? 'border-viral-purple bg-viral-purple/10 scale-105' 
              : 'border-border hover:border-viral-purple/50 hover:bg-viral-purple/5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 bg-viral-purple/20 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-viral-purple" />
              </div>
              <div className="w-12 h-12 bg-viral-pink/20 rounded-full flex items-center justify-center">
                <Image className="w-6 h-6 text-viral-pink" />
              </div>
              <div className="w-12 h-12 bg-viral-cyan/20 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-viral-cyan" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Content</h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your image or video here, or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                Supports: JPG, PNG, GIF, MP4, MOV, AVI (Max 50MB)
              </p>
            </div>
            
            <Button variant="viral" className="mt-4">
              <Upload className="w-4 h-4" />
              Choose File
            </Button>
          </div>
          
          <input
            id="file-input"
            type="file"
            accept="image/*,video/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      )}
    </Card>
  );
};