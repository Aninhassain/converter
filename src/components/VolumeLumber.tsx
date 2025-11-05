'use client';

import { useState } from 'react';
import { Box } from 'lucide-react';

const VolumeLumber = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('board-foot');
  const [toUnit, setToUnit] = useState<string>('cubic-meter');

  const units = [
    { value: 'board-foot', label: 'Board Foot (bd ft)' },
    { value: 'cubic-inch', label: 'Cubic Inch (in³)' },
    { value: 'cubic-foot', label: 'Cubic Foot (ft³)' },
    { value: 'cubic-meter', label: 'Cubic Meter (m³)' }
  ];

  // We'll use cubic meter as base
  const factorToCubicMeter: Record<string, number> = {
    'board-foot': 144 / 61023.7441, // 144 in^3 per bdft, 1 m^3 = 61023.7441 in^3
    'cubic-inch': 1 / 61023.7441,
    'cubic-foot': 1728 / 61023.7441,
    'cubic-meter': 1
  };

  const convert = (value: number, from: string, to: string) => {
    if (from === to) return value;
    const m3 = value * factorToCubicMeter[from];
    return m3 / factorToCubicMeter[to];
  };

  const handleChange = (val: string) => {
    setFromValue(val);
    if (val === '') { setToValue(''); return; }
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const out = convert(num, fromUnit, toUnit);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : out.toString());
    }
  };

  const handleFromUnit = (u: string) => {
    setFromUnit(u);
    if (fromValue === '') return;
    const num = parseFloat(fromValue);
    if (!isNaN(num)) {
      const out = convert(num, u, toUnit);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : out.toString());
    }
  };

  const handleToUnit = (u: string) => {
    setToUnit(u);
    if (fromValue === '') return;
    const num = parseFloat(fromValue);
    if (!isNaN(num)) {
      const out = convert(num, fromUnit, u);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : out.toString());
    }
  };

  const swap = () => {
    const tv = fromValue;
    const fu = fromUnit;
    setFromValue(toValue);
    setFromUnit(toUnit);
    setToValue(tv);
    setToUnit(fu);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Box className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Lumber Volume Converter</h1>
            </div>
            <p className="text-gray-600">Convert between board foot, cubic inch, cubic foot and cubic meter.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="number" value={fromValue} onChange={(e) => handleChange(e.target.value)} className="w-full p-3 border rounded" placeholder="Enter value" />
                <select value={fromUnit} onChange={(e) => handleFromUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>

              <div>
                <input type="text" value={toValue} readOnly className="w-full p-3 border rounded bg-gray-50" placeholder="Result" />
                <select value={toUnit} onChange={(e) => handleToUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button onClick={swap} className="px-4 py-2 bg-green-600 text-white rounded">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeLumber;
