const milestones = [
  {
    year: '1972',
    title: 'Первая программа',
    description: 'Брайан Керниган написал «Hello, World!» в книге о языке B',
    emoji: '📖',
  },
  {
    year: '1978',
    title: 'Язык C',
    description: '«Hello, World!» стала каноническим примером в книге «The C Programming Language»',
    emoji: '💻',
  },
  {
    year: '1995',
    title: 'JavaScript',
    description: 'Веб стал интерактивным — «Hello, World!» теперь можно показать в браузере',
    emoji: '🌐',
  },
  {
    year: '2013',
    title: 'React',
    description: 'Компонентный подход изменил веб-разработку навсегда',
    emoji: '⚛️',
  },
  {
    year: '2024',
    title: 'Сегодня',
    description: 'Вы смотрите на этот сайт — «Привет, Мир!» эволюционировал',
    emoji: '🚀',
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            История
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Путешествие через{' '}
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">
              время
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all duration-300">
                    <div className="text-3xl mb-3">{milestone.emoji}</div>
                    <div className="text-sm font-mono text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-slate-950 z-10 mt-8" />

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
