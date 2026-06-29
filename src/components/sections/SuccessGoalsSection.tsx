import { useCallback } from 'react';
import type { SuccessGoals } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusIcon, XIcon } from 'lucide-react';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';

interface SuccessGoalsProps {
  successGoals: SuccessGoals;
  onAdd: (value: string) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, value: string) => void;
}

export const SuccessGoalsSection = ({ successGoals, onAdd, onRemove, onUpdate }: SuccessGoalsProps) => {
  const { isVisible, bindCard, bindField } = useSectionVisibility();
  const hint = HINT_DATA.successGoals;

  const handleAdd = useCallback(() => {
    onAdd('');
  }, [onAdd]);

  const handleRemove = useCallback(
    (id: string) => {
      onRemove(id);
    },
    [onRemove]
  );

  const handleUpdate = useCallback(
    (id: string, value: string) => {
      onUpdate(id, value);
    },
    [onUpdate]
  );

  return (
    <Card 
      {...bindCard}
      className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Success Goals / Outcomes
        </CardTitle>
        <Button variant="outline" size="sm" onClick={handleAdd} className="h-8 gap-1 border-primary/50 hover:bg-primary/10">
          <PlusIcon className="size-3" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {successGoals.items.map((item) => (
            <div key={item.id} className="flex gap-2 animate-in slide-in-from-right-2 duration-300">
              <Input
                type="text"
                value={item.value}
                onChange={(e) => handleUpdate(item.id, e.target.value)}
                {...bindField}
                placeholder={hint.placeholder}
                className="flex-1 focus-visible:ring-violet-500/30"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemove(item.id)}
                aria-label="Remove goal"
                className="size-10 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <XIcon className="size-4" />
              </Button>
            </div>
          ))}
          {successGoals.items.length === 0 && (
            <p className="text-sm text-muted-foreground italic text-center py-6 border-2 border-dashed rounded-lg bg-muted/30">
              No success goals added yet.
            </p>
          )}
        </div>
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isVisible}
        />
      </CardContent>
    </Card>
  );
};
