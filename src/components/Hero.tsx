import { useState, useEffect } from 'react';
import { Globe, Sparkles, Heart, Rocket, Star } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Привет, Мир!';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />

      {/* Phoenix background image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/7f264ad0-ec68-4512-9607-c4c0b023adf9/acc3db5b-6de7-416d-9c2f-42f54858dc33/image_0e76df_1771892977976_8tfgxz.webp"
          alt="Phoenix"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      </div>

      {/* Simplified glow orbs — fewer on mobile, no animation on mobile */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/15 rounded-full blur-3xl md:animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-52 md:w-80 h-52 md:h-80 bg-purple-500/15 rounded-full blur-3xl md:animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.8s' }} />

      {/* Floating icons — hidden on small mobile */}
      <div className="hidden sm:block absolute top-20 left-10 md:left-20 animate-float">
        <Globe className="w-8 h-8 md:w-12 md:h-12 text-blue-400/40" />
      </div>
      <div className="hidden sm:block absolute top-32 right-10 md:right-32 animate-float-delayed">
        <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-yellow-400/40" />
      </div>
      <div className="hidden sm:block absolute bottom-32 left-10 md:left-32 animate-float-slow">
        <Heart className="w-7 h-7 md:w-10 md:h-10 text-pink-400/40" />
      </div>
      <div className="hidden sm:block absolute bottom-20 right-10 md:right-20 animate-float">
        <Rocket className="w-8 h-8 md:w-12 md:h-12 text-purple-400/40" />
      </div>
      <div className="hidden md:block absolute top-1/2 left-5 md:left-10 animate-float-delayed">
        <Star className="w-6 h-6 md:w-8 md:h-8 text-cyan-400/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Emoji globe */}
        <div className="animate-slide-up mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/20 backdrop-blur-sm animate-bounce-gentle">
            <span className="text-5xl md:text-7xl">🔥</span>
          </div>
        </div>

        {/* Typed heading */}
        <h1 className="animate-slide-up-delayed text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
          <span className="text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
            {typedText}
          </span>
          <span className="inline-block w-1 h-12 md:h-20 bg-orange-400 ml-1 animate-pulse align-middle" />
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up-delayed-2 text-lg sm:text-xl md:text-2xl text-slate-300/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Добро пожаловать в удивительный мир веб-технологий. Этот сайт создан, чтобы показать красоту кода и дизайна.
        </p>

        {/* CTA buttons */}
        <div className="animate-slide-up-delayed-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Узнать больше
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-slate-300 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Возможности
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-20 animate-bounce-gentle">
          <div className="inline-flex flex-col items-center gap-2 text-slate-400/60">
            <span className="text-sm">Прокрутите вниз</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}