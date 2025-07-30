import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface CaptionInputProps {
  caption: string;
  onCaptionChange: (caption: string) => void;
}

export const CaptionInput = ({ caption, onCaptionChange }: CaptionInputProps) => {
  const maxLength = 280;
  const remainingChars = maxLength - caption.length;
  
  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="caption" className="text-lg font-semibold">
            Add Your Caption
          </Label>
          <span className={`text-sm ${remainingChars < 20 ? 'text-destructive' : 'text-muted-foreground'}`}>
            {remainingChars} characters remaining
          </span>
        </div>
        
        <Textarea
          id="caption"
          placeholder="Write an engaging caption that could make your content go viral..."
          value={caption}
          onChange={(e) => onCaptionChange(e.target.value)}
          className="min-h-[120px] resize-none text-base"
          maxLength={maxLength}
        />
        
        <div className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Include trending hashtags, emojis, and engaging questions to boost viral potential
        </div>
      </div>
    </Card>
  );
};