import { useCallback, useState } from 'react';
import type { TestingStrategy } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface TestingStrategyProps {
  strategy: TestingStrategy;
  onChange: (value: string) => void;
}

export const TestingStrategySection = ({ strategy, onChange }: TestingStrategyProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hint = HINT_DATA.testingStrategy;

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
          Testing Strategy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="testing-strategy"
          placeholder={hint.placeholder}
          value={strategy.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-violet-500/30"
        />
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || !!strategy.value}
        />
      </CardContent>
    </Card>
  );
};
