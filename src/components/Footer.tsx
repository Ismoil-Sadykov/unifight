'use client'

import { usePathname } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PersonIcon from '@mui/icons-material/Person'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import Link from 'next/link'

export default function Footer() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const activeStyle = {
        color: "#FF0000",
        filter: "drop-shadow(0 0 6px #FF0000)"
    }

    const inactiveStyle = {
        color: "#FFFFFF",
        opacity: 0.7
    }

    return (
        <nav
            className="fixed bottom-0 w-full h-[70px] flex items-center justify-around px-2 z-50 rounded-t-xl"
            style={{
                background: "rgba(20, 20, 20, 0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 -5px 25px rgba(0,0,0,0.6)"
            }}
        >
            <Link href="/" className="flex flex-col items-center gap-1">
                <HomeIcon style={isActive("/") ? activeStyle : inactiveStyle} />
                <span
                    className="text-[10px] font-black uppercase tracking-tighter"
                    style={isActive("/") ? { color: "#FF0000", textShadow: "0 0 4px #FF4D4D" } : {}}
                >
                    Главная
                </span>
            </Link>

            <Link href="/about" className="flex flex-col items-center gap-1">
                <InfoIcon style={isActive("/about") ? activeStyle : inactiveStyle} />
                <span
                    className="text-[10px] font-black uppercase tracking-tighter"
                    style={isActive("/about") ? { color: "#FF0000", textShadow: "0 0 4px #FF4D4D" } : {}}
                >
                    О нас
                </span>
            </Link>

            <Link href="/president" className="flex flex-col items-center gap-1">
                <PersonIcon style={isActive("/president") ? activeStyle : inactiveStyle} />
                <span
                    className="text-[10px] font-black uppercase tracking-tighter"
                    style={isActive("/president") ? { color: "#FF0000", textShadow: "0 0 4px #FF4D4D" } : {}}
                >
                    Президент
                </span>
            </Link>

            <Link href="/fighters" className="flex flex-col items-center gap-1">
                <SelfImprovementIcon style={isActive("/fighters") ? activeStyle : inactiveStyle} />
                <span
                    className="text-[10px] font-black uppercase tracking-tighter"
                    style={isActive("/fighters") ? { color: "#FF0000", textShadow: "0 0 4px #FF4D4D" } : {}}
                >
                    Бойцы
                </span>
            </Link>
        </nav>
    )
}