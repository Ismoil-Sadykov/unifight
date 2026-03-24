'use client';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpeedIcon from '@mui/icons-material/Speed';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function Home() {
  return (
    <div>
      <div className="p-5 sect1 flex flex-col justify-end min-h-screen">
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
            style={{
              color: "#ff3b3b",
              textShadow: "0 0 6px rgba(255,0,0,0.7)"
            }}
          >
            Капитан Команды
          </p>
          <p
            className="text-3xl font-extrabold"
            style={{
              color: "#ffffff",
              letterSpacing: "2px",
              textShadow: "0 0 12px rgba(255,0,0,0.6)"
            }}
          >
            UNIFIGHT
          </p>
          <p
            className="text-base"
            style={{
              color: "#ff4d4d",
              textShadow: "0 0 6px rgba(255,0,0,0.6)"
            }}
          >
            «Сила. Честь. Дисциплина.»
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "#d1d5db"
            }}
          >
            ILHOMZODA PARVIZ - Мастер спорта по универсальному бою, с более чем 10-летним опытом в боевых искусствах.
          </p>
          <button
            className="mt-3 py-2 rounded-lg font-semibold transition"
            style={{
              background: "linear-gradient(90deg, #8E0000, #ff1a1a)",
              color: "white",
              boxShadow: "0 0 15px rgba(255,0,0,0.6)"
            }}
          >
            Записаться на тренировку
          </button>

        </div>
      </div>
      <div className="py-5 px-3 mt-[30px]"
        style={{
          background: "rgba(20, 20, 20, 0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 5px 25px rgba(0,0,0,0.6)"
        }}>
        <p className="text-base mb-3"
          style={{
            color: "#ff4d4d",
            textShadow: "0 0 6px rgba(255,0,0,0.6)"
          }}> --- Основные параметры</p>
        <p className="text-3xl font-extrabold mb-5"
          style={{
            color: "#ffffff",
            letterSpacing: "2px",
            textShadow: "0 0 12px rgba(255,0,0,0.6)"
          }}>Цели миссии</p>
        <div className="p-4 font-sans flex flex-col gap-3">

          <div className="relative bg-[#1a1a1a] p-6 border-l-4 border-red-700">
            <FitnessCenterIcon className="absolute right-4 top-4 text-white/10 !text-[50px]" />
            <p className="text-[#333] text-4xl font-black italic leading-none">01</p>
            <h2 className="text-white text-xl font-bold uppercase mt-2">Сила</h2>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Развитие взрывной силы с помощью военных протоколов сопротивления.
            </p>
            <div className="w-10 h-[2px] bg-white/10 mt-4"></div>
          </div>

          <div className="relative bg-[#1a1a1a] p-6 border-l-4 border-red-700">
            <SpeedIcon className="absolute right-4 top-4 text-white/10 !text-[50px]" />
            <p className="text-[#333] text-4xl font-black italic leading-none">02</p>
            <h2 className="text-white text-xl font-bold uppercase mt-2">Выносливость</h2>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Высокоинтенсивный метаболический тренинг для длительных боевых операций.
            </p>
            <div className="w-10 h-[2px] bg-white/10 mt-4"></div>
          </div>

          <div className="relative bg-red-700 p-6">
            <SelfImprovementIcon className="absolute right-4 top-4 text-black/20 !text-[60px]" />
            <p className="text-black/20 text-4xl font-black italic leading-none">03</p>
            <h2 className="text-white text-xl font-bold uppercase mt-2">Боевой дух</h2>
            <p className="text-white/90 text-sm mt-2 leading-relaxed">
              Психологическая подготовка и освоение различных дисциплин боевых искусств.
            </p>
            <div className="w-10 h-[2px] bg-white/30 mt-4"></div>
          </div>
        </div>
      </div>
      <div className="w-[375px] bg-black flex flex-col items-center pt-10 pb-32">
        <h1 className="text-red-600 text-2xl font-black italic tracking-wider uppercase mb-8">
          UNIFIGHT
        </h1>

        <div className="flex gap-6 mb-10 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a href="https://wa.me/075497979"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-700 underline-offset-4">Contacts</a>
          <a href="#" className="underline decoration-gray-700 underline-offset-4">Motto</a>
          <a href="#" className="underline decoration-gray-700 underline-offset-4">Privacy</a>
        </div>

        <p className="text-[9px] text-gray-600 uppercase tracking-tighter mb-10">
          © 2024 UNIFIGHT. VICTORY THROUGH DISCIPLINE.
        </p>
      </div>
    </div>
  )
}