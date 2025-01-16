"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface Montadora{
    id: number;
    nome: string;
}

export default function Home() {

    const [montadoras, setMontadoras] = useState<Montadora[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/montadoras")
            .then(response => response.json())
            .then(data => setMontadoras(data.results))
            .catch(error => console.error("Error fetching montadoras:", error));
    }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1">
        <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
        <h1>Bem-vindo ao site das Montadoras de Veículos</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Montadoras de Veículos</h1>

        <ol>
            {montadoras.map((montadora) => (
                <li key={montadora.id}>{montadora.nome}</li>
            ))}
        </ol>
      </main>
    </div>
  )
}