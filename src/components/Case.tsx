"use client";

import { useState } from "react";
import { Zap } from "lucide-react";

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(/(\s+)/)
    .map((word) => {
      // keep whitespace tokens
      if (/^\s+$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

const toSentenceCase = (str: string) => {
  if (!str) return "";
  const s = str.trim().toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const toCamelCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9\s-_]+/g, " ")
    .trim()
    .split(/[\s-_]+/)
    .map((word, idx) => {
      const lower = word.toLowerCase();
      return idx === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
};

const toPascalCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9\s-_]+/g, " ")
    .trim()
    .split(/[\s-_]+/)
    .map((word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
};

const toSnakeCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9\s]+/g, " ")
    .trim()
    .split(/[\s-_]+/)
    .map((w) => w.toLowerCase())
    .join("_");
};

const toKebabCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9\s]+/g, " ")
    .trim()
    .split(/[\s_]+/)
    .map((w) => w.toLowerCase())
    .join("-");
};

const Case = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [mode, setMode] = useState<string>("uppercase");

  const convert = (value: string, mode: string) => {
    switch (mode) {
      case "uppercase":
        return value.toUpperCase();
      case "lowercase":
        return value.toLowerCase();
      case "title":
        return toTitleCase(value);
      case "sentence":
        return toSentenceCase(value);
      case "camel":
        return toCamelCase(value);
      case "pascal":
        return toPascalCase(value);
      case "snake":
        return toSnakeCase(value);
      case "kebab":
        return toKebabCase(value);
      default:
        return value;
    }
  };

  const handleInput = (v: string) => {
    setInput(v);
    setOutput(convert(v, mode));
  };

  const handleMode = (m: string) => {
    setMode(m);
    setOutput(convert(input, m));
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      // optionally give feedback — kept minimal
    } catch (e) {
      console.warn("copy failed", e);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
              <h1 className="text-4xl font-bold text-gray-900">Case Converter</h1>
            </div>
            <p className="text-lg text-gray-600">Convert text between different casing styles.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Input</label>
                <textarea
                  value={input}
                  onChange={(e) => handleInput(e.target.value)}
                  placeholder="Type or paste text here"
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <select
                    value={mode}
                    onChange={(e) => handleMode(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg bg-white"
                  >
                    <option value="uppercase">UPPERCASE</option>
                    <option value="lowercase">lowercase</option>
                    <option value="title">Title Case</option>
                    <option value="sentence">Sentence case</option>
                    <option value="camel">camelCase</option>
                    <option value="pascal">PascalCase</option>
                    <option value="snake">snake_case</option>
                    <option value="kebab">kebab-case</option>
                  </select>

                  <div className="flex gap-3">
                    <button onClick={handleCopy} className="flex-1 bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700">
                      Copy
                    </button>
                    <button onClick={handleClear} className="flex-1 border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50">
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Output</label>
                <textarea
                  value={output}
                  readOnly
                  placeholder="Converted text will appear here"
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg text-gray-700"
                />

                {input && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      {`Input length: ${input.length} — Output length: ${output.length}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
