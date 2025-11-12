import Link from "next/link";
import { Calculator, Ruler, Thermometer, Scale, Box, Gauge, Fuel, Wrench, RotateCcw, RotateCw, Hash, HardDrive, Zap, Type, Clock, Droplets, Waves, Filter, Sun, Flashlight, Lightbulb, Image, Radio, AlertTriangle, Activity, ShieldAlert, Volume2, Flame, Beaker } from "lucide-react";

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
              <Image aria-hidden="true" className="h-12 w-12 text-blue-500 mx-auto mb-4" />
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

          {/* Electrical & Magnetic Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-charge">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Charge</h3>
              <p className="text-gray-600">Convert between coulomb, ampere-hour, elementary charge, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/linear-charge-density">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Linear Charge Density</h3>
              <p className="text-gray-600">Convert between coulomb/meter, coulomb/centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/surface-charge-density">
              <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Surface Charge Density</h3>
              <p className="text-gray-600">Convert between coulomb/square meter, coulomb/square centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/volume-charge-density">
              <Zap className="h-12 w-12 text-violet-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volume Charge Density</h3>
              <p className="text-gray-600">Convert between coulomb/cubic meter, coulomb/cubic centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-current">
              <Zap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Current</h3>
              <p className="text-gray-600">Convert between ampere, milliampere, coulomb/second, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/linear-current-density">
              <Zap className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Linear Current Density</h3>
              <p className="text-gray-600">Convert between ampere/meter, ampere/centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/surface-current-density">
              <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Surface Current Density</h3>
              <p className="text-gray-600">Convert between ampere/square meter, ampere/square centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-field-strength">
              <Zap className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Field Strength</h3>
              <p className="text-gray-600">Convert between volt/meter, newton/coulomb, statvolt/centimeter, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-potential">
              <Zap className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Potential</h3>
              <p className="text-gray-600">Convert between volt, kilovolt, statvolt, abvolt, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-resistance">
              <Zap className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Resistance</h3>
              <p className="text-gray-600">Convert between ohm, kiloohm, megaohm, abohm, statohm, and more</p>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-conductance">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Conductance</h3>
              <p className="text-gray-600">Convert between siemens, millisiemens, microsiemens and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electric-conductivity">
              <Filter className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Conductivity</h3>
              <p className="text-gray-600">Convert between S/m, S/cm, mS/m and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/electrostatic-capacitance">
              <ShieldAlert className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electrostatic Capacitance</h3>
              <p className="text-gray-600">Convert between farad, microfarad, nanofarad, picofarad and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/inductance">
              <RotateCcw className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inductance</h3>
              <p className="text-gray-600">Convert between henry, millihenry, microhenry, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/magnetomotive-force">
              <Activity className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Magnetomotive Force</h3>
              <p className="text-gray-600">Convert between ampere-turn and gilbert</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/magnetic-field-strength">
              <Sun className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Magnetic Field Strength</h3>
              <p className="text-gray-600">Convert between A/m and oersted (Oe)</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/magnetic-flux">
              <Waves className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Magnetic Flux</h3>
              <p className="text-gray-600">Convert between weber and maxwell</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/magnetic-flux-density">
              <Gauge className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Magnetic Flux Density</h3>
              <p className="text-gray-600">Convert between tesla and gauss</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/prefixes">
              <Hash className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SI Prefixes</h3>
              <p className="text-gray-600">Convert values between SI prefixes (k, M, m, µ, etc.).</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/data-transfer">
              <HardDrive className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Transfer</h3>
              <p className="text-gray-600">Convert between bits, bytes, kibibytes, megabits, and more.</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/typography">
              <Type className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Typography</h3>
              <p className="text-gray-600">Convert font sizes between px, em, rem, pt and percent.</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/volume-lumber">
              <Box className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lumber Volume</h3>
              <p className="text-gray-600">Convert board foot, cubic inch, cubic foot and cubic meter.</p>
            </Link>
          </div>

          {/* Physics & Mechanics Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/energy">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Converter</h3>
              <p className="text-gray-600">Convert between joule, kilocalorie, watt-hour, erg, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/power">
              <Zap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Power Converter</h3>
              <p className="text-gray-600">Convert between watt, kilowatt, megawatt, horsepower, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/speed">
              <Gauge className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Speed Converter</h3>
              <p className="text-gray-600">Convert between m/s, km/h, mph, knots, and ft/s</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/velocity-angular">
              <RotateCcw className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Angular Velocity</h3>
              <p className="text-gray-600">Convert between rad/s, deg/s, rpm, and rps</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/acceleration">
              <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Acceleration</h3>
              <p className="text-gray-600">Convert between m/s², g-force, ft/s², and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/acceleration-angular">
              <RotateCcw className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Angular Acceleration</h3>
              <p className="text-gray-600">Convert between rad/s², deg/s², rpm², and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/density">
              <Scale className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Density Converter</h3>
              <p className="text-gray-600">Convert between kg/m³, g/cm³, lb/ft³, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/specific-volume">
              <Box className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Specific Volume</h3>
              <p className="text-gray-600">Convert between m³/kg, cm³/g, and ft³/lb</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/moment-of-force">
              <RotateCw className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Moment of Force (Torque)</h3>
              <p className="text-gray-600">Convert between N⋅m, kN⋅m, lb⋅ft, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/fuel-efficiency-mass">
              <Fuel className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fuel Efficiency (Mass)</h3>
              <p className="text-gray-600">Convert between km/kg, mi/lb, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/fuel-efficiency-volume">
              <Fuel className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fuel Efficiency (Volume)</h3>
              <p className="text-gray-600">Convert between km/L, L/100km, mi/gal, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/temperature-interval">
              <Thermometer className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Temperature Interval</h3>
              <p className="text-gray-600">Convert temperature intervals between K, °C, °F, and °R</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/volume-dry">
              <Box className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volume (Dry)</h3>
              <p className="text-gray-600">Convert between liters, bushels, pecks, and dry gallons</p>
            </Link>
          </div>

          {/* Thermal Properties Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/thermal-expansion">
              <Thermometer className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thermal Expansion</h3>
              <p className="text-gray-600">Convert thermal expansion coefficients between K⁻¹, °C⁻¹, and °F⁻¹</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/thermal-resistance">
              <Thermometer className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thermal Resistance</h3>
              <p className="text-gray-600">Convert thermal resistance between K/W, °C/W, °F/W, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/thermal-conductivity">
              <Thermometer className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thermal Conductivity</h3>
              <p className="text-gray-600">Convert between W/(m·K), W/(cm·°C), cal/(s·cm·°C), and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/specific-heat-capacity">
              <Flame className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Specific Heat Capacity</h3>
              <p className="text-gray-600">Convert between J/(kg·K), cal/(g·°C), BTU/(lb·°F), and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/heat-density">
              <Flame className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Heat Density</h3>
              <p className="text-gray-600">Convert heat density between J/m³, MJ/m³, cal/cm³, and BTU/ft³</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/heat-flux-density">
              <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Heat Flux Density</h3>
              <p className="text-gray-600">Convert heat flux density between W/m², kW/m², cal/(s·cm²), and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/heat-transfer-coefficient">
              <Flame className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Heat Transfer Coefficient</h3>
              <p className="text-gray-600">Convert between W/(m²·K), W/(cm²·°C), kcal/(h·m²·°C), and more</p>
            </Link>
          </div>

          {/* Flow & Concentration Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/flow">
              <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flow Converter</h3>
              <p className="text-gray-600">Convert volumetric flow rates between m³/s, L/s, L/min, ft³/s, gal/min, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/flow-mass">
              <Scale className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flow (Mass) Converter</h3>
              <p className="text-gray-600">Convert mass flow rates between kg/s, kg/h, kg/min, g/s, lb/s, lb/h, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/flow-molar">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flow (Molar) Converter</h3>
              <p className="text-gray-600">Convert molar flow rates between mol/s, mol/min, mol/h, kmol/s, and kmol/h</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/mass-flux-density">
              <Droplets className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mass Flux Density</h3>
              <p className="text-gray-600">Convert mass flux density between kg/(m²·s), g/(cm²·s), lb/(ft²·s), and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/concentration-molar">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Concentration (Molar)</h3>
              <p className="text-gray-600">Convert molar concentration between mol/m³, mol/L, mmol/L, kmol/m³, and more</p>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Link href="/concentration-solution">
              <Beaker className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Concentration (Solution)</h3>
              <p className="text-gray-600">Convert solution concentration between g/L, mg/L, %w/w, %v/v, ppm, and more</p>
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
