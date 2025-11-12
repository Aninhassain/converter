'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const FlowMolar = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('mole-per-second');
  const [toUnit, setToUnit] = useState<string>('mole-per-hour');

  const units = [
    { value: 'mole-per-second', label: 'Mole/second [mol/s]', factor: 1 },
    { value: 'mole-per-minute', label: 'Mole/minute [mol/min]', factor: 0.01667 },
    { value: 'mole-per-hour', label: 'Mole/hour [mol/h]', factor: 0.000278 },
    { value: 'kilomole-per-second', label: 'Kilomole/second [kmol/s]', factor: 1000 },
    { value: 'kilomole-per-hour', label: 'Kilomole/hour [kmol/h]', factor: 0.278 }
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-900">Flow (Molar) Converter</h1>
            </div>
            <p className="text-gray-600">Convert molar flow rates between mol/s, mol/min, mol/h, kmol/s, and kmol/h.</p>
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

export default FlowMolar;
