import React from 'react';
import { Coins, PenTool as Tool, AlertCircle, ArrowRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <Coins className="w-12 h-12 mr-4 text-yellow-400" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            FastPeerCoin Explorer
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="flex items-center mb-6">
            <Tool className="w-8 h-8 text-yellow-400 animate-spin-slow mr-4" />
            <h2 className="text-2xl md:text-3xl font-semibold">Under Maintenance</h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I'm currently upgrading the FastPeerCoin blockchain explorer to provide you with an even better experience. The explorer is getting some improvements to make your blockchain exploration more intuitive and powerful.
          </p>

          <div className="flex items-start space-x-4 mb-8">
            <AlertCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">What's Coming Next</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Enhanced UTXO tracking and visualization
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Improved transaction history analysis
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Better Rich List tracking
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p className="mb-4">Thanks for your patience. Back online soon!</p>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/fastpeercoin" 
               className="flex items-center hover:text-yellow-400 transition-colors duration-300">
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