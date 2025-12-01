import { useEffect, useState } from 'react'

export default function RewardSystem() {
  const [rewards, setRewards] = useState({ points: 0, history: [] })
  const [amount, setAmount] = useState(0)
  const [desc, setDesc] = useState('')

  useEffect(() => {
    fetch('/api/rewards').then(res => res.json()).then(setRewards)
  }, [])

  const handleEarn = async () => {
    await fetch('/api/rewards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'earn', amount: Number(amount), description: desc })
    })
    const updated = await fetch('/api/rewards').then(res => res.json())
    setRewards(updated)
  }

  const handleRedeem = async () => {
    await fetch('/api/rewards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'redeem', amount: Number(amount), description: desc })
    })
    const updated = await fetch('/api/rewards').then(res => res.json())
    setRewards(updated)
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Reward System</h2>
      <div className="mb-4">
        <span className="font-semibold">Points:</span> <span className="text-green-400">{rewards.points}</span>
      </div>
      <div className="flex gap-2 mb-4">
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="p-2 rounded text-black" />
        <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="p-2 rounded text-black" />
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={handleEarn} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Earn</button>
        <button onClick={handleRedeem} className="bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700">Redeem</button>
      </div>
      <h3 className="font-semibold mb-2">History</h3>
      <ul className="max-h-40 overflow-y-auto">
        {rewards.history.map((item, idx) => (
          <li key={idx} className="mb-1">
            <span className={item.type === 'earn' ? 'text-green-400' : 'text-yellow-400'}>
              [{item.type}] {item.amount} pts
            </span> - {item.description} <span className="text-gray-400">({item.date})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
