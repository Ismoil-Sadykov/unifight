
export default function President() {
  return (
    <div className="pb-[90px]">
      <div className="flex items-center justify-center p-6 mb-5 font-sans">
        <div className="relative group w-full max-w-[400px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800 to-black shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
            <div className="relative h-[550px] w-full transform transition-transform duration-700 group-hover:scale-105">
              <img
                src="/photo3.jpg"
                alt="Сергей Ханов"
                className="h-full w-full object-cover grayscale contrast-125 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0202] via-transparent to-black/20" />
            </div>

            <div className="absolute bottom-0 w-full p-8 backdrop-blur-md bg-black/40 border-t border-white/5">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                Президент UNIFIGHT
              </p>

              <h2 className="relative font-serif text-4xl font-black uppercase italic leading-none tracking-tighter text-white">
                <span className="relative z-10">Бахриддин</span>
                <br />
                <span className="relative z-10">Сироджов</span>
                <span className="absolute left-[2px] top-[2px] -z-10 opacity-70 text-red-700 blur-[1px]">
                  Бахриддин<br />Сироджов
                </span>
              </h2>
            </div>

            <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
          </div>

          <div className="absolute -z-10 inset-0 bg-red-900/10 blur-[120px] rounded-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-6 mb-5 font-sans">
        <div className="w-full max-w-[550px]">

          <div className="relative mb-16">
            <h2 className="font-serif text-2xl font-black uppercase italic leading-tight tracking-tight text-white md:text-4xl">
              ПОБЕДА — ЭТО НЕ СЛУЧАЙНОСТЬ. ЭТО РЕЗУЛЬТАТ БЕСКОМПРОМИССНОЙ ДИСЦИПЛИНЫ И ТАКТИЧЕСКОГО ПРЕВОСХОДСТВА.
            </h2>
            <div className="mt-6 h-[6px] w-24 bg-red-700 shadow-[0_0_20px_rgba(185,28,28,0.6)]" />
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-10 backdrop-blur-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,1)]">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-red-600 shadow-[4px_0_15px_rgba(220,38,38,0.4)]" />

            <h3 className="mb-10 font-serif text-3xl font-black uppercase tracking-tighter text-white">
              ДОСЬЕ<br />РУКОВОДИТЕЛЯ
            </h3>

            <div className="space-y-10">
              <div className="group">
                <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-red-600 group-hover:text-red-400">
                  БОЕВОЙ ОПЫТ
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-200">
                  Ветеран специальных подразделений с более чем 20-летним стажем.
                </p>
              </div>

              <div className="group">
                <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-red-600 group-hover:text-red-400">
                  СТРАТЕГИЯ
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-200">
                  Основатель доктрины UNIFIGHT.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-6 mb-5 font-sans">
        <button className="group relative w-full overflow-hidden rounded-md bg-gradient-to-b from-[#e66465] to-[#911d1d] py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95">
          <span className="relative z-10 text-sm font-black uppercase tracking-[0.2em] text-[#2b0505]">
            СВЯЗАТЬСЯ С КОМАНДИРОМ
          </span>
        </button>

        <div className="flex flex-col items-center gap-8 mt-10">
          <div className="font-serif text-2xl font-black italic tracking-widest text-red-600/80">
            UNIFIGHT
          </div>

          <nav className="flex gap-8">
            {['CONTACTS', 'MOTTO', 'PRIVACY'].map((link) => (
              <a key={link} href="#" className="text-xs text-gray-500 hover:text-white">
                {link}
              </a>
            ))}
          </nav>

          <div className="text-center text-[10px] text-gray-600">
            © 2026 UNIFIGHT
          </div>
        </div>
      </div>
    </div>
  )
}