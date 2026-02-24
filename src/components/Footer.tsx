
import { Heart, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Привет, Мир!</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-sm">
            Сделано с{' '}
            <Heart className="w-4 h-4 text-pink-500 mx-1 animate-pulse" />{' '}
            и React + TypeScript
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}
