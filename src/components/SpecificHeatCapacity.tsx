'use client';

import { useState } from 'react';
import { Flame } from 'lucide-react';

const SpecificHeatCapacity = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('joule-per-kilogram-kelvin');
  const [toUnit, setToUnit] = useState<string>('calorie-per-gram-celsius');

  const units = [
    { value: 'joule-per-kilogram-kelvin', label: 'Joule/kg·K [J/(kg·K)]', factor: 1 },
    { value: 'joule-per-gram-celsius', label: 'Joule/g·°C [J/(g·°C)]', factor: 1000 },
    { value: 'calorie-per-gram-celsius', label: 'Cal/g·°C [cal/(g·°C)]', factor: 4.184 },
    { value: 'btu-per-pound-fahrenheit', label: 'BTU/lb·°F', factor: 4186.8 },
    { value: 'kilocalorie-per-kilogram-kelvin', label: 'kcal/kg·K', factor: 4.184 }
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flame className="h-8 w-8 text-yellow-600" />
              <h1 className="text-3xl font-bold text-gray-900">Specific Heat Capacity Converter</h1>
            </div>
            <p className="text-gray-600">Convert specific heat capacity between J/(kg·K), cal/(g·°C), BTU/(lb·°F), and more.</p>
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

export default SpecificHeatCapacity;
