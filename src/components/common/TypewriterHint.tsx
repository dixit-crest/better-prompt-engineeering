import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterHintProps {
  examples: string[];
  description: string;
  interval?: number;
  className?: string;
  visible?: boolean;
}

export const TypewriterHint = ({
  examples,
  description,
  interval = 3000,
  className,
  visible = true,
}: TypewriterHintProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(20);

  useEffect(() => {
    if (examples.length === 0 || !visible) return;

    const handleTyping = () => {
      const currentExample = examples[currentIndex];

      if (!isDeleting) {
        // Typing
        setDisplayText(currentExample.substring(0, displayText.length + 1));
        setTypingSpeed(20);

        if (displayText === currentExample) {
          // Finished typing, wait before deleting
          setIsDeleting(true);
          setTypingSpeed(interval);
        }
      } else {
        // Deleting
        setDisplayText(currentExample.substring(0, displayText.length - 1));
        setTypingSpeed(10);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % examples.length);
          setTypingSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    currentIndex,
    examples,
    interval,
    typingSpeed,
    visible,
  ]);

  return (
    <div className={cn("mt-2 space-y-1.5", className)}>
      <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 transition-colors duration-300">
        Pro Tip: {description}
      </p>
      <div
        className={cn(
          "flex items-start gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded-md border border-border/50 transition-all duration-500",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none h-0 p-0 border-none overflow-hidden",
        )}
      >
        <span className="shrink-0 font-bold text-primary">EG:</span>
        <div className="relative inline-block">
          <span className="italic leading-relaxed">"{displayText}"</span>
          <span className="inline-block w-[2px] h-[14px] bg-primary ml-0.5 align-middle animate-pulse" />
        </div>
      </div>
    </div>
  );
};
