import Image from 'next/image'
import { rewards } from './rewardsData'

export default function RewardRedemptionPage() {
  return (
    <div className="min-h-screen bg-[#181c23] text-white flex flex-row">
      {/* Left Site Ads */}
      <div className="hidden md:flex flex-col items-center justify-center w-24 h-[80vh] bg-gradient-to-b from-blue-200 to-green-200 p-0 m-0">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/Screenshot 2025-12-01 175831.png" alt="Site Ad Left" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0}} />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-2 md:px-8">
        <div className="mt-8 mb-2">
          <Image src="/time2bet-logo.svg" alt="Time2Bet Logo" width={192} height={38} priority />
        </div>
        <h1 className="text-5xl font-extrabold mb-8 text-yellow-400 text-center drop-shadow-lg tracking-wide">Reward Redemption</h1>
        <div className="flex w-full mb-6">
          <div className="w-32 hidden md:block">
            <div className="bg-[#23272f] rounded-lg p-4 text-center font-semibold shadow">FILTER</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-7xl">
          {rewards.map((item) => (
            <div key={item.id} className="flex flex-col items-center rounded-2xl p-6 shadow-2xl border-2 border-yellow-400 hover:scale-105 transition-transform duration-200" style={{background: 'linear-gradient(180deg, #FFB300 0%, #FF9800 100%)'}}>
              <div className="w-24 h-24 bg-yellow-200 rounded-xl mb-4 flex items-center justify-center text-black font-bold text-sm shadow-inner border border-yellow-400">ITEM PICTURE</div>
              <div className="text-black font-extrabold text-xl mb-1 text-center">{item.name}</div>
              <div className="text-black mb-3 text-center font-medium">Points: <span className="text-yellow-900 font-bold">{item.points}</span></div>
              <button className="bg-black text-yellow-400 px-6 py-2 rounded-lg font-bold shadow hover:bg-gray-800 transition w-full">CLAIM</button>
            </div>
          ))}
        </div>
      </div>
      {/* Right Site Ads */}
      <div className="hidden md:flex flex-col items-center justify-center w-24 h-[80vh] bg-gradient-to-b from-blue-200 to-green-200 p-0 m-0">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/Screenshot 2025-12-01 180536.png" alt="Site Ad Right" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0}} />
        </div>
      </div>
    </div>
  )
}
