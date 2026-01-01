import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-8 text-yellow-400">XAUUSD Trading Journal</h1>
      <p className="text-xl mb-12">Track your SMC trades • Win the FundedNext January 2026 Competition</p>
      <div className="space-x-6">
        <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded text-xl">
          Go to Dashboard
        </Link>
        <Link href="/auth" className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded text-xl">
          Login / Register
        </Link>
      </div>
      <p className="mt-20 text-gray-400">Strategy: Probe 0.02 → Confirm → Scale to 1 lot → Trail to max $1000 loss</p>
    </div>
  );
}
