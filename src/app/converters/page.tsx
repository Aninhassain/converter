import Link from 'next/link';
import { Ruler, Scale, Thermometer, Square, Box, Gauge, Fuel, Wrench, RotateCcw, Hash } from 'lucide-react';

export default function Converters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Unit Converters</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/length" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Length</h3>
                </div>
                <p className="text-gray-600">Convert between meters, feet, inches, and more.</p>
                <div className="mt-3 text-blue-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/weight" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Weight & Mass</h3>
                </div>
                <p className="text-gray-600">Convert between kilograms, pounds, ounces, and more.</p>
                <div className="mt-3 text-green-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/temperature" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Thermometer className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Temperature</h3>
                </div>
                <p className="text-gray-600">Convert between Celsius, Fahrenheit, and Kelvin.</p>
                <div className="mt-3 text-red-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/area" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Square className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Area</h3>
                </div>
                <p className="text-gray-600">Convert between square meters, square feet, acres, and more.</p>
                <div className="mt-3 text-purple-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/volume" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Volume</h3>
                </div>
                <p className="text-gray-600">Convert between liters, gallons, cubic meters, and more.</p>
                <div className="mt-3 text-orange-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/fuel-consumption" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Fuel className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Fuel Consumption</h3>
                </div>
                <p className="text-gray-600">Convert between L/100km, mpg, km/L, and more.</p>
                <div className="mt-3 text-green-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/torque" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Torque</h3>
                </div>
                <p className="text-gray-600">Convert between N·m, lbf·ft, kgf·m, and more.</p>
                <div className="mt-3 text-purple-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/angle" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Angle</h3>
                </div>
                <p className="text-gray-600">Convert between degrees, radians, grads, and more.</p>
                <div className="mt-3 text-blue-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <Link href="/number-converter" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Hash className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Numbers Converter</h3>
                </div>
                <p className="text-gray-600">Convert between different number bases (2-36).</p>
                <div className="mt-3 text-green-600 font-medium">Try it now →</div>
              </div>
            </Link>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-75">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">Speed</h3>
              </div>
              <p className="text-gray-600">Convert between km/h, mph, m/s, and more.</p>
              <div className="mt-3 text-gray-500 font-medium">Coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
