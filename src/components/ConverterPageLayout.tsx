"use client";

import React from 'react';

interface QuickConversion {
  from: string;
  to: string;
  conversion: string;
}

interface ConverterPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  quickConversions?: QuickConversion[];
  footerText?: string;
}

const ConverterPageLayout = ({
  title,
  subtitle,
  description,
  children,
  quickConversions,
  footerText,
}: ConverterPageLayoutProps) => {
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
            <span className="text-gradient">{title}</span>{" "}
            <span className="text-white">{subtitle}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </header>

        {/* Converter Section */}
        <section className="max-w-4xl mx-auto mb-12">
          {children}
        </section>

        {/* Quick Conversions */}
        {quickConversions && quickConversions.length > 0 && (
          <section className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">Common Conversions</h3>
            <p className="text-muted-foreground mb-6">Quick reference for frequently used conversions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickConversions.map((conv, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-xl rounded-lg p-4 border border-border/30 shadow-lg hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-medium text-foreground mb-2">
                    {conv.from} → {conv.to}
                  </h4>
                  <p className="text-sm text-muted-foreground">{conv.conversion}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            {footerText || `Built with precision • All ${title.toLowerCase()} units supported`}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ConverterPageLayout;
