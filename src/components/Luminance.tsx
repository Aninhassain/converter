"use client";

import { useState } from "react";
import ConverterCard, { type ConversionHistory } from "@/components/ConverterCard";
import ComparisonChart from "@/components/ComparisonChart";
import BarComparisonChart from "@/components/BarComparisonChart";
import QuickConversions from "@/components/QuickConversions";
import ConversionHistoryPanel from "@/components/ConversionHistory";

const Luminance = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  const handleConvert = (conversion: ConversionHistory) => {
    setHistory((prev) => [...prev.slice(-9), conversion]);
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary">Professional Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Luminance</span>{" "}
            <span className="text-white">Unit Converter</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precision conversion between all standard luminance units with advanced visualization
          </p>
        </header>

        {/* Converter Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <ConverterCard onConvert={handleConvert} />
        </section>

        {/* Quick Conversions */}
        <section className="max-w-6xl mx-auto mb-12">
          <QuickConversions />
        </section>

        {/* Charts Section */}
        <section className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ComparisonChart />
            <BarComparisonChart />
          </div>
        </section>

        {/* History Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <ConversionHistoryPanel history={history} />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/30">
          <p className="text-sm text-muted-white">
            Built with precision • All luminance units supported
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Luminance;