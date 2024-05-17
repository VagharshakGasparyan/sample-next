'use client'
import Image from "next/image";
import styles from "./page.module.css";


import {useRouter, redirect} from 'next/navigation';
// export const revalidate = 200;

export default function Home() {
    const router = useRouter();
    // redirect('/login');
    console.log(router);
    return (
        <main>
            <h1>This is a Home page</h1>
            <a href={"/products"}>PRODUCTS</a>
            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard
            </button>
        </main>
    );
}
