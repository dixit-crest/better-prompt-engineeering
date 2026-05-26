import { useCallback, useState } from 'react';
import type { BehaviorSections } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface BehaviorSectionsProps {
  sections: BehaviorSections;
  onChange: (field: keyof BehaviorSections, value: string) => void;
}

export const BehaviorSectionsSection = ({ sections, onChange }: BehaviorSectionsProps) => {
  const [focusedField, setFocusedField] = useState<keyof BehaviorSections | null>(null);

  const handleChange = useCallback(
    (field: keyof BehaviorSections) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(field, e.target.value);
    },
    [onChange]
  );

  return (
    <Card className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Behavior Focus
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Happy Path</label>
            <Textarea
              value={sections.happyPath}
              onChange={handleChange('happyPath')}
              onFocus={() => setFocusedField('happyPath')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.happyPath.placeholder}
              rows={4}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.happyPath.description}
              examples={HINT_DATA.happyPath.examples}
              visible={focusedField === 'happyPath' || !!sections.happyPath}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Edge Cases</label>
            <Textarea
              value={sections.edgeCases}
              onChange={handleChange('edgeCases')}
              onFocus={() => setFocusedField('edgeCases')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.edgeCases.placeholder}
              rows={4}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.edgeCases.description}
              examples={HINT_DATA.edgeCases.examples}
              visible={focusedField === 'edgeCases' || !!sections.edgeCases}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Failure States</label>
            <Textarea
              value={sections.failureStates}
              onChange={handleChange('failureStates')}
              onFocus={() => setFocusedField('failureStates')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.failureStates.placeholder}
              rows={4}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.failureStates.description}
              examples={HINT_DATA.failureStates.examples}
              visible={focusedField === 'failureStates' || !!sections.failureStates}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
