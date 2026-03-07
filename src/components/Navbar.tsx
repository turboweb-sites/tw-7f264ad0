import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/uploads/1ef5a434-13c5-4140-9626-2b518b8a8a27/f100695f-image-1.jpg"
            alt="Premier Auto Spa Logo"
            className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">
            О нас
          </a>
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">
            Возможности
          </a>
          <a href="#timeline" className="text-slate-300 hover:text-white transition-colors">
            Опыт
          </a>
          <a href="#contact" className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all">
            Контакт
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/[0.06]">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors py-2">
              О нас
            </a>
            <a href="#features" className="block text-slate-300 hover:text-white transition-colors py-2">
              Возможности
            </a>
            <a href="#timeline" className="block text-slate-300 hover:text-white transition-colors py-2">
              Опыт
            </a>
            <a href="#contact" className="block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-center">
              Контакт
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
