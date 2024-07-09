import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">My Portfolio</h1>
        <nav className="mt-2">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/resume" className="mr-4">Resume</Link>
          <Link href="/projects" className="mr-4">Projects</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-4">Zongrui Ma</h1>
        <Image src="/images/picture.jpg" alt="Picture" width={150} height={150} />
        <p className="mt-4">A brief description about hobbies, and activities.</p>
        <p className="mt-2">Information about the college and a <a href="https://www.algonquincollege.com" className="text-blue-500 underline">link to the college</a>.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
