import { NextResponse } from 'next/server'

// Mock user reward data
let userRewards = {
  points: 1200,
  history: [
    { type: 'earn', amount: 500, description: 'First login bonus', date: '2025-12-01' },
    { type: 'earn', amount: 700, description: 'Played Sweet Bonanza 1000', date: '2025-12-01' },
    { type: 'redeem', amount: -500, description: 'Redeemed for Free Spins', date: '2025-12-01' },
  ],
}

export async function GET() {
  return NextResponse.json(userRewards)
}

export async function POST(request: Request) {
  const { type, amount, description } = await request.json()
  if (type === 'earn') {
    userRewards.points += amount
  } else if (type === 'redeem') {
    userRewards.points -= amount
  }
  userRewards.history.push({ type, amount, description, date: new Date().toISOString().slice(0, 10) })
  return NextResponse.json(userRewards)
}
