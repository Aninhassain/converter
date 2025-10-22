import { Calculator } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Calculator className="h-8 w-8" />
            <h1 className="text-3xl font-bold">
              <span className="font-bold">AAA </span>
              <span className="font-normal"> CONVERTER</span>
            </h1>
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              href="/converters" 
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Unit Converters
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
