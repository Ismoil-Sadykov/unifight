'use client'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TimerIcon from '@mui/icons-material/Timer';
import ShieldIcon from '@mui/icons-material/Shield';

export default function About() {
  const philosophyItems = [
    {
      icon: <FlashOnIcon className="text-red-500" sx={{ fontSize: 32 }} />,
      title: "POWER / СИЛА",
      desc: "Мы куем не просто мышцы, а взрывную энергию, способную сокрушить любое сопротивление. Сила в Unifight — это инструмент мгновенного действия."
    },
    {
      icon: <TimerIcon className="text-red-500" sx={{ fontSize: 32 }} />,
      title: "ENDURANCE / ВЫНОСЛИВОСТЬ",
      desc: "Когда легкие горят, а тело отказывает, в игру вступает дух. Наша подготовка стирает границы возможного, превращая усталость в топливо."
    },
    {
      icon: <ShieldIcon className="text-red-500" sx={{ fontSize: 32 }} />,
      title: "HONOR / ЧЕСТЬ",
      desc: "Дисциплина вне ринга важнее техники внутри него. Мы уважаем противника и свято следуем кодексу воина. Победа без чести — это поражение."
    }
  ];

  return (
    <div>
      <div className="relative min-h-screen flex items-end p-6 text-white overflow-hidden">

        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/photo2.jpg')"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

        <div className="relative z-10 w-full max-w-xl">

          <div
            className="flex flex-col gap-3 p-6 rounded-2xl"
            style={{
              background: "rgba(20, 20, 20, 0.45)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.7)"
            }}
          >

            <p
              className="text-xs tracking-[0.3em]"
              style={{
                color: "#ff3b3b",
                textShadow: "0 0 6px rgba(255,0,0,0.7)"
              }}
            >
              TACTICAL DOMINANCE SYSTEM
            </p>

            <h1
              className="text-2xl font-extrabold leading-tight"
              style={{
                textShadow: "0 0 20px rgba(255,0,0,0.6)"
              }}
            >
              УНИВЕРСАЛЬНЫЙ <br />
              <span style={{ color: "#ff1a1a" }}>БОЙ</span>
            </h1>

            <p
              className="text-lg font-semibold"
              style={{
                color: "#ff4d4d",
                textShadow: "0 0 8px rgba(255,0,0,0.6)"
              }}
            >
              OPERATIONAL EXCELLENCE
            </p>

          </div>

        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-transparent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative w-full max-w-[400px] border-l-4 border-red-600 bg-white/[0.03] backdrop-blur-xl border-y border-r border-white/10 p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 hover:shadow-red-900/20">

            <h1 className="mb-8 font-serif text-4xl font-black uppercase leading-tight tracking-tight text-white">
              Две фазы.<br />
              Один<br />
              победитель.
            </h1>

            <p className="mb-10 text-sm leading-relaxed text-gray-400">
              Unifight — это не просто спорт. Это комплексная система испытаний, состоящая из двух неразрывных этапов:
              <span className="text-gray-200"> преодоление полосы препятствий и поединок на ринге.</span>
            </p>

            <div className="space-y-8">
              <div className="group/item">
                <div className="flex items-baseline gap-4">
                  <span className="text-2xl font-bold text-red-600">01</span>
                  <h3 className="text-xl font-black uppercase tracking-widest text-white">
                    Полоса препятствий
                  </h3>
                </div>
                <p className="pl-12 text-sm italic text-gray-500 transition-colors group-hover/item:text-red-400/70">
                  Стрельба, метание ножей, сетки и барьеры. Тест на функциональный предел.
                </p>
              </div>

              <div className="group/item">
                <div className="flex items-baseline gap-4">
                  <span className="text-2xl font-bold text-red-600">02</span>
                  <h3 className="text-xl font-black uppercase tracking-widest text-white">
                    Контактный бой
                  </h3>
                </div>
                <p className="pl-12 text-sm italic text-gray-500 transition-colors group-hover/item:text-red-400/70">
                  После критической нагрузки — выход на ринг. Победа требует абсолютного контроля.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center p-6 font-sans">
        <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1),0_0_20px_rgba(153,27,27,0.2)]">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-900/20 blur-[100px]" />

          <div className="relative mb-12">
            <h2 className="font-serif text-4xl font-black uppercase italic tracking-tighter text-white">
              Философия
            </h2>
            <div className="mt-2 h-1 w-24 bg-red-700 shadow-[0_0_15px_rgba(185,28,28,0.8)]" />
          </div>

          <div className="relative space-y-12">
            {philosophyItems.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute -left-4 top-0 h-0 w-[2px] bg-red-600 transition-all duration-500 group-hover:h-full group-hover:shadow-[0_0_10px_#dc2626]" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-950/30">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-widest text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="pl-2 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 font-sans">
        <div className="relative mb-20 w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] p-12 text-center backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
          <div className="absolute -bottom-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-red-600/10 blur-[80px]" />
          <h2 className="mb-10 font-serif text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
            Готов к<br /> испытанию?
          </h2>
          <button className="group relative w-full overflow-hidden rounded-md bg-gradient-to-b from-[#e66465] to-[#911d1d] py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95">
            <span className="relative z-10 text-sm font-black uppercase tracking-[0.2em] text-[#2b0505]">
              вступить в строй
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="font-serif text-2xl font-black italic tracking-widest text-red-600/80">
            UNIFIGHT
          </div>
          <nav className="flex gap-8">
            {['CONTACTS', 'MOTTO', 'PRIVACY'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-bold tracking-[0.2em] text-gray-500 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="text-center text-[10px] font-medium uppercase tracking-[0.3em] text-gray-600">
            © 2026 UNIFIGHT. VICTORY THROUGH DISCIPLINE.
          </div>
        </div>

      </div>
    </div>
  )
}
