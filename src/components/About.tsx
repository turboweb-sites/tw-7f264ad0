import { Code2, Palette, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Строк кода', value: '∞', color: 'from-blue-500 to-cyan-500' },
  { icon: Palette, label: 'Красивых пикселей', value: '1M+', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, label: 'Скорость загрузки', value: '<1с', color: 'from-yellow-500 to-orange-500' },
  { icon: Shield, label: 'Надёжность', value: '100%', color: 'from-green-500 to-emerald-500' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            О проекте
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Простое может быть{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500">
              великим
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            «Привет, Мир!» — это первая программа, которую пишет каждый разработчик. Это не просто слова — это начало пути в мир бесконечных возможностей.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Каждое великое путешествие начинается с первого шага
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                В 1972 году Брайан Керниган написал первую программу «Hello, World!» в книге о языке программирования B. С тех пор эти два слова стали символом начала для миллионов разработчиков по всему миру.
              </p>
              <p>
                Этот сайт — дань уважения этой традиции. Каждый пиксель, каждая анимация и каждая строка кода здесь напоминают о том, с чего всё начинается.
              </p>
              <p>
                Неважно, новичок вы или опытный профессионал — «Привет, Мир!» всегда звучит одинаково вдохновляюще.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500">hello.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-loose">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">message</span>{' '}
                  <span className="text-slate-500">=</span>{' '}
                  <span className="text-green-400">"Привет, Мир!"</span>;
                </div>
                <div className="mt-1">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">world</span>{' '}
                  <span className="text-slate-500">=</span>{' '}
                  <span className="text-yellow-300">{'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-blue-300">beauty</span>:{' '}
                  <span className="text-orange-300">true</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-300">possibilities</span>:{' '}
                  <span className="text-green-400">"∞"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-300">dreams</span>:{' '}
                  <span className="text-green-400">"unlimited"</span>
                </div>
                <div>
                  <span className="text-yellow-300">{'}'}</span>;
                </div>
                <div className="mt-3">
                  <span className="text-blue-300">console</span>.
                  <span className="text-yellow-300">log</span>(
                  <span className="text-blue-300">message</span>);
                </div>
                <div className="mt-1 text-slate-600">
                  {'// => '}
                  <span className="text-green-400">Привет, Мир! 🌍</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
