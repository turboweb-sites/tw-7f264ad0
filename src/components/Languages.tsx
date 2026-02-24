import { useState } from 'react';

const helloWorldExamples = [
  { lang: 'Python', code: 'print("Привет, Мир!")', color: 'bg-yellow-500' },
  { lang: 'JavaScript', code: 'console.log("Привет, Мир!");', color: 'bg-yellow-400' },
  { lang: 'TypeScript', code: 'console.log("Привет, Мир!" as string);', color: 'bg-blue-500' },
  { lang: 'Rust', code: 'fn main() { println!("Привет, Мир!"); }', color: 'bg-orange-600' },
  { lang: 'Go', code: 'fmt.Println("Привет, Мир!")', color: 'bg-cyan-500' },
  { lang: 'Java', code: 'System.out.println("Привет, Мир!");', color: 'bg-red-500' },
  { lang: 'C++', code: 'std::cout << "Привет, Мир!" << std::endl;', color: 'bg-blue-700' },
  { lang: 'Swift', code: 'print("Привет, Мир!")', color: 'bg-orange-500' },
  { lang: 'Kotlin', code: 'println("Привет, Мир!")', color: 'bg-purple-500' },
  { lang: 'Ruby', code: 'puts "Привет, Мир!"', color: 'bg-red-600' },
  { lang: 'PHP', code: 'echo "Привет, Мир!";', color: 'bg-indigo-500' },
  { lang: 'C#', code: 'Console.WriteLine("Привет, Мир!");', color: 'bg-green-600' },
];

export default function Languages() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-slate-950/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Языки программирования
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Одна фраза,{' '}
            <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500">
              12 языков
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            «Привет, Мир!» на каждом языке звучит по-своему, но смысл остаётся неизменным
          </p>
        </div>

        {/* Language tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {helloWorldExamples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-white/10 text-white border border-white/20 scale-105'
                  : 'bg-white/[0.03] text-slate-400 border border-transparent hover:bg-white/[0.06] hover:text-slate-300'
              }`}
            >
              <span className={`inline-block w-2 h-2 rounded-full ${ex.color} mr-2`} />
              {ex.lang}
            </button>
          ))}
        </div>

        {/* Code display */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-slate-500">
              hello.{helloWorldExamples[activeIndex].lang.toLowerCase()}
            </span>
          </div>
          <div className="p-6 md:p-8">
            <code className="text-lg md:text-2xl font-mono text-green-400 break-all">
              {helloWorldExamples[activeIndex].code}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}