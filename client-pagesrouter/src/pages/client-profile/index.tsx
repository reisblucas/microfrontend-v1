import Router from 'next/router'
import React from 'react'

export default function ClientProfile() {
  return (
    <div>
      CLIENT PROFILE - MF2
      <button onClick={() => Router.push('/')}>Client Home</button>
    </div>
  )
}
