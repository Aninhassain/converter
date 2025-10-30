import Link from "next/link";
import { Calculator, Ruler, Thermometer, Scale, Box, Gauge, Fuel, Wrench, RotateCcw, Hash, HardDrive, Zap, Type, Clock, Droplets, Waves, Filter, Sun, Flashlight, Lightbulb, Image, Radio, AlertTriangle, Activity, ShieldAlert, Volume2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">AAA Converter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your comprehensive platform for all types of unit conversions.
              From length and weight to temperature and currency conversions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/currency">
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Currency Converter</h3>
                <p className="text-gray-600">Convert between different currencies with real-time exchange rates.</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/converters">
                <Ruler className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Unit Converters</h3>
                <p className="text-gray-600">Convert between different units of measurement.</p>
              </Link>
            </div>
{/* 
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
            </div> */}

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/pressure">
                <Gauge className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pressure</h3>
                <p className="text-gray-600">Convert between Pascal, PSI, Bar, Atmosphere, and more.</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/fuel-consumption">
                <Fuel className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fuel Consumption</h3>
                <p className="text-gray-600">Convert between L/100km, mpg, km/L, and more.</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/torque">
                <Wrench className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Torque</h3>
                <p className="text-gray-600">Convert between N·m, lbf·ft, kgf·m, and more.</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/angle">
                <RotateCcw className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Angle</h3>
                <p className="text-gray-600">Convert between degrees, radians, grads, and more.</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/number-converter">
                <Hash className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Numbers Converter</h3>
                <p className="text-gray-600">Convert between different number bases (2-36).</p>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Link href="/data-storage">
                <HardDrive className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Storage</h3>
                <p className="text-gray-600">Convert between bits, bytes, KB, MB, GB, and more.</p>
              </Link>
            </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/force">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Force Converter</h3>
              <p className="text-gray-600">Convert between Newton, kN, lbf, dyne, kgf, and more.</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/case">
              <Type className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Case Converter</h3>
              <p className="text-gray-600">Convert between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/time">
              <Clock className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Time Converter</h3>
              <p className="text-gray-600">Convert between seconds, minutes, hours, days, weeks, months, years and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/viscosity-dynamic">
              <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dynamic Viscosity</h3>
              <p className="text-gray-600">Convert between pascal-second, poise, centipoise, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/viscosity-kinematic">
              <Droplets className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kinematic Viscosity</h3>
              <p className="text-gray-600">Convert between stokes, square meter/second, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/surface-tension">
              <Waves className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Surface Tension</h3>
              <p className="text-gray-600">Convert between newton/meter, dyne/centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/permeability">
              <Filter className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Permeability</h3>
              <p className="text-gray-600">Convert between darcy, square meter, millidarcy, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/luminance">
              <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luminance</h3>
              <p className="text-gray-600">Convert between cd/m², nit, foot-lambert, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/luminous-intensity">
              <Flashlight className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luminous Intensity</h3>
              <p className="text-gray-600">Convert between candela, candlepower, Hefner candle, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/illumination">
              <Lightbulb className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Illumination</h3>
              <p className="text-gray-600">Convert between lux, foot-candle, phot, nox, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/image-resolution">
              <Image className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Resolution</h3>
              <p className="text-gray-600">Convert between megapixels, 4K, Full HD, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/frequency-wavelength">
              <Radio className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Frequency & Wavelength</h3>
              <p className="text-gray-600">Convert between frequency and wavelength units</p>
            </Link>
          </div>
          {/* Radiation & Sound Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/radiation">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Radiation Dose</h3>
              <p className="text-gray-600">Convert between sievert, rem, gray, rad, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/radiation-activity">
              <Activity className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Radiation Activity</h3>
              <p className="text-gray-600">Convert between becquerel, curie, rutherford, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/radiation-exposure">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Radiation Exposure</h3>
              <p className="text-gray-600">Convert between roentgen, C/kg, exposure rates, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/radiation-absorbed-dose">
              <ShieldAlert className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Absorbed Dose</h3>
              <p className="text-gray-600">Convert between gray, rad, joule/kg, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/sound">
              <Volume2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sound Level</h3>
              <p className="text-gray-600">Convert between decibel, phon, SPL, pascal, and more</p>
            </Link>
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
