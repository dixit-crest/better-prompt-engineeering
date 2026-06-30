import { useCallback } from 'react';
import type { BusinessRules } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';

interface BusinessRulesProps {
  rules: BusinessRules;
  onChange: (value: string) => void;
}

export const BusinessRulesSection = ({ rules, onChange }: BusinessRulesProps) => {
  const { isVisible, bindCard, bindField } = useSectionVisibility();
  const hint = HINT_DATA.businessRules;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Card 
      {...bindCard}
      className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Business Rules
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="business-rules"
          placeholder={hint.placeholder}
          value={rules.value}
          onChange={handleChange}
          {...bindField}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-ring/30"
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
