"use client";

const QuickConversions = () => {
  const conversions = [
    { from: 'cd/m²', to: 'nt', conversion: '1 cd/m² = 1 nt' },
    { from: 'fL', to: 'cd/m²', conversion: '1 fL ≈ 3.426 cd/m²' },
    { from: 'sb', to: 'cd/m²', conversion: '1 sb = 10000 cd/m²' },
    { from: 'L', to: 'cd/m²', conversion: '1 L ≈ 3183 cd/m²' },
    { from: 'asb', to: 'cd/m²', conversion: '1 asb ≈ 0.318 cd/m²' },
    { from: 'mL', to: 'cd/m²', conversion: '1 mL ≈ 3.183 cd/m²' },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-2">Common Conversions</h3>
      <p className="text-muted-foreground mb-6">Quick reference for frequently used conversions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conversions.map((conv, index) => (
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
    </div>
  );
};

export default QuickConversions;

