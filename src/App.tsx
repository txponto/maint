import React from 'react';
import { ShieldAlert, Target, AlertCircle, ArrowRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <Target className="w-12 h-12 mr-4 text-red-500" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            CS2-ESP
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="flex items-center mb-6">
            <ShieldAlert className="w-8 h-8 text-red-500 animate-pulse mr-4" />
            <h2 className="text-2xl md:text-3xl font-semibold">Coming Soon</h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            CS2-ESP is currently under development. We’re building a powerful, performance-focused
            ESP solution designed specifically for Counter-Strike 2.
          </p>

          <div className="flex items-start space-x-4 mb-8">
            <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Planned Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                  Player ESP (boxes, bones, health, names)
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                  Item & weapon highlighting
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                  Optimized for low latency & high FPS
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                  Clean UI & modular feature toggles
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p className="mb-4">Stay sharp. Launching soon.</p>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/your-org-or-repo"
              className="flex items-center hover:text-red-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
