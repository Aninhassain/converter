"use client";

import { useEffect, useRef } from 'react';

const BarComparisonChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawChart = () => {
      // Set canvas size
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      if (rect.width === 0 || rect.height === 0) {
        return; // Canvas not yet sized
      }
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

    // Chart dimensions
    const padding = { top: 20, right: 40, bottom: 40, left: 80 };
    const width = rect.width - padding.left - padding.right;
    const height = rect.height - padding.top - padding.bottom;

    // Data: relative to cd/m² (logarithmic scale for display)
    const units = [
      { name: 'sb', value: 10000 },
      { name: 'L', value: 3183.099 },
      { name: 'fL', value: 3.426259 },
      { name: 'mL', value: 3.183099 },
      { name: 'cd/m²', value: 1 },
      { name: 'nt', value: 1 },
    ];

    // Convert to logarithmic scale for better visualization
    const logValues = units.map(u => Math.log10(u.value));
    const maxLog = Math.max(...logValues);
    const minLog = Math.min(...logValues);
    const logRange = maxLog - minLog;

    // Bar dimensions
    const barHeight = height / units.length;
    const barSpacing = 8;

    // Draw bars
    units.forEach((unit, index) => {
      const normalizedLog = (Math.log10(unit.value) - minLog) / logRange;
      const barWidth = normalizedLog * width;

      // Draw bar
      const y = padding.top + index * barHeight + barSpacing / 2;
      const actualBarHeight = barHeight - barSpacing;

      // Gradient for bar
      const gradient = ctx.createLinearGradient(
        padding.left,
        y,
        padding.left + barWidth,
        y
      );
      gradient.addColorStop(0, 'rgb(34, 211, 238)');
      gradient.addColorStop(1, 'rgb(59, 130, 246)');

      ctx.fillStyle = gradient;
      ctx.fillRect(padding.left, y, barWidth, actualBarHeight);

      // Draw border
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.5)';
      ctx.lineWidth = 1;
      ctx.strokeRect(padding.left, y, barWidth, actualBarHeight);

      // Draw unit label
      ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
      ctx.font = '14px Montserrat';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(unit.name, padding.left - 10, y + actualBarHeight / 2);

      // Draw value label
      if (barWidth > 50) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.textAlign = 'left';
        ctx.fillText(
          normalizedLog.toFixed(2),
          padding.left + barWidth + 10,
          y + actualBarHeight / 2
        );
      }
    });

    // Draw X-axis
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + height);
    ctx.lineTo(padding.left + width, padding.top + height);
    ctx.stroke();

    // Draw X-axis labels
    ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
    ctx.font = '12px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const xTicks = [0, 1, 2, 3, 4];
    xTicks.forEach(tick => {
      const x = padding.left + (tick / 4) * width;
      ctx.beginPath();
      ctx.moveTo(x, padding.top + height);
      ctx.lineTo(x, padding.top + height + 5);
      ctx.stroke();
      ctx.fillText(tick.toString(), x, padding.top + height + 10);
    });
    };

    // Initial draw with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      drawChart();
    }, 100);

    const handleResize = () => {
      drawChart();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-6 shadow-2xl">
      <h3 className="text-2xl font-bold text-primary mb-2">Top Units by Magnitude</h3>
      <p className="text-muted-foreground mb-6">Comparison of largest luminance units</p>
      <div className="w-full" style={{ height: '300px' }}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default BarComparisonChart;

