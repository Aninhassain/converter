'use client';

import { useState } from 'react';
import { HardDrive } from 'lucide-react';

const DataStorage = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('bit');
  const [toUnit, setToUnit] = useState<string>('nibble');

  const dataStorageUnits = [
    // Basic units
    { value: 'bit', label: 'Bit', symbol: 'b' },
    { value: 'nibble', label: 'Nibble', symbol: 'nibble' },
    { value: 'byte', label: 'Byte', symbol: 'B' },
    { value: 'character', label: 'Character', symbol: 'char' },
    { value: 'word', label: 'Word', symbol: 'word' },
    { value: 'mapm_word', label: 'MAPM-word', symbol: 'MAPM-word' },
    { value: 'quadruple_word', label: 'Quadruple-word', symbol: 'quad-word' },
    { value: 'block', label: 'Block', symbol: 'block' },
    
    // Kilobits and Kilobytes
    { value: 'kilobit', label: 'Kilobit', symbol: 'kb' },
    { value: 'kilobyte', label: 'Kilobyte', symbol: 'kB' },
    { value: 'kilobyte_si', label: 'Kilobyte (10³ bytes)', symbol: 'kB (10³)' },
    
    // Megabits and Megabytes
    { value: 'megabit', label: 'Megabit', symbol: 'Mb' },
    { value: 'megabyte', label: 'Megabyte', symbol: 'MB' },
    { value: 'megabyte_si', label: 'Megabyte (10⁶ bytes)', symbol: 'MB (10⁶)' },
    
    // Gigabits and Gigabytes
    { value: 'gigabit', label: 'Gigabit', symbol: 'Gb' },
    { value: 'gigabyte', label: 'Gigabyte', symbol: 'GB' },
    { value: 'gigabyte_si', label: 'Gigabyte (10⁹ bytes)', symbol: 'GB (10⁹)' },
    
    // Terabits and Terabytes
    { value: 'terabit', label: 'Terabit', symbol: 'Tb' },
    { value: 'terabyte', label: 'Terabyte', symbol: 'TB' },
    { value: 'terabyte_si', label: 'Terabyte (10¹² bytes)', symbol: 'TB (10¹²)' },
    
    // Petabits and Petabytes
    { value: 'petabit', label: 'Petabit', symbol: 'Pb' },
    { value: 'petabyte', label: 'Petabyte', symbol: 'PB' },
    { value: 'petabyte_si', label: 'Petabyte (10¹⁵ bytes)', symbol: 'PB (10¹⁵)' },
    
    // Exabits and Exabytes
    { value: 'exabit', label: 'Exabit', symbol: 'Eb' },
    { value: 'exabyte', label: 'Exabyte', symbol: 'EB' },
    { value: 'exabyte_si', label: 'Exabyte (10¹⁸ bytes)', symbol: 'EB (10¹⁸)' },
    
    // Zettabytes and Yottabytes
    { value: 'zettabyte', label: 'Zettabyte', symbol: 'ZB' },
    { value: 'yottabyte', label: 'Yottabyte', symbol: 'YB' },
    
    // Legacy storage media
    { value: 'floppy_3_5_dd', label: 'Floppy Disk (3.5", DD)', symbol: '3.5" DD' },
    { value: 'floppy_3_5_hd', label: 'Floppy Disk (3.5", HD)', symbol: '3.5" HD' },
    { value: 'floppy_3_5_ed', label: 'Floppy Disk (3.5", ED)', symbol: '3.5" ED' },
    { value: 'floppy_5_25_dd', label: 'Floppy Disk (5.25", DD)', symbol: '5.25" DD' },
    { value: 'floppy_5_25_hd', label: 'Floppy Disk (5.25", HD)', symbol: '5.25" HD' },
    { value: 'zip_100', label: 'Zip 100', symbol: 'Zip 100' },
    { value: 'zip_250', label: 'Zip 250', symbol: 'Zip 250' },
    { value: 'jaz_1gb', label: 'Jaz 1GB', symbol: 'Jaz 1GB' },
    { value: 'jaz_2gb', label: 'Jaz 2GB', symbol: 'Jaz 2GB' },
    
    // Optical media
    { value: 'cd_74_min', label: 'CD (74 minute)', symbol: 'CD 74min' },
    { value: 'cd_80_min', label: 'CD (80 minute)', symbol: 'CD 80min' },
    { value: 'dvd_1_layer_1_side', label: 'DVD (1 layer, 1 side)', symbol: 'DVD 1L1S' },
    { value: 'dvd_2_layer_1_side', label: 'DVD (2 layer, 1 side)', symbol: 'DVD 2L1S' },
    { value: 'dvd_1_layer_2_side', label: 'DVD (1 layer, 2 side)', symbol: 'DVD 1L2S' },
    { value: 'dvd_2_layer_2_side', label: 'DVD (2 layer, 2 side)', symbol: 'DVD 2L2S' },
    { value: 'bluray_single', label: 'Blu-ray (Single Layer)', symbol: 'BD SL' },
    { value: 'bluray_dual', label: 'Blu-ray (Dual Layer)', symbol: 'BD DL' }
  ];

  // Conversion factors to bytes (base unit)
  const conversionFactors: { [key: string]: number } = {
    // Basic units
    bit: 1/8,
    nibble: 0.5,
    byte: 1,
    character: 1,
    word: 4, // Assuming 32-bit word
    mapm_word: 8, // MAPM typically uses 64-bit words
    quadruple_word: 8,
    block: 512, // Standard block size
    
    // Kilobits and Kilobytes (binary)
    kilobit: 1024/8,
    kilobyte: 1024,
    kilobyte_si: 1000,
    
    // Megabits and Megabytes (binary)
    megabit: 1024*1024/8,
    megabyte: 1024*1024,
    megabyte_si: 1000*1000,
    
    // Gigabits and Gigabytes (binary)
    gigabit: 1024*1024*1024/8,
    gigabyte: 1024*1024*1024,
    gigabyte_si: 1000*1000*1000,
    
    // Terabits and Terabytes (binary)
    terabit: 1024*1024*1024*1024/8,
    terabyte: 1024*1024*1024*1024,
    terabyte_si: 1000*1000*1000*1000,
    
    // Petabits and Petabytes (binary)
    petabit: 1024*1024*1024*1024*1024/8,
    petabyte: 1024*1024*1024*1024*1024,
    petabyte_si: 1000*1000*1000*1000*1000,
    
    // Exabits and Exabytes (binary)
    exabit: 1024*1024*1024*1024*1024*1024/8,
    exabyte: 1024*1024*1024*1024*1024*1024,
    exabyte_si: 1000*1000*1000*1000*1000*1000,
    
    // Zettabytes and Yottabytes
    zettabyte: 1024*1024*1024*1024*1024*1024*1024,
    yottabyte: 1024*1024*1024*1024*1024*1024*1024*1024,
    
    // Legacy storage media (approximate capacities in bytes)
    floppy_3_5_dd: 737280, // 720 KB
    floppy_3_5_hd: 1474560, // 1.44 MB
    floppy_3_5_ed: 2880000, // 2.88 MB
    floppy_5_25_dd: 368640, // 360 KB
    floppy_5_25_hd: 1228800, // 1.2 MB
    zip_100: 100*1024*1024, // 100 MB
    zip_250: 250*1024*1024, // 250 MB
    jaz_1gb: 1024*1024*1024, // 1 GB
    jaz_2gb: 2*1024*1024*1024, // 2 GB
    
    // Optical media (approximate capacities in bytes)
    cd_74_min: 650*1024*1024, // 650 MB
    cd_80_min: 700*1024*1024, // 700 MB
    dvd_1_layer_1_side: 4.7*1024*1024*1024, // 4.7 GB
    dvd_2_layer_1_side: 8.5*1024*1024*1024, // 8.5 GB
    dvd_1_layer_2_side: 9.4*1024*1024*1024, // 9.4 GB
    dvd_2_layer_2_side: 17*1024*1024*1024, // 17 GB
    bluray_single: 25*1024*1024*1024, // 25 GB
    bluray_dual: 50*1024*1024*1024 // 50 GB
  };

  const convertDataStorage = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to bytes first
    const bytes = value * conversionFactors[from];
    // Convert from bytes to target unit
    return bytes / conversionFactors[to];
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    if (value === '') {
      setToValue('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = convertDataStorage(numValue, fromUnit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDataStorage(numValue, unit, toUnit);
      setToValue(converted.toFixed(6));
    }
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    if (fromValue === '') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const converted = convertDataStorage(numValue, fromUnit, unit);
      setToValue(converted.toFixed(6));
    }
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    const tempValue = fromValue;
    
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
    setToValue(tempValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HardDrive className="h-8 w-8 text-indigo-600" />
              <h1 className="text-4xl font-bold text-gray-900">Data Storage Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different data storage units
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
                    type="number"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Enter storage value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg bg-white"
                  >
                    {dataStorageUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label} ({unit.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center lg:order-3">
                <button
                  onClick={swapUnits}
                  className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                  title="Swap units"
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
                    value={toUnit}
                    onChange={(e) => handleToUnitChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg bg-white"
                  >
                    {dataStorageUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label} ({unit.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && (
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {dataStorageUnits.find(u => u.value === fromUnit)?.label} = 
                  <span className="font-semibold text-indigo-600"> {toValue}</span> {dataStorageUnits.find(u => u.value === toUnit)?.label}
                </p>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Data Storage Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Basic Units</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 byte = 8 bits</li>
                  <li>1 nibble = 4 bits</li>
                  <li>1 word = 4 bytes (32-bit)</li>
                  <li>1 block = 512 bytes</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Binary vs Decimal</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1 KB = 1,024 bytes (binary)</li>
                  <li>1 KB = 1,000 bytes (decimal)</li>
                  <li>1 MB = 1,048,576 bytes</li>
                  <li>1 GB = 1,073,741,824 bytes</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Storage Media</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Floppy 3.5&ldquo; HD: 1.44 MB</li>
                  <li>CD-ROM: 650-700 MB</li>
                  <li>DVD: 4.7-17 GB</li>
                  <li>Blu-ray: 25-50 GB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Storage Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Storage Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Modern Storage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>USB Flash: 1-512 GB</li>
                  <li>SSD: 128 GB - 8 TB</li>
                  <li>HDD: 500 GB - 20 TB</li>
                  <li>Cloud: Unlimited</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Legacy Media</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Floppy 5.25&ldquo;: 360 KB - 1.2 MB</li>
                  <li>Floppy 3.5&ldquo;: 720 KB - 2.88 MB</li>
                  <li>Zip Disk: 100-750 MB</li>
                  <li>Jaz Disk: 1-2 GB</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-700 mb-2">Optical Media</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>CD: 650-800 MB</li>
                  <li>DVD: 4.7-17 GB</li>
                  <li>Blu-ray: 25-50 GB</li>
                  <li>4K Blu-ray: 100 GB</li>
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
                  <h4 className="font-semibold text-gray-700 mb-2">Basic Conversions</h4>
                  <p className="text-sm text-gray-600">1 MB = 1,048,576 bytes</p>
                  <p className="text-sm text-gray-600">1 GB = 1,073,741,824 bytes</p>
                  <p className="text-sm text-gray-600">1 TB = 1,099,511,627,776 bytes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Media Capacities</h4>
                  <p className="text-sm text-gray-600">1 CD (74 min) ≈ 650 MB</p>
                  <p className="text-sm text-gray-600">1 DVD (single layer) ≈ 4.7 GB</p>
                  <p className="text-sm text-gray-600">1 Blu-ray (single layer) ≈ 25 GB</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Binary Prefixes</h4>
                  <p className="text-sm text-gray-600">Kibi (Ki) = 2¹⁰ = 1,024</p>
                  <p className="text-sm text-gray-600">Mebi (Mi) = 2²⁰ = 1,048,576</p>
                  <p className="text-sm text-gray-600">Gibi (Gi) = 2³⁰ = 1,073,741,824</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Decimal Prefixes</h4>
                  <p className="text-sm text-gray-600">Kilo (K) = 10³ = 1,000</p>
                  <p className="text-sm text-gray-600">Mega (M) = 10⁶ = 1,000,000</p>
                  <p className="text-sm text-gray-600">Giga (G) = 10⁹ = 1,000,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStorage;
