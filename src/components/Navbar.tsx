'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import Link from 'next/link';

export default function Navbar() {
  const [user, loading] = useAuthState(auth);

  const handleLogout = () => signOut(auth);

  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Trading Journal</Link>
        <div className="space-x-6">
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <span>{user.email}</span>
              <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <Link href="/auth">Login / Sign Up</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
