'use client'

import type { Theme } from '../types'
import React, { useEffect, useState } from 'react'
import { useTheme } from '..'
import { themeLocalStorageKey } from './types'
import canUseDOM from '@/utilities/canUseDOM'

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeChange = (newTheme: Theme | null) => {
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-100'}`}
        aria-label="Light theme"
      >
        Light
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'}`}
        aria-label="Dark theme"
      >
        Dark
      </button>
      <button
        onClick={() => handleThemeChange(null)}
        className={`p-2 rounded ${theme === null ? 'bg-gray-300' : 'bg-gray-200'}`}
        aria-label="System theme"
      >
        System
      </button>
    </div>
  )
}
