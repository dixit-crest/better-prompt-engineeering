import { useCallback, useState } from 'react';
import type { SuccessCriteria } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';

interface SuccessCriteriaProps {
  criteria: SuccessCriteria;
  onChange: (value: string) => void;
}

export const SuccessCriteriaSection = ({ criteria, onChange }: SuccessCriteriaProps) => {
  const { isVisible, bindCard, bindField } = useSectionVisibility();
  const hint = HINT_DATA.successCriteria;

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
          Definition of Done / Success Criteria
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="success-criteria"
          placeholder={hint.placeholder}
          value={criteria.value}
          onChange={handleChange}
          {...bindField}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-violet-500/30"
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
