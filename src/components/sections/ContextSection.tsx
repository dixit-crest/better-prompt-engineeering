import { useCallback, useState } from 'react';
import type { Context } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface ContextProps {
  context: Context;
  onChange: (value: string) => void;
}

export const ContextSection = ({ context, onChange }: ContextProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hint = HINT_DATA.context;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Context / Background
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="context"
          placeholder={hint.placeholder}
          value={context.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-violet-500/30"
        />
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || isHovered}
        />
      </CardContent>
    </Card>
  );
};
