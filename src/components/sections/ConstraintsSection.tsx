import { useCallback, useState } from 'react';
import type { Constraints } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface ConstraintsProps {
  constraints: Constraints;
  onChange: (value: string) => void;
}

export const ConstraintsSection = ({ constraints, onChange }: ConstraintsProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hint = HINT_DATA.constraints;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Card className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Constraints & Limitations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="constraints"
          placeholder={hint.placeholder}
          value={constraints.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-ring/30"
        />
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || !!constraints.value}
        />
      </CardContent>
    </Card>
  );
};
