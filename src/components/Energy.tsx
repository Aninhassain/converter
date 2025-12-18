'use client';

import { useState } from 'react';
import { Zap, RotateCcw } from 'lucide-react';

const Energy = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromUnit = 'joule';
  const defaultToUnit = 'kilocalorie';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  const units = [
    { value: 'joule', label: 'Joule [J]', factor: 1 },
    { value: 'kilojoule', label: 'Kilojoule [kJ]', factor: 1e3 },
    { value: 'megajoule', label: 'Megajoule [MJ]', factor: 1e6 },
    { value: 'calorie', label: 'Calorie [cal]', factor: 4.184 },
    { value: 'kilocalorie', label: 'Kilocalorie [kcal]', factor: 4184 },
    { value: 'watt-hour', label: 'Watt-hour [Wh]', factor: 3600 },
    { value: 'kilowatt-hour', label: 'Kilowatt-hour [kWh]', factor: 3.6e6 },
    { value: 'erg', label: 'Erg [erg]', factor: 0.0000001 },
    { value: 'electron-volt', label: 'Electron volt [eV]', factor: 1.602176634e-19 }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
              <h1 className="text-3xl font-bold text-gray-900">Energy Converter</h1>
            </div>
            <p className="text-gray-600">Convert between joule, kilojoule, calorie, kilocalorie, watt-hour, and more.</p>
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
              <button onClick={handleReset} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors">
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

export default Energy;
