"use client";

import { Clock } from 'lucide-react';
import type { ConversionHistory } from './ConverterCard';

interface ConversionHistoryPanelProps {
  history: ConversionHistory[];
}

const ConversionHistoryPanel = ({ history }: ConversionHistoryPanelProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">Recent Conversions</h3>
      </div>
      {history.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No conversions yet. Start converting to see your history here.
        </p>
      ) : (
        <div className="space-y-3">
          {history.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">
                    {item.from} → {item.to}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversionHistoryPanel;

