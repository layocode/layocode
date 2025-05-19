'use client'

import type { Theme } from '@/providers/Theme/types'

import React, { createContext, useCallback, use, useState, useEffect } from 'react'

import canUseDOM from '@/utilities/canUseDOM'

export interface ContextType {
  headerTheme?: Theme | null
  setHeaderTheme: (theme: Theme | null) => void
}

const initialContext: ContextType = {
  headerTheme: 'light', // Default to light theme during SSR
  setHeaderTheme: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerTheme, setThemeState] = useState<Theme | null>('light') // Default to light theme

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet)
  }, [])

  useEffect(() => {
    if (canUseDOM) {
      const theme = document.documentElement.getAttribute('data-theme') as Theme
      if (theme) {
        setThemeState(theme)
      }
    }
  }, [])

  return (
    <HeaderThemeContext.Provider value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  )
}

export const useHeaderTheme = (): ContextType => use(HeaderThemeContext)
