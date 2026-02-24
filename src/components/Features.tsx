import { Globe2, Smartphone, Gauge, Layers, Paintbrush, Lock } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Глобальный охват',
    description: 'Ваш сайт доступен из любой точки мира. Миллиарды людей могут увидеть ваше «Привет, Мир!»',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Адаптивный дизайн',
    description: 'Идеально выглядит на любом устройстве — от смартфона до большого экрана',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gauge,
    title: 'Молниеносная скорость',
    description: 'Оптимизированный код и современные технологии обеспечивают мгновенную загрузку',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Layers,
    title: 'Современный стек',
    description: 'React, TypeScript, Tailwind CSS — лучшие инструменты для создания великолепного интерфейса',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Paintbrush,
    title: 'Красивые анимации',
    description: 'Плавные переходы и эффекты, которые оживляют каждый элемент на странице',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Lock,
    title: 'Чистый код',
    description: 'Хорошо структурированный и поддерживаемый код — основа любого качественного проекта',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-slate-950/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Возможности
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Технологии{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500">
              будущего
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Даже простой «Привет, Мир!» может быть создан с использованием лучших практик и технологий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}