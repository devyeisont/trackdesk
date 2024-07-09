'use client';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Head>
        <title>Home</title>
      </Head>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push('/success')}
      >
        Comprar
      </button>
    </main>
  );
}
