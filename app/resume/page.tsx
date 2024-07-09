import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Resume</h1>
        <nav className="mt-2">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/resume" className="mr-4">Resume</Link>
          <Link href="/projects" className="mr-4">Projects</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>Full Name: Zongrui Ma</p>
          <p>Email: eason@umatech.work</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/zongrui-ma-231a26276/" className="text-blue-500 underline">Profile Page</a></p>
          <p>GitHub: <a href="https://github.com/RuiUma" className="text-blue-500 underline">GitHub Page</a></p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p>A brief summary of career objectives or achievements.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <p>Details about work experiences in reverse chronological order.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <p>A list of technical and soft skills.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p>Details about educational background.</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
