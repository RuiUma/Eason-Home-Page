'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"


export default function Contact() {
    const { toast } = useToast()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const submit = async () => {
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Message: ${message}`)
        const res = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
              "Content-Type": "application/json",
              // "Coding-Clubs":"fjdaskljglkfdajglk.gfjdsgiroewnmcxvzxiEFLIUJfklsajd.LJFDISJFKLHUERJKA"
          },
        })
        const data = await res.json()
        console.log(data)
        setEmail('')
        setName('')
        setMessage('')
        toast({
          title: "Thank you",
          description: "I'll reply as soon as possible.",
        })
    }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Contact</h1>
        <nav className="mt-2">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/resume" className="mr-4">Resume</Link>
          <Link href="/projects" className="mr-4">Projects</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" name="message" required className="mt-1 p-2 border border-gray-300 rounded w-full"></textarea>
          </div>
          <button type="button" onClick={submit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
