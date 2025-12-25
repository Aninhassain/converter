"use client";

import { useEffect, useRef } from 'react';

const ComparisonChart = () => {
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
    const padding = { top: 40, right: 20, bottom: 40, left: 60 };
    const width = rect.width - padding.left - padding.right;
    const height = rect.height - padding.top - padding.bottom;

    // Data: relative to cd/m² (logarithmic scale)
    const units = [
      { name: 'sb', value: 10000 },
      { name: 'L', value: 3183.099 },
      { name: 'fL', value: 3.426259 },
      { name: 'mL', value: 3.183099 },
      { name: 'cd/m²', value: 1 },
      { name: 'nt', value: 1 },
      { name: 'asb', value: 0.3183099 },
      { name: 'blondel', value: 0.3183099 },
    ];

    // Convert to logarithmic scale (base 10)
    const logValues = units.map(u => Math.log10(u.value));

    // Find min and max for scaling
    const minLog = Math.min(...logValues);
    const maxLog = Math.max(...logValues);
    const logRange = maxLog - minLog;

    // Draw axes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.lineWidth = 1;

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + height);
    ctx.stroke();

    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + height);
    ctx.lineTo(padding.left + width, padding.top + height);
    ctx.stroke();

    // Draw Y-axis labels (logarithmic scale)
    ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
    ctx.font = '12px Montserrat';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const yTicks = [6, 4, 2, 0, -2];
    yTicks.forEach(tick => {
      const y = padding.top + height - ((tick - minLog) / logRange) * height;
      if (y >= padding.top && y <= padding.top + height) {
        ctx.fillText(`10^${tick}`, padding.left - 10, y);
        ctx.beginPath();
        ctx.moveTo(padding.left - 5, y);
        ctx.lineTo(padding.left, y);
        ctx.stroke();
      }
    });

    // Draw X-axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xStep = width / (units.length - 1);
    units.forEach((unit, index) => {
      const x = padding.left + index * xStep;
      ctx.fillText(unit.name, x, padding.top + height + 10);
    });

    // Draw line and area
    const gradient = ctx.createLinearGradient(
      padding.left,
      padding.top,
      padding.left,
      padding.top + height
    );
    gradient.addColorStop(0, 'rgba(34, 211, 238, 0.6)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)');

    // Draw filled area
    ctx.beginPath();
    units.forEach((unit, index) => {
      const x = padding.left + index * xStep;
      const normalizedLog = (Math.log10(unit.value) - minLog) / logRange;
      const y = padding.top + height - normalizedLog * height;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.lineTo(padding.left + width, padding.top + height);
    ctx.lineTo(padding.left, padding.top + height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(34, 211, 238)';
    ctx.lineWidth = 2;
    units.forEach((unit, index) => {
      const x = padding.left + index * xStep;
      const normalizedLog = (Math.log10(unit.value) - minLog) / logRange;
      const y = padding.top + height - normalizedLog * height;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw points
    units.forEach((unit, index) => {
      const x = padding.left + index * xStep;
      const normalizedLog = (Math.log10(unit.value) - minLog) / logRange;
      const y = padding.top + height - normalizedLog * height;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgb(34, 211, 238)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(59, 130, 246)';
      ctx.lineWidth = 2;
      ctx.stroke();
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
      <h3 className="text-2xl font-bold text-primary mb-2">Unit Comparison</h3>
      <p className="text-muted-foreground mb-6">Logarithmic scale comparison (relative to cd/m²)</p>
      <div className="w-full" style={{ height: '300px' }}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default ComparisonChart;

