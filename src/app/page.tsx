import Link from "next/link";
import { Calculator, Ruler, Thermometer, Scale, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">ConverterHub</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your comprehensive platform for all types of unit conversions. 
              From length and weight to temperature and currency conversions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Currency Converter</h3>
              <p className="text-gray-600">Convert between different currencies with real-time exchange rates.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Ruler className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <Link href="/converters">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unit Converters</h3>
              <p className="text-gray-600">Convert between different units of measurement.</p>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Thermometer className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Temperature</h3>
              <p className="text-gray-600">Convert between Celsius, Fahrenheit, and Kelvin.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Scale className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Weight & Mass</h3>
              <p className="text-gray-600">Convert between kilograms, pounds, ounces, and more.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Box className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volume</h3>
              <p className="text-gray-600">Convert between liters, gallons, cubic meters, and more.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href="/converters"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Ruler className="h-5 w-5" />
              Explore Unit Converters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
