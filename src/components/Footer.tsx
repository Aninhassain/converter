"use client";

import Link from "next/link";
import { Calculator, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-6 w-6 md:h-8 md:w-8" />
              <h3 className="text-xl md:text-2xl font-bold">
                <span className="font-bold">AAA </span>
                <span className="font-normal hidden sm:inline">CONVERTER</span>
              </h3>
            </div>
            <p className="text-blue-100 text-sm md:text-base">
              Your comprehensive platform for all types of unit conversions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/length"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Length Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/temperature"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Temperature Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/weight"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Weight Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/currency"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Currency
                </Link>
              </li>
              <li>
                <Link
                  href="/energy"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Energy
                </Link>
              </li>
              <li>
                <Link
                  href="/power"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Power
                </Link>
              </li>
              <li>
                <Link
                  href="/pressure"
                  className="text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  Pressure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@aaaconverter.com"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm md:text-base"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm md:text-base"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm md:text-base"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-100 text-sm md:text-base text-center md:text-left">
              © {currentYear} AAA Converter. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm md:text-base">
              <Link
                href="/privacy"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
