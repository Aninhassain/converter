'use client';

import { useState } from 'react';
import { Type } from 'lucide-react';

const Typography = () => {
  const [fromValue, setFromValue] = useState<string>('16');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('px');
  const [toUnit, setToUnit] = useState<string>('rem');

  // we'll assume base font size 16px for conversions involving em/rem/percent
  const basePx = 16;

  const convert = (value: number, from: string, to: string) => {
    let pxValue = value;
    if (from === 'px') pxValue = value;
    else if (from === 'rem' || from === 'em') pxValue = value * basePx;
    else if (from === '%') pxValue = (value / 100) * basePx;
    else if (from === 'pt') pxValue = value * (4/3); // 1pt = 1.333333px

    if (to === 'px') return pxValue;
    if (to === 'rem' || to === 'em') return pxValue / basePx;
    if (to === '%') return (pxValue / basePx) * 100;
    if (to === 'pt') return pxValue * 0.75; // 1px = 0.75pt
    return pxValue;
  };

  const handleChange = (val: string) => {
    setFromValue(val);
    if (val === '') { setToValue(''); return; }
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const out = convert(num, fromUnit, toUnit);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : String(parseFloat(out.toFixed(6))));
    }
  };

  const handleFromUnit = (u: string) => {
    setFromUnit(u);
    if (fromValue === '') return;
    const num = parseFloat(fromValue);
    if (!isNaN(num)) {
      const out = convert(num, u, toUnit);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : String(parseFloat(out.toFixed(6))));
    }
  };

  const handleToUnit = (u: string) => {
    setToUnit(u);
    if (fromValue === '') return;
    const num = parseFloat(fromValue);
    if (!isNaN(num)) {
      const out = convert(num, fromUnit, u);
      setToValue(Math.abs(out) < 1e-6 || Math.abs(out) > 1e6 ? out.toExponential(6) : String(parseFloat(out.toFixed(6))));
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Type className="h-8 w-8 text-rose-600" />
              <h1 className="text-3xl font-bold text-gray-900">Typography Units Converter</h1>
            </div>
            <p className="text-gray-600">Convert font sizes between px, em, rem, pt and percent (assumes 16px base).</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="number" value={fromValue} onChange={(e) => handleChange(e.target.value)} className="w-full p-3 border rounded" placeholder="Enter value" />
                <select value={fromUnit} onChange={(e) => handleFromUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  <option value="px">px</option>
                  <option value="rem">rem</option>
                  <option value="em">em</option>
                  <option value="%">%</option>
                  <option value="pt">pt</option>
                </select>
              </div>

              <div>
                <input type="text" value={toValue} readOnly className="w-full p-3 border rounded bg-gray-50" placeholder="Result" />
                <select value={toUnit} onChange={(e) => handleToUnit(e.target.value)} className="w-full p-3 border rounded mt-2">
                  <option value="rem">rem</option>
                  <option value="px">px</option>
                  <option value="em">em</option>
                  <option value="%">%</option>
                  <option value="pt">pt</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button onClick={swap} className="px-4 py-2 bg-rose-600 text-white rounded">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
