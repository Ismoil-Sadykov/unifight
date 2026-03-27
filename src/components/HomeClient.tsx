'use client'

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpeedIcon from '@mui/icons-material/Speed';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Link from "next/link";

export default function HomeClient() {
    return (
        <div>
            <section className="p-5 sect1 flex flex-col justify-end min-h-screen">
                <div
                    className="flex flex-col gap-2 p-5 rounded-2xl"
                    style={{
                        background: "rgba(20, 20, 20, 0.45)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.7)"
                    }}
                >
                    <p
                        className="text-sm tracking-widest"
                        style={{ color: "#ff3b3b", textShadow: "0 0 6px rgba(255,0,0,0.7)" }}
                    >
                        Капитан Команды
                    </p>
                    <h1
                        className="text-3xl font-extrabold"
                        style={{ color: "#ffffff", letterSpacing: "2px", textShadow: "0 0 12px rgba(255,0,0,0.6)" }}
                    >
                        UNIFIGHT – Сила, Честь, Дисциплина
                    </h1>
                    <p
                        className="text-base"
                        style={{ color: "#ff4d4d", textShadow: "0 0 6px rgba(255,0,0,0.6)" }}
                    >
                        Тренировки по универсальному бою с ILHOMZODA PARVIZ
                    </p>
                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#d1d5db" }}
                    >
                        ILHOMZODA PARVIZ – мастер спорта по универсальному бою с более чем 10-летним опытом в боевых искусствах. Развивайте силу, выносливость и боевой дух под профессиональным руководством.
                    </p>
                    <a
                        href="tel:+9920 75497979"
                        className="mt-3 py-2 rounded-lg font-semibold text-center transition block"
                        style={{
                            background: "linear-gradient(90deg, #8E0000, #ff1a1a)",
                            color: "white",
                            boxShadow: "0 0 15px rgba(255,0,0,0.6)"
                        }}
                    >
                        Записаться на тренировку
                    </a>
                </div>
            </section>

            <section className="py-5 px-3 mt-[30px]"
                style={{
                    background: "rgba(20, 20, 20, 0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 5px 25px rgba(0,0,0,0.6)"
                }}>
                <h2 className="text-base mb-3 text-red-500 tracking-widest">--- Основные параметры</h2>
                <h2 className="text-3xl font-extrabold mb-5 text-white" style={{ letterSpacing: "2px" }}>Цели миссии</h2>

                <div className="p-4 font-sans flex flex-col gap-3">
                    <article className="relative bg-[#1a1a1a] p-6 border-l-4 border-red-700">
                        <FitnessCenterIcon className="absolute right-4 top-4 text-white/10 !text-[50px]" />
                        <p className="text-[#333] text-4xl font-black italic leading-none">01</p>
                        <h3 className="text-white text-xl font-bold uppercase mt-2">Сила</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Развитие взрывной силы с помощью военных протоколов сопротивления. Подходит для онлайн тренировок и персональной подготовки.
                        </p>
                        <div className="w-10 h-[2px] bg-white/10 mt-4"></div>
                    </article>

                    <article className="relative bg-[#1a1a1a] p-6 border-l-4 border-red-700">
                        <SpeedIcon className="absolute right-4 top-4 text-white/10 !text-[50px]" />
                        <p className="text-[#333] text-4xl font-black italic leading-none">02</p>
                        <h3 className="text-white text-xl font-bold uppercase mt-2">Выносливость</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Высокоинтенсивный метаболический тренинг для длительных боевых операций. Подходит для всех уровней подготовки.
                        </p>
                        <div className="w-10 h-[2px] bg-white/10 mt-4"></div>
                    </article>

                    <article className="relative bg-red-700 p-6">
                        <SelfImprovementIcon className="absolute right-4 top-4 text-black/20 !text-[60px]" />
                        <p className="text-black/20 text-4xl font-black italic leading-none">03</p>
                        <h3 className="text-white text-xl font-bold uppercase mt-2">Боевой дух</h3>
                        <p className="text-white/90 text-sm mt-2 leading-relaxed">
                            Психологическая подготовка, развитие боевого духа и освоение различных дисциплин боевых искусств.
                        </p>
                        <div className="w-10 h-[2px] bg-white/30 mt-4"></div>
                    </article>
                </div>
            </section>

            <footer className="w-full bg-black flex flex-col items-center pt-10 pb-32">
                <h2 className="text-red-600 text-2xl font-black italic tracking-wider uppercase mb-8">
                    UNIFIGHT
                </h2>

                <nav className="flex gap-6 mb-10 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <a href="tel:+992075497979" className="underline decoration-gray-700 underline-offset-4">Contacts</a>
                    <Link href="/motto" className="underline decoration-gray-700 underline-offset-4">Motto</Link>
                    <a
                        href="https://instagram.com/team.sirojov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-700 underline-offset-4"
                    >
                        Instagram
                    </a>
                </nav>

                <p className="text-[9px] text-gray-600 uppercase tracking-tighter mb-10">
                    © 2024 UNIFIGHT. VICTORY THROUGH DISCIPLINE.
                </p>
            </footer>
        </div>
    )
}
