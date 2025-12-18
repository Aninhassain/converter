'use client';

import { useState } from 'react';
import { Waves, RotateCcw } from 'lucide-react';

const Flow = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'cubic-meter-per-second';
  const defaultToUnit = 'liter-per-second';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  const units = [
    { value: 'cubic-meter-per-second', label: 'Cubic meter/second [m³/s]', factor: 1 },
    { value: 'cubic-meter-per-hour', label: 'Cubic meter/hour [m³/h]', factor: 0.000278 },
    { value: 'liter-per-second', label: 'Liter/second [L/s]', factor: 1000 },
    { value: 'liter-per-minute', label: 'Liter/minute [L/min]', factor: 60000 },
    { value: 'liter-per-hour', label: 'Liter/hour [L/h]', factor: 3.6e6 },
    { value: 'cubic-foot-per-second', label: 'Cubic foot/second [ft³/s]', factor: 35.3147 },
    { value: 'gallon-per-minute-us', label: 'Gallon/minute US [gal/min]', factor: 15850.4 }
  ];

  const factorMap = units.reduce((acc, u) => { acc[u.value] = u.factor; return acc; }, {} as Record<string, number>);

  const convert = (value: number, from: string, to: string) => {
    const base = value * factorMap[from];
    return base / factorMap[to];
  };

  const update = (val: string, from = fromUnit, to = toUnit) => {
    setFromValue(val);
    if (val === '') {
      setToValue('');
      return;
    }
    const n = parseFloat(val);
    if (!isNaN(n)) {
      const out = convert(n, from, to);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : String(out));
    }
  };

  const handleFromUnitChange = (newFromUnit: string) => {
    setFromUnit(newFromUnit);
    update(fromValue, newFromUnit, toUnit);
  };

  const handleToUnitChange = (newToUnit: string) => {
    setToUnit(newToUnit);
    update(fromValue, fromUnit, newToUnit);
  };

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setFromUnit(defaultFromUnit);
    setToUnit(defaultToUnit);
    update(defaultFromValue, defaultFromUnit, defaultToUnit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Waves className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Flow Converter</h1>
            </div>
            <p className="text-gray-600">Convert volumetric flow rates between m³/s, L/s, L/min, ft³/s, gal/min, and more.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="number" value={fromValue} onChange={(e) => update(e.target.value)} className="w-full p-3 border rounded" placeholder="Enter value" />
                <select value={fromUnit} onChange={(e) => handleFromUnitChange(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
              <div>
                <input type="text" value={toValue} readOnly className="w-full p-3 border rounded bg-gray-50" placeholder="Result" />
                <select value={toUnit} onChange={(e) => handleToUnitChange(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
            </div>
            <div className="text-center mt-4">
              <button onClick={handleReset} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
