'use client';

import { useState, useEffect } from 'react';
import { Landmark, RotateCcw } from 'lucide-react';

const Currency = () => {
  const defaultFromValue = '1';
  const defaultToValue = '';
  const defaultFromCurrency = 'USD';
  const defaultToCurrency = 'INR';

  const [fromValue, setFromValue] = useState<string>(defaultFromValue);
  const [toValue, setToValue] = useState<string>(defaultToValue);
  const [fromCurrency, setFromCurrency] = useState<string>(defaultFromCurrency);
  const [toCurrency, setToCurrency] = useState<string>(defaultToCurrency);
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // Comprehensive currency list with over 160 currencies
  const currencyList = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'BTC', name: 'Bitcoin' },
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'AFN', name: 'Afghan Afghani' },
    { code: 'ALL', name: 'Albanian Lek' },
    { code: 'AMD', name: 'Armenian Dram' },
    { code: 'ANG', name: 'Netherlands Antillian Guilder' },
    { code: 'AOA', name: 'Angolan Kwanza' },
    { code: 'ARS', name: 'Argentine Peso' },
    { code: 'AWG', name: 'Aruban Florin' },
    { code: 'AZN', name: 'Azerbaijani Manat' },
    { code: 'BAM', name: 'Bosnia and Herzegovina Mark' },
    { code: 'BBD', name: 'Barbados Dollar' },
    { code: 'BDT', name: 'Bangladeshi Taka' },
    { code: 'BGN', name: 'Bulgarian Lev' },
    { code: 'BHD', name: 'Bahraini Dinar' },
    { code: 'BIF', name: 'Burundian Franc' },
    { code: 'BMD', name: 'Bermudian Dollar' },
    { code: 'BND', name: 'Brunei Dollar' },
    { code: 'BOB', name: 'Bolivian Boliviano' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'BSD', name: 'Bahamian Dollar' },
    { code: 'BTN', name: 'Bhutanese Ngultrum' },
    { code: 'BWP', name: 'Botswana Pula' },
    { code: 'BYN', name: 'Belarusian Ruble' },
    { code: 'BZD', name: 'Belize Dollar' },
    { code: 'CDF', name: 'Congolese Franc' },
    { code: 'CLP', name: 'Chilean Peso' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'CRC', name: 'Costa Rican Colon' },
    { code: 'CUP', name: 'Cuban Peso' },
    { code: 'CVE', name: 'Cape Verdean Escudo' },
    { code: 'CZK', name: 'Czech Koruna' },
    { code: 'DJF', name: 'Djiboutian Franc' },
    { code: 'DKK', name: 'Danish Krone' },
    { code: 'DOP', name: 'Dominican Peso' },
    { code: 'DZD', name: 'Algerian Dinar' },
    { code: 'EGP', name: 'Egyptian Pound' },
    { code: 'ERN', name: 'Eritrean Nakfa' },
    { code: 'ETB', name: 'Ethiopian Birr' },
    { code: 'FJD', name: 'Fiji Dollar' },
    { code: 'FKP', name: 'Falkland Islands Pound' },
    { code: 'FOK', name: 'Faroese Króna' },
    { code: 'GEL', name: 'Georgian Lari' },
    { code: 'GGP', name: 'Guernsey Pound' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'GIP', name: 'Gibraltar Pound' },
    { code: 'GMD', name: 'Gambian Dalasi' },
    { code: 'GNF', name: 'Guinean Franc' },
    { code: 'GTQ', name: 'Guatemalan Quetzal' },
    { code: 'GYD', name: 'Guyanese Dollar' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'HNL', name: 'Honduran Lempira' },
    { code: 'HRK', name: 'Croatian Kuna' },
    { code: 'HTG', name: 'Haitian Gourde' },
    { code: 'HUF', name: 'Hungarian Forint' },
    { code: 'IDR', name: 'Indonesian Rupiah' },
    { code: 'ILS', name: 'Israeli New Shekel' },
    { code: 'IMP', name: 'Manx Pound' },
    { code: 'IQD', name: 'Iraqi Dinar' },
    { code: 'IRR', name: 'Iranian Rial' },
    { code: 'ISK', name: 'Icelandic Króna' },
    { code: 'JEP', name: 'Jersey Pound' },
    { code: 'JMD', name: 'Jamaican Dollar' },
    { code: 'JOD', name: 'Jordanian Dinar' },
    { code: 'KES', name: 'Kenyan Shilling' },
    { code: 'KGS', name: 'Kyrgyzstani Som' },
    { code: 'KHR', name: 'Cambodian Riel' },
    { code: 'KID', name: 'Kiribati Dollar' },
    { code: 'KMF', name: 'Comorian Franc' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'KWD', name: 'Kuwaiti Dinar' },
    { code: 'KYD', name: 'Cayman Islands Dollar' },
    { code: 'KZT', name: 'Kazakhstani Tenge' },
    { code: 'LAK', name: 'Lao Kip' },
    { code: 'LBP', name: 'Lebanese Pound' },
    { code: 'LKR', name: 'Sri Lanka Rupee' },
    { code: 'LRD', name: 'Liberian Dollar' },
    { code: 'LSL', name: 'Lesotho Loti' },
    { code: 'LYD', name: 'Libyan Dinar' },
    { code: 'MAD', name: 'Moroccan Dirham' },
    { code: 'MDL', name: 'Moldovan Leu' },
    { code: 'MGA', name: 'Malagasy Ariary' },
    { code: 'MKD', name: 'Macedonian Denar' },
    { code: 'MMK', name: 'Burmese Kyat' },
    { code: 'MNT', name: 'Mongolian Tögrög' },
    { code: 'MOP', name: 'Macanese Pataca' },
    { code: 'MRU', name: 'Mauritanian Ouguiya' },
    { code: 'MUR', name: 'Mauritian Rupee' },
    { code: 'MVR', name: 'Maldivian Rufiyaa' },
    { code: 'MWK', name: 'Malawian Kwacha' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'MZN', name: 'Mozambican Metical' },
    { code: 'NAD', name: 'Namibian Dollar' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'NIO', name: 'Nicaraguan Córdoba' },
    { code: 'NOK', name: 'Norwegian Krone' },
    { code: 'NPR', name: 'Nepalese Rupee' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'OMR', name: 'Omani Rial' },
    { code: 'PAB', name: 'Panamanian Balboa' },
    { code: 'PEN', name: 'Peruvian Sol' },
    { code: 'PGK', name: 'Papua New Guinean Kina' },
    { code: 'PHP', name: 'Philippine Peso' },
    { code: 'PKR', name: 'Pakistani Rupee' },
    { code: 'PLN', name: 'Polish Złoty' },
    { code: 'PYG', name: 'Paraguayan Guaraní' },
    { code: 'QAR', name: 'Qatari Riyal' },
    { code: 'RON', name: 'Romanian Leu' },
    { code: 'RSD', name: 'Serbian Dinar' },
    { code: 'RUB', name: 'Russian Ruble' },
    { code: 'RWF', name: 'Rwandan Franc' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'SBD', name: 'Solomon Islands Dollar' },
    { code: 'SCR', name: 'Seychellois Rupee' },
    { code: 'SDG', name: 'Sudanese Pound' },
    { code: 'SEK', name: 'Swedish Krona' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'SHP', name: 'Saint Helena Pound' },
    { code: 'SLE', name: 'Sierra Leonean Leone' },
    { code: 'SOS', name: 'Somali Shilling' },
    { code: 'SRD', name: 'Surinamese Dollar' },
    { code: 'SSP', name: 'South Sudanese Pound' },
    { code: 'STN', name: 'São Tomé and Príncipe Dobra' },
    { code: 'SYP', name: 'Syrian Pound' },
    { code: 'SZL', name: 'Eswatini Lilangeni' },
    { code: 'THB', name: 'Thai Baht' },
    { code: 'TJS', name: 'Tajikistani Somoni' },
    { code: 'TMT', name: 'Turkmenistan Manat' },
    { code: 'TND', name: 'Tunisian Dinar' },
    { code: 'TOP', name: 'Tongan Paʻanga' },
    { code: 'TRY', name: 'Turkish Lira' },
    { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
    { code: 'TVD', name: 'Tuvaluan Dollar' },
    { code: 'TWD', name: 'New Taiwan Dollar' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'UAH', name: 'Ukrainian Hryvnia' },
    { code: 'UGX', name: 'Ugandan Shilling' },
    { code: 'UYU', name: 'Uruguayan Peso' },
    { code: 'UZS', name: 'Uzbekistani Soʻm' },
    { code: 'VES', name: 'Venezuelan Bolívar Soberano' },
    { code: 'VND', name: 'Vietnamese Đồng' },
    { code: 'VUV', name: 'Vanuatu Vatu' },
    { code: 'WST', name: 'Samoan Tālā' },
    { code: 'XAF', name: 'Central African CFA Franc' },
    { code: 'XAG', name: 'Silver (troy ounce)' },
    { code: 'XAU', name: 'Gold (troy ounce)' },
    { code: 'XCD', name: 'East Caribbean Dollar' },
    { code: 'XDR', name: 'Special Drawing Rights' },
    { code: 'XOF', name: 'West African CFA franc' },
    { code: 'XPF', name: 'CFP Franc' },
    { code: 'YER', name: 'Yemeni Rial' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'ZMW', name: 'Zambian Kwacha' },
    { code: 'ZWL', name: 'Zimbabwean Dollar' },
  ];
  
  // Sort the list alphabetically by code, but keep USD and INR at the top for convenience
  const sortedCurrencyList = currencyList.sort((a, b) => {
    if (a.code === 'USD') return -1;
    if (b.code === 'USD') return 1;
    if (a.code === 'INR') return -1;
    if (b.code === 'INR') return 1;
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        // NEW API: Using open.er-api.com (no API key required)
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        
        if (data.result === 'success') {
          setRates(data.rates);
          setLastUpdate(new Date(data.time_last_update_unix * 1000).toLocaleString());
        } else {
          console.error("Failed to fetch exchange rates");
        }
        
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (loading || !rates[toCurrency]) return;

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const rate = rates[toCurrency];
      const convertedValue = numValue * rate;
      
      // Dynamic precision for formatting
      if (convertedValue < 0.0001 && convertedValue > 0) {
        setToValue(convertedValue.toExponential(4));
      } else if (convertedValue > 1000) {
        setToValue(convertedValue.toFixed(2));
      } else {
        setToValue(convertedValue.toFixed(4));
      }
    } else {
      setToValue('');
    }
  }, [fromValue, toCurrency, rates, loading]);

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
  };
  
  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
  };

  const handleToCurrencyChange = (currency: string) => {
    setToCurrency(currency);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleReset = () => {
    setFromValue(defaultFromValue);
    setToValue(defaultToValue);
    setFromCurrency(defaultFromCurrency);
    setToCurrency(defaultToCurrency);
  };

  const getCurrencyName = (code: string) => {
    return currencyList.find(c => c.code === code)?.name || code;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Landmark className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Currency Converter</h1>
            </div>
            <p className="text-lg text-gray-600">
              Convert between different currencies with real-time exchange rates
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] items-center gap-4 lg:gap-8">
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
                    placeholder="Enter value"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => handleFromCurrencyChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {sortedCurrencyList.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} [{currency.name}]
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={swapCurrencies}
                  className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  title="Swap currencies"
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
                    value={loading ? 'Loading...' : toValue}
                    readOnly
                    placeholder="Result will appear here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg text-gray-700"
                  />
                  <select
                    value={toCurrency}
                    onChange={(e) => handleToCurrencyChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-white"
                  >
                    {sortedCurrencyList.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} [{currency.name}]
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <button onClick={handleReset} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </button>
            </div>

            {/* Conversion Info */}
            {fromValue && toValue && !loading && (
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{fromValue}</span> {getCurrencyName(fromCurrency)} =
                  <span className="font-semibold text-purple-600"> {toValue}</span> {getCurrencyName(toCurrency)}
                </p>
                <p className="text-center text-xs text-gray-500 mt-1">
                  Last updated: {lastUpdate}
                </p>
              </div>
            )}
          </div>
          
          {/* API Attribution - Required by the free API's terms of service */}
          <div className="text-center mt-4">
            <a 
              href="https://www.exchangerate-api.com" 
              // target="_blank" 
              // rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Rates By ExchangeRate-API
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Currency;
