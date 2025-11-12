'use client';

import { useState } from 'react';
import { Beaker } from 'lucide-react';

const ConcentrationSolution = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('gram-per-liter');
  const [toUnit, setToUnit] = useState<string>('percentage-by-weight');

  const units = [
    { value: 'gram-per-liter', label: 'Gram/liter [g/L]', factor: 1 },
    { value: 'kilogram-per-cubic-meter', label: 'Kilogram/m³ [kg/m³]', factor: 1 },
    { value: 'milligram-per-liter', label: 'Milligram/liter [mg/L]', factor: 0.001 },
    { value: 'microgram-per-liter', label: 'Microgram/liter [µg/L]', factor: 0.000001 },
    { value: 'percentage-by-weight', label: 'Percentage by weight [%w/w]', factor: 10 },
    { value: 'percentage-by-volume', label: 'Percentage by volume [%v/v]', factor: 0.1 },
    { value: 'parts-per-million', label: 'Parts per million [ppm]', factor: 0.001 }
  ];

  const factorMap = units.reduce((acc, u) => { acc[u.value] = u.factor; return acc; }, {} as Record<string, number>);

  const convert = (value: number, from: string, to: string) => {
    const base = value * factorMap[from];
    return base / factorMap[to];
  };

  const update = (val: string) => {
    setFromValue(val);
    if (val === '') { setToValue(''); return; }
    const n = parseFloat(val);
    if (!isNaN(n)) {
      const out = convert(n, fromUnit, toUnit);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : String(out));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Beaker className="h-8 w-8 text-pink-600" />
              <h1 className="text-3xl font-bold text-gray-900">Concentration (Solution) Converter</h1>
            </div>
            <p className="text-gray-600">Convert solution concentration between g/L, mg/L, %w/w, %v/v, ppm, and more.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="number" value={fromValue} onChange={(e) => update(e.target.value)} className="w-full p-3 border rounded" placeholder="Enter value" />
                <select value={fromUnit} onChange={(e) => { setFromUnit(e.target.value); update(fromValue); }} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
              <div>
                <input type="text" value={toValue} readOnly className="w-full p-3 border rounded bg-gray-50" placeholder="Result" />
                <select value={toUnit} onChange={(e) => { setToUnit(e.target.value); update(fromValue); }} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcentrationSolution;
