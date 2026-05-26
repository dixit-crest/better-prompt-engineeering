import { useCallback, useState } from 'react';
import type { SpecStructure } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface SpecStructureProps {
  structure: SpecStructure;
  onChange: (field: keyof SpecStructure, value: string) => void;
}

export const SpecStructureSection = ({ structure, onChange }: SpecStructureProps) => {
  const [focusedField, setFocusedField] = useState<keyof SpecStructure | null>(null);

  const handleChange = useCallback(
    (field: keyof SpecStructure) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(field, e.target.value);
    },
    [onChange]
  );

  return (
    <Card className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Spec Structure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Preconditions</label>
            <Textarea
              value={structure.preconditions}
              onChange={handleChange('preconditions')}
              onFocus={() => setFocusedField('preconditions')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.preconditions.placeholder}
              rows={3}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.preconditions.description}
              examples={HINT_DATA.preconditions.examples}
              visible={focusedField === 'preconditions' || !!structure.preconditions}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Inputs</label>
            <Textarea
              value={structure.inputs}
              onChange={handleChange('inputs')}
              onFocus={() => setFocusedField('inputs')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.inputs.placeholder}
              rows={3}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.inputs.description}
              examples={HINT_DATA.inputs.examples}
              visible={focusedField === 'inputs' || !!structure.inputs}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Actions</label>
            <Textarea
              value={structure.actions}
              onChange={handleChange('actions')}
              onFocus={() => setFocusedField('actions')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.actions.placeholder}
              rows={3}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.actions.description}
              examples={HINT_DATA.actions.examples}
              visible={focusedField === 'actions' || !!structure.actions}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Outputs</label>
            <Textarea
              value={structure.outputs}
              onChange={handleChange('outputs')}
              onFocus={() => setFocusedField('outputs')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.outputs.placeholder}
              rows={3}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.outputs.description}
              examples={HINT_DATA.outputs.examples}
              visible={focusedField === 'outputs' || !!structure.outputs}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Postconditions</label>
            <Textarea
              value={structure.postconditions}
              onChange={handleChange('postconditions')}
              onFocus={() => setFocusedField('postconditions')}
              onBlur={() => setFocusedField(null)}
              placeholder={HINT_DATA.postconditions.placeholder}
              rows={3}
              className="text-xs resize-none focus-visible:ring-violet-500/30"
            />
            <TypewriterHint 
              description={HINT_DATA.postconditions.description}
              examples={HINT_DATA.postconditions.examples}
              visible={focusedField === 'postconditions' || !!structure.postconditions}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
