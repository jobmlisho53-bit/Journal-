'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (!user) {
    router.push('/auth');
    return null;
  }

  const tradesRef = collection(db, 'users', user.uid, 'trades');
  const [trades] = useCollectionData(tradesRef);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-yellow-400">Welcome back, {user.email}!</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Your Trades ({trades?.length || 0})</h2>
        <p className="text-gray-400">Add your first trade to start tracking progress for FundedNext January 2026!</p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-lg">
          + Add New Trade
        </button>
      </div>
    </div>
  );
}
