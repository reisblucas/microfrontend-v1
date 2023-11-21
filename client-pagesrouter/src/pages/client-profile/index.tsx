import { useRouter } from 'next/navigation'
import React from 'react'

export default function ClientProfile() {
  const router = useRouter()

  return (
    <div>
      CLIENT PROFILE - MF2
      <button onClick={() => router.push('/')}>Client Home</button>
    </div>
  )
}
