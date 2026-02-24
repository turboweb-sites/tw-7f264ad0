import { ExternalLink, Github, Heart } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-6xl md:text-8xl mb-8">👋</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Готовы сказать{' '}
          <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500">
            «Привет»
          </span>{' '}
          миру?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Каждый великий проект начинается с маленького шага. Ваш следующий шедевр ждёт, когда вы начнёте.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Начать создавать
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-slate-300 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}