'use client';

import { useState } from 'react';
import { Hash } from 'lucide-react';

const NumberConverter = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromBase, setFromBase] = useState<number>(2);
  const [toBase, setToBase] = useState<number>(8);

  // Generate number bases from 2 to 36
  const numberBases = Array.from({ length: 35 }, (_, i) => i + 2).map(base => ({
    value: base,
    label: base === 2 ? 'Binary' : 
           base === 8 ? 'Octal' : 
           base === 10 ? 'Decimal' : 
           base === 16 ? 'Hexadecimal' : 
           `Base-${base}`,
    symbol: base === 2 ? 'binary' :
            base === 8 ? 'octal' :
            base === 10 ? 'decimal' :
            base === 16 ? 'hexadecimal' :
            `base-${base}`
  }));

  // Convert a number from one base to another
  const convertNumber = (value: string, fromBase: number, toBase: number): string => {
    if (fromBase === toBase) return value;
    
    try {
      // Convert to decimal first
      const decimal = parseInt(value, fromBase);
      
      // Handle NaN case
      if (isNaN(decimal)) {
        return 'Invalid input';
      }
      
      // Convert from decimal to target base
      return decimal.toString(toBase).toUpperCase();
    } catch {
      return 'Invalid input';
    }
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const converted = convertNumber(value, fromBase, toBase);
    setToValue(converted);
  };

  const handleFromBaseChange = (base: number) => {
    setFromBase(base);
    if (fromValue === '') return;
    
    const converted = convertNumber(fromValue, base, toBase);
    setToValue(converted);
  };

  const handleToBaseChange = (base: number) => {
    setToBase(base);
    if (fromValue === '') return;
    
    const converted = convertNumber(fromValue, fromBase, base);
    setToValue(converted);
  };

  const swapBases = () => {
    const tempBase = fromBase;
    const tempValue = fromValue;
    
    setFromBase(toBase);
    setToBase(tempBase);
    setFromValue(toValue);
    setToValue(tempValue);
  };

  // Get valid characters for a given base
  const getValidCharacters = (base: number): string => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars.substring(0, base);
  };

  // Validate input for a given base
  const isValidInput = (value: string, base: number): boolean => {
    if (!value) return true;
    const validChars = getValidCharacters(base);
    return value.split('').every(char => validChars.includes(char.toUpperCase()));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Hash className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">Numbers Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert numbers between different bases (2-36)
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* From Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From:
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Enter number"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg ${
                      fromValue && !isValidInput(fromValue, fromBase) 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300'
                    }`}
                  />
                  <select
                    value={fromBase}
                    onChange={(e) => handleFromBaseChange(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                  >
                    {numberBases.map((base) => (
                      <option key={base.value} value={base.value}>
                        {base.label} ({base.symbol})
                      </option>
                    ))}
                  </select>
                  {fromValue && !isValidInput(fromValue, fromBase) && (
                    <p className="text-sm text-red-600">
                      Invalid characters for base {fromBase}. Valid characters: {getValidCharacters(fromBase)}
                    </p>
                  )}
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center lg:order-3">
                <button
                  onClick={swapBases}
                  className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  title="Swap bases"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </button>
              </div>

              {/* To Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To:
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={toValue}
                    readOnly
                    placeholder="Result will appear here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg text-gray-700"
                  />
                  <select
                    value={toBase}
                    onChange={(e) => handleToBaseChange(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                  >
                    {numberBases.map((base) => (
                      <option key={base.value} value={base.value}>
                        {base.label} ({base.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && isValidInput(fromValue, fromBase) && (
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> (base {fromBase}) = 
                  <span className="font-semibold text-green-600"> {toValue}</span> (base {toBase})
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Number Base Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Binary (Base 2)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Uses digits: 0, 1</li>
                  <li>Common in computing</li>
                  <li>Example: 1010₂ = 10₁₀</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Octal (Base 8)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Uses digits: 0-7</li>
                  <li>Historical computing</li>
                  <li>Example: 12₈ = 10₁₀</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Hexadecimal (Base 16)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Uses digits: 0-9, A-F</li>
                  <li>Modern computing</li>
                  <li>Example: A₁₆ = 10₁₀</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Base Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Number Base Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Common Bases</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Base 2: Binary (0,1)</li>
                  <li>Base 8: Octal (0-7)</li>
                  <li>Base 10: Decimal (0-9)</li>
                  <li>Base 16: Hexadecimal (0-9,A-F)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Extended Bases</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Base 20: Vigesimal (0-9,A-J)</li>
                  <li>Base 26: Alphabetic (0-9,A-P)</li>
                  <li>Base 32: Base32 encoding</li>
                  <li>Base 36: Alphanumeric (0-9,A-Z)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Applications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Binary: Computer logic</li>
                  <li>Octal: Unix permissions</li>
                  <li>Hex: Memory addresses</li>
                  <li>Base 36: URL shorteners</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Examples */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conversion Examples</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Binary to Decimal</h4>
                  <p className="text-sm text-gray-600">1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10₁₀</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Decimal to Hexadecimal</h4>
                  <p className="text-sm text-gray-600">255₁₀ = FF₁₆ (15×16¹ + 15×16⁰ = 240 + 15 = 255)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Hexadecimal to Binary</h4>
                  <p className="text-sm text-gray-600">A₁₆ = 1010₂ (each hex digit = 4 binary digits)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Base 36 Example</h4>
                  <p className="text-sm text-gray-600">Z₁₆ = 35₁₀ (Z is the 35th character in base 36)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberConverter;
