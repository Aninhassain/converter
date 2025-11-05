'use client';

import { useState } from 'react';
import { Hash } from 'lucide-react';

const Prefixes = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('none');
  const [toUnit, setToUnit] = useState<string>('kilo');

  const prefixes = [
    { value: 'yotta', label: 'yotta (Y)', factor: 1e24 },
    { value: 'zetta', label: 'zetta (Z)', factor: 1e21 },
    { value: 'exa', label: 'exa (E)', factor: 1e18 },
    { value: 'peta', label: 'peta (P)', factor: 1e15 },
    { value: 'tera', label: 'tera (T)', factor: 1e12 },
    { value: 'giga', label: 'giga (G)', factor: 1e9 },
    { value: 'mega', label: 'mega (M)', factor: 1e6 },
    { value: 'kilo', label: 'kilo (k)', factor: 1e3 },
    { value: 'hecto', label: 'hecto (h)', factor: 1e2 },
    { value: 'deca', label: 'deca (da)', factor: 1e1 },
    { value: 'none', label: 'none', factor: 1 },
    { value: 'deci', label: 'deci (d)', factor: 1e-1 },
    { value: 'centi', label: 'centi (c)', factor: 1e-2 },
    { value: 'milli', label: 'milli (m)', factor: 1e-3 },
    { value: 'micro', label: 'micro (µ)', factor: 1e-6 },
    { value: 'nano', label: 'nano (n)', factor: 1e-9 },
    { value: 'pico', label: 'pico (p)', factor: 1e-12 },
    { value: 'femto', label: 'femto (f)', factor: 1e-15 },
    { value: 'atto', label: 'atto (a)', factor: 1e-18 },
    { value: 'zepto', label: 'zepto (z)', factor: 1e-21 },
    { value: 'yocto', label: 'yocto (y)', factor: 1e-24 }
  ];

  const factorMap = prefixes.reduce((acc, p) => { acc[p.value] = p.factor; return acc; }, {} as Record<string, number>);

  const convert = (value: number, from: string, to: string) => {
    if (from === to) return value;
    const base = value * factorMap[from];
    return base / factorMap[to];
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Hash className="h-8 w-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-900">SI Prefixes Converter</h1>
            </div>
            <p className="text-gray-600">Convert values between SI prefixes (k, M, µ, n, etc.)</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="number" value={fromValue} onChange={(e) => handleChange(e.target.value)} className="w-full p-3 border rounded" placeholder="Enter value" />
                <select value={fromUnit} onChange={(e) => handleFromUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {prefixes.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>

              <div>
                <input type="text" value={toValue} readOnly className="w-full p-3 border rounded bg-gray-50" placeholder="Result" />
                <select value={toUnit} onChange={(e) => handleToUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  {prefixes.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button onClick={swap} className="px-4 py-2 bg-indigo-600 text-white rounded">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefixes;
