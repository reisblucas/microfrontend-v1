import Link from 'next/link'
import React from 'react'

export default function DrugLookupPage() {
  return (
    <div>
      We are on Druglookup Page{' '}
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  )
}
