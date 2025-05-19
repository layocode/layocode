// components/LottieWave.tsx
'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
  ssr: false,
})

const LottieWave = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full flex justify-center items-center -mt-16">
      <Player
        autoplay
        loop
        src="/wave/wave.json"
        style={{ height: '200px', width: '100%' }}
        speed={0.2}
        direction={1}
      />
    </div>
  )
}

export default LottieWave
