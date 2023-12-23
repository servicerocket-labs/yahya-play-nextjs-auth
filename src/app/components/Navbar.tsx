import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-300 p-8">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/server">Server Component</Link></li>
                <li><Link href="/client">Client Component</Link></li>
                <li><Link href="/custom-page">Custom Page</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
            </ul>
        </nav>
    )
}

