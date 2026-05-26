import { useCallback, useState } from 'react';
import type { TechnicalArchitecture } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';

interface TechnicalArchitectureProps {
  architecture: TechnicalArchitecture;
  onChange: (value: string) => void;
}

export const TechnicalArchitectureSection = ({ architecture, onChange }: TechnicalArchitectureProps) => {
  const { isVisible, bindCard, bindField } = useSectionVisibility();
  const hint = HINT_DATA.technicalArchitecture;

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
          Technical Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="technical-architecture"
          placeholder={hint.placeholder}
          value={architecture.value}
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
