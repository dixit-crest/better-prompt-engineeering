import { useCallback, useState } from 'react';
import type { FullPrompt } from '../../types';
import { assemblePrompt } from '../../utils/assemblePrompt';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CopyIcon, CheckIcon } from 'lucide-react';

interface FinalPromptViewProps {
  prompt: FullPrompt;
  onCopy: () => void;
}

export const FinalPromptView = ({ prompt, onCopy }: FinalPromptViewProps) => {
  const [copied, setCopied] = useState(false);

  const getAssembledPrompt = useCallback(() => assemblePrompt(prompt), [prompt]);

  const handleCopy = useCallback(() => {
    const assembled = getAssembledPrompt();
    navigator.clipboard.writeText(assembled).then(() => {
      setCopied(true);
      onCopy();
      setTimeout(() => setCopied(false), 2000);
    });
  }, [getAssembledPrompt, onCopy]);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-bold">Final Prompt</CardTitle>
        <Button 
          variant={copied ? "secondary" : "default"} 
          size="sm" 
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
          {copied ? "Copied" : "Copy to Clipboard"}
        </Button>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full w-full border-t border-b bg-muted/50 p-6">
          <pre className="text-sm font-mono whitespace-pre-wrap break-words text-foreground selection:bg-primary selection:text-primary-foreground">
            {getAssembledPrompt()}
          </pre>
        </ScrollArea>
      </CardContent>
      <CardFooter className="pt-4">
        <p className="text-sm text-muted-foreground italic">
          The prompt above is ready to be copied and used with your preferred LLM.
        </p>
      </CardFooter>
    </Card>
  );
};
