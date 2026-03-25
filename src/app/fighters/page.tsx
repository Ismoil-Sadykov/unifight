
export default function Fighters() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="bg-[#1a1c1a] min-h-screen p-6 md:p-12 font-sans">
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1">
            Roster
          </p>
          <div className="flex flex-col">
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase leading-tight tracking-tighter">
              ТОП БОЙЦЫ
            </h1>
            <div className="h-1 w-24 bg-red-700 mt-2"></div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200 mb-20">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">
            <img
              src="/fighter0.jpeg"
              alt="Parviz Ilhomzoda"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              МАСТЕР СПОРТА
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>

              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Парвиз
              </h2>

              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                Илхомзода
              </h3>

              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2003}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200 mb-20">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">
            <img
              src="/fighter1.jpg"
              alt="Bezhan Nurmatov"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              КАНДИДАТ МАСТЕР СПОРТА
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>

              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Бежан
              </h2>

              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                Нурматов
              </h3>

              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2009}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200 mb-20">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">
            <img
              src="/fighter2.jpg"
              alt="Ismoil Sadykov"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              КАНДИДАТ МАСТЕР СПОРТА
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>

              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Исмоил
              </h2>

              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                Садыков
              </h3>

              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2008}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200 mb-20">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">

            <img
              src="/fighter3.jpg"
              alt="Umar Nazarov"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              КАНДИДАТ МАСТЕР СПОРТА
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>


              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Умар
              </h2>


              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                Назаров
              </h3>


              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2009}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200 mb-20">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">
            <img
              src="/fighter4.jpg"
              alt="Tolib Rajabov"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              КАНДИДАТ МАСТЕР СПОРТА
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>


              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Толибчон
              </h2>


              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                Рачабов
              </h3>


              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2009}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto relative group border-l-[6px] border-pink-200">
          <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800">
            <img
              src="/fighter5.jpg"
              alt="Abdullo"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />

            <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
              МАСТЕР СПОРТ
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Heavyweight Division
              </p>


              <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white [text-shadow:4px_4px_0px_rgba(220,38,38,1)] mb-1">
                Абдулло
              </h2>

              <h3 className="text-4xl font-black italic uppercase leading-none text-red-600 [text-shadow:3px_3px_0px_rgba(255,255,255,1)]">
                -
              </h3>


              <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                <div className="text-white font-bold text-sm">
                  <span className="text-red-600 border-b border-red-600 mr-2">
                    Age:
                  </span>
                  {currentYear - 2007}
                </div>
                <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  Elite Rank
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center gap-8 pb-23 pt-5">
        <div className="font-serif text-2xl font-black italic tracking-widest text-red-600/80">
          UNIFIGHT
        </div>

        <nav className="flex gap-8">
          {['CONTACTS', 'MOTTO', 'PRIVACY'].map((link) => (
            <a
              key={link}
              href="https://t.me/ilhomzodaparviz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="text-center text-[10px] text-gray-600">
          © 2026 UNIFIGHT
        </div>
      </div>
    </div>
  )
}
