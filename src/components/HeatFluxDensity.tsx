'use client';

import { useState } from 'react';
import { Sun } from 'lucide-react';

const HeatFluxDensity = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('watt-per-square-meter');
  const [toUnit, setToUnit] = useState<string>('calorie-per-second-square-centimeter');

  const units = [
    { value: 'watt-per-square-meter', label: 'Watt/m² [W/m²]', factor: 1 },
    { value: 'kilowatt-per-square-meter', label: 'Kilowatt/m² [kW/m²]', factor: 1e3 },
    { value: 'calorie-per-second-square-centimeter', label: 'Cal/(s·cm²) [cal/(s·cm²)]', factor: 41840 },
    { value: 'btu-per-hour-square-foot', label: 'BTU/(h·ft²)', factor: 3.15459 }
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sun className="h-8 w-8 text-yellow-600" />
              <h1 className="text-3xl font-bold text-gray-900">Heat Flux Density Converter</h1>
            </div>
            <p className="text-gray-600">Convert heat flux density between W/m², kW/m², cal/(s·cm²), and BTU/(h·ft²).</p>
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

export default HeatFluxDensity;
