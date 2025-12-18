'use client';

import { useState } from 'react';
import { HardDrive, RotateCcw } from 'lucide-react';

const DataTransfer = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'byte';
  const defaultToUnit = 'kilobyte';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  const units = [
    { value: 'bit', label: 'Bit', factor: 1 },
    { value: 'kilobit', label: 'Kilobit (kbit)', factor: 1e3 },
    { value: 'kibibit', label: 'Kibibit (Kibit)', factor: 1024 },
    { value: 'megabit', label: 'Megabit (Mbit)', factor: 1e6 },
    { value: 'mebibit', label: 'Mebibit (Mibit)', factor: 1024 ** 2 },
    { value: 'gigabit', label: 'Gigabit (Gbit)', factor: 1e9 },
    { value: 'gibibit', label: 'Gibibit (Gibit)', factor: 1024 ** 3 },
    { value: 'byte', label: 'Byte', factor: 8 },
    { value: 'kilobyte', label: 'Kilobyte (KB)', factor: 8 * 1e3 },
    { value: 'kibibyte', label: 'Kibibyte (KiB)', factor: 8 * 1024 },
    { value: 'megabyte', label: 'Megabyte (MB)', factor: 8 * 1e6 },
    { value: 'mebibyte', label: 'Mebibyte (MiB)', factor: 8 * 1024 ** 2 },
    { value: 'gigabyte', label: 'Gigabyte (GB)', factor: 8 * 1e9 },
    { value: 'gibibyte', label: 'Gibibyte (GiB)', factor: 8 * 1024 ** 3 }
  ];

  const factorMap = units.reduce((acc, u) => { acc[u.value] = u.factor; return acc; }, {} as Record<string, number>);

  const convert = (value: number, from: string, to: string) => {
    if (from === to) return value;
    const bits = value * factorMap[from];
    return bits / factorMap[to];
  };

  const handleChange = (val: string, from = fromUnit, to = toUnit) => {
    setFromValue(val);
    if (val === '') {
      setToValue('');
      return;
    }
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const out = convert(num, from, to);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : out.toString());
    }
  };

  const handleFromUnit = (u: string) => {
    setFromUnit(u);
    handleChange(fromValue, u, toUnit);
  };

  const handleToUnit = (u: string) => {
    setToUnit(u);
    handleChange(fromValue, fromUnit, u);
  };

  const swap = () => {
    const tv = fromValue;
    const fu = fromUnit;
    setFromValue(toValue);
    setFromUnit(toUnit);
    setToValue(tv);
    setToUnit(fu);
  };

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setFromUnit(defaultFromUnit);
    setToUnit(defaultToUnit);
    handleChange(defaultFromValue, defaultFromUnit, defaultToUnit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HardDrive className="h-8 w-8 text-sky-600" />
              <h1 className="text-3xl font-bold text-gray-900">Data Transfer Converter</h1>
            </div>
            <p className="text-gray-600">Convert between bits, bytes, kilobits, kibibytes, megabytes, gibibytes, and more.</p>
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
              <button onClick={swap} className="px-4 py-2 bg-sky-600 text-white rounded">Swap</button>
              <button onClick={handleReset} className="ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded inline-flex items-center">
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

export default DataTransfer;
