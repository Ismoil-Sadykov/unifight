'use client'

export default function FightersClient() {
    const currentYear = new Date().getFullYear();

    const fighters = [
        { name: "Парвиз Илхомзода", year: 2003, rank: "Мастер спорта", img: "/fighter0.jpeg" },
        { name: "Исмоил Садыков", year: 2008, rank: "Кандидат мастер спорта", img: "/fighter2.jpg" },
        { name: "Умар Алиев", year: 2008, rank: "Кандидат мастер спорта", img: "/fighter6.png" },
        { name: "Аслидин Махмудов", year: 2008, rank: "Кандидат мастер спорта", img: "/fighter7.jpg" },
        { name: "Бежан Нурматов", year: 2009, rank: "Кандидат мастер спорта", img: "/fighter1.jpg" },
        { name: "Умар Назаров", year: 2009, rank: "Кандидат мастер спорта", img: "/fighter3.jpg" },
        { name: "Толибчон Рачабов", year: 2009, rank: "Кандидат мастер спорта", img: "/fighter4.jpg" },
        { name: "Шамил Абдурахмонов", year: 2011, rank: "Кандидат мастер спорта", img: "/fighter8.jpg" },
        { name: "Абдулло Давлатзода", year: 2007, rank: "Мастер спорт", img: "/fighter5.jpg" },
    ];

    return (
        <main className="bg-[#1a1c1a] font-sans">
            <header className="max-w-4xl mx-auto text-center py-12 px-6">
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1">Roster</p>
                <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase leading-tight tracking-tighter">
                    ТОП БОЙЦЫ
                </h1>
                <div className="h-1 w-24 bg-red-700 mt-2 mx-auto"></div>
            </header>

            <section className="flex flex-col items-center gap-20 px-6 md:px-12 pb-20">
                {fighters.map((fighter, index) => {
                    const [firstName, lastName] = fighter.name.split(" ");
                    return (
                        <article key={index} className="max-w-[450px] w-full relative group border-l-[6px] border-pink-200">
                            <div className="relative h-[650px] w-full overflow-hidden bg-zinc-800 rounded-xl">
                                <img
                                    src={fighter.img}
                                    alt={fighter.name}
                                    title={fighter.name}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                                />
                                <div className="absolute top-6 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
                                    {fighter.rank.toUpperCase()}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-10 left-8 right-8">
                                    <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                                        Heavyweight Division
                                    </p>
                                    <h2 className="text-5xl font-black italic uppercase leading-[0.85] text-white mb-1"
                                        style={{ textShadow: "4px 4px 0px rgba(220,38,38,1)" }}>
                                        {firstName}
                                    </h2>
                                    <h3 className="text-4xl font-black italic uppercase leading-none text-red-600"
                                        style={{ textShadow: "3px 3px 0px rgba(255,255,255,1)" }}>
                                        {lastName || "-"}
                                    </h3>
                                    <div className="mt-8 flex items-center gap-6 border-t border-zinc-700/50 pt-4">
                                        <div className="text-white font-bold text-sm">
                                            <span className="text-red-600 border-b border-red-600 mr-2">Age:</span>
                                            {currentYear - fighter.year}
                                        </div>
                                        <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                                            Elite Rank
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>

            <footer className="flex flex-col items-center gap-8 pb-12 pt-5">
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
                <div className="text-center text-[10px] text-gray-600">
                    © 2026 UNIFIGHT
                </div>
            </footer>
        </main>
    )
}
