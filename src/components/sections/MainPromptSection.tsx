import { useCallback } from 'react';
import type { MainPrompt } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';

interface MainPromptProps {
  prompt: MainPrompt;
  onChange: (value: string) => void;
}

export const MainPromptSection = ({ prompt, onChange }: MainPromptProps) => {
  const { isVisible, bindCard, bindField } = useSectionVisibility();
  const hint = HINT_DATA.mainPrompt;
  
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Card 
      {...bindCard}
      className="w-full border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Primary Task Description
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="main-prompt"
          placeholder={hint.placeholder}
          value={prompt.value}
          onChange={handleChange}
          {...bindField}
          rows={6}
          className="font-mono text-base resize-none focus-visible:ring-ring/30"
        />
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isVisible}
        />
      </CardContent>
    </Card>
  );
};
