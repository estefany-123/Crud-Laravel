import { useState } from 'react'

const links = [
    { href: '/libros', label: 'Libros' },
    { href: '/revistas', label: 'Revistas' },
    { href: '/categorias', label: 'Categorías' },
]

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const currentPath = window.location.pathname

    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="bg-white shadow-md px-4 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">Biblioteca</div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    <ul className="hidden md:flex space-x-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-gray-700 hover:text-blue-600 transition ${currentPath === link.href
                                            ? 'font-semibold text-blue-700 border-b-2 border-blue-500 pb-1'
                                            : ''
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {menuOpen && (
                    <ul className="md:hidden mt-3 space-y-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`block px-2 py-1 text-gray-700 hover:text-blue-600 transition ${currentPath === link.href ? 'font-semibold text-blue-700' : ''
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
            <div className="box-border p-6">
                {children}
            </div>
        </div>
    )
}