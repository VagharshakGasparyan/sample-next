'use client'

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
    const pathname = usePathname();

    return (
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>

            <Link
                className={`link ${pathname === '/products' ? 'active' : ''}`}
                href="/products"
            >
                Products
            </Link>
            <Link
                className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
                href="/dashboard"
            >
                Dashboard
            </Link>
            <Link
                className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
                href="/admin"
            >
                Admin
            </Link>
        </nav>
    )
}