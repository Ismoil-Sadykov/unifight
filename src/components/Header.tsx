'use client'

import CallIcon from '@mui/icons-material/Call';
import dynamic from 'next/dynamic'

const FitnessCenterIcon = dynamic(
    () => import('@mui/icons-material/FitnessCenter'),
    { ssr: false }
)

export default function Header() {

    return (
        <div
            className="p-3 flex items-center justify-between"
            style={{
                background: "rgba(20, 20, 20, 0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 5px 25px rgba(0,0,0,0.6)"
            }}
        >

            <FitnessCenterIcon
                style={{
                    color: '#8E0000',
                    fontSize: '32px',
                    filter: "drop-shadow(0 0 6px rgba(142,0,0,0.8))"
                }}
            />

            <p
                className="text-xl font-bold text-center"
                style={{
                    color: "#ffffff",
                    letterSpacing: "2px",
                    textShadow: "0 0 10px rgba(255,0,0,0.6)"
                }}
            >
                UNIFIGHT
            </p>

            <CallIcon
                style={{
                    color: '#8E0000',
                    fontSize: '32px',
                    filter: "drop-shadow(0 0 6px rgba(142,0,0,0.8))"
                }}
            />

        </div>
    )
}