'use client'

import FlashOnIcon from '@mui/icons-material/FlashOn';
import TimerIcon from '@mui/icons-material/Timer';
import ShieldIcon from '@mui/icons-material/Shield';

export default function AboutClient() {
    const philosophyItems = [
        {
            icon: <FlashOnIcon className="text-red-500" sx={{ fontSize: 32 }} />,
            title: "POWER / СИЛА",
            desc: "Мы куем не просто мышцы, а взрывную энергию, способную сокрушить любое сопротивление. Сила в UNIFIGHT — это инструмент мгновенного действия."
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
            <section className="relative min-h-screen flex items-end p-6 text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/photo2.jpg')" }} />
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
                        <p className="text-xs tracking-[0.3em]" style={{ color: "#ff3b3b", textShadow: "0 0 6px rgba(255,0,0,0.7)" }}>
                            TACTICAL DOMINANCE SYSTEM
                        </p>
                        <h1 className="text-2xl font-extrabold leading-tight" style={{ textShadow: "0 0 20px rgba(255,0,0,0.6)" }}>
                            УНИВЕРСАЛЬНЫЙ <br /><span style={{ color: "#ff1a1a" }}>БОЙ</span>
                        </h1>
                        <p className="text-lg font-semibold" style={{ color: "#ff4d4d", textShadow: "0 0 8px rgba(255,0,0,0.6)" }}>
                            OPERATIONAL EXCELLENCE
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen items-center justify-center p-6">
                <article className="relative group max-w-[400px] border-l-4 border-red-600 bg-white/[0.03] backdrop-blur-xl p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 hover:shadow-red-900/20">
                    <h2 className="mb-8 font-serif text-4xl font-black uppercase leading-tight tracking-tight text-white">
                        Две фазы.<br />Один победитель.
                    </h2>
                    <p className="mb-10 text-sm leading-relaxed text-gray-400">
                        UNIFIGHT — это комплексная система испытаний, состоящая из двух неразрывных этапов: <span className="text-gray-200">преодоление полосы препятствий и контактный бой на ринге</span>.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-bold text-red-600">01</span>
                            <h3 className="text-xl font-black uppercase tracking-widest text-white">Полоса препятствий</h3>
                        </div>
                        <p className="pl-12 text-sm italic text-gray-500">Стрельба, метание ножей, сетки и барьеры. Тест на функциональный предел.</p>

                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-bold text-red-600">02</span>
                            <h3 className="text-xl font-black uppercase tracking-widest text-white">Контактный бой</h3>
                        </div>
                        <p className="pl-12 text-sm italic text-gray-500">После критической нагрузки — выход на ринг. Победа требует абсолютного контроля.</p>
                    </div>
                </article>
            </section>

            <section className="flex min-h-screen items-center justify-center p-6">
                <div className="relative w-full max-w-[500px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
                    <h2 className="font-serif text-4xl font-black uppercase italic tracking-tighter text-white mb-4">Философия</h2>
                    <div className="mt-2 h-1 w-24 bg-red-700 shadow-[0_0_15px_rgba(185,28,28,0.8)]" />

                    <div className="space-y-12 mt-8">
                        {philosophyItems.map((item, index) => (
                            <article key={index} className="group relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-950/30">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-serif text-xl font-bold tracking-widest text-white">{item.title}</h3>
                                </div>
                                <p className="pl-2 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-200">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen flex-col items-center justify-center p-6">
                <div className="relative mb-20 w-full max-w-[500px] rounded-3xl border border-white/5 bg-white/[0.01] p-12 text-center backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
                    <h2 className="mb-10 font-serif text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
                        Готов к испытанию?
                    </h2>
                    <a
                        href="tel:+992075497979"
                        className="group relative w-full overflow-hidden rounded-md bg-gradient-to-b from-[#e66465] to-[#911d1d] py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95 block text-center"
                    >
                        <span className="relative z-10 text-sm font-black uppercase tracking-[0.2em] text-[#2b0505]">вступить в строй</span>
                    </a>
                </div>

                <footer className="flex flex-col items-center gap-8">
                    <div className="font-serif text-2xl font-black italic tracking-widest text-red-600/80">UNIFIGHT</div>
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
                    <div className="text-center text-[10px] font-medium uppercase tracking-[0.3em] text-gray-600">
                        © 2026 UNIFIGHT. VICTORY THROUGH DISCIPLINE.
                    </div>
                </footer>
            </section>
        </div>
    )
}
