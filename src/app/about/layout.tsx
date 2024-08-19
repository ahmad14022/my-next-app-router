

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="fixed top-10 right-0 z-10 h-screen w-60 bg-gray-800">
                <ul className="text-white p-5">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Profile
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    )
}