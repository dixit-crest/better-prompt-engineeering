import { useCallback, useState } from 'react';
import type { DataExamples } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PlusIcon, XIcon } from 'lucide-react';
import { TypewriterHint } from '../common/TypewriterHint';
import { HINT_DATA } from '../../utils/hintData';

interface DataExamplesProps {
  dataExamples: DataExamples;
  onAdd: (input: string, output: string) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, input: string, output: string) => void;
}

export const DataExamplesSection = ({ dataExamples, onAdd, onRemove, onUpdate }: DataExamplesProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hint = HINT_DATA.dataExamples;

  const handleAdd = useCallback(() => {
    onAdd('', '');
  }, [onAdd]);

  const handleRemove = useCallback(
    (id: string) => {
      onRemove(id);
    },
    [onRemove]
  );

  const handleUpdate = useCallback(
    (id: string, input: string, output: string) => {
      onUpdate(id, input, output);
    },
    [onUpdate]
  );

  return (
    <Card className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Data Examples / I/O
        </CardTitle>
        <Button variant="outline" size="sm" onClick={handleAdd} className="h-8 gap-1 border-primary/50 hover:bg-primary/10">
          <PlusIcon className="size-3" />
          Add Example
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {dataExamples.items.map((example) => (
            <div key={example.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/30 animate-in zoom-in-95 duration-300">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Input</label>
                <Textarea
                  value={example.input}
                  onChange={(e) => handleUpdate(example.id, e.target.value, example.output)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="e.g., { id: 123 }"
                  className="font-mono text-xs min-h-[100px] resize-none focus-visible:ring-ring/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Expected Output</label>
                <Textarea
                  value={example.output}
                  onChange={(e) => handleUpdate(example.id, example.input, e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="e.g., { name: 'John Doe' }"
                  className="font-mono text-xs min-h-[100px] resize-none focus-visible:ring-ring/30"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemove(example.id)}
                aria-label="Remove example"
                className="absolute top-2 right-2 size-8 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <XIcon className="size-4" />
              </Button>
            </div>
          ))}
          {dataExamples.items.length === 0 && (
            <p className="text-sm text-muted-foreground italic text-center py-8 border-2 border-dashed rounded-lg bg-muted/30">
              No data examples added yet. Provide I/O samples to improve accuracy.
            </p>
          )}
        </div>
        <TypewriterHint 
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || dataExamples.items.length > 0}
        />
      </CardContent>
    </Card>
  );
};
