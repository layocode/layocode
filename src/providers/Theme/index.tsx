'use client'

import type { Theme } from './types'
import React, { createContext, useCallback, use, useState, useEffect } from 'react'
import { defaultTheme, getImplicitPreference, themeLocalStorageKey } from './shared'
import canUseDOM from '@/utilities/canUseDOM'

export interface ContextType {
  theme?: Theme | null
  setTheme: (theme: Theme | null) => void
}

const initialContext: ContextType = {
  theme: defaultTheme,
  setTheme: () => null,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined | null>(defaultTheme)

  useEffect(() => {
    if (canUseDOM) {
      const savedTheme = window.localStorage.getItem(themeLocalStorageKey)
      if (savedTheme) {
        setThemeState(savedTheme as Theme)
        document.documentElement.setAttribute('data-theme', savedTheme)
      } else {
        const implicitPreference = getImplicitPreference()
        if (implicitPreference) {
          setThemeState(implicitPreference)
          document.documentElement.setAttribute('data-theme', implicitPreference)
        }
      }
    }
  }, [])

  const setTheme = useCallback((themeToSet: Theme | null) => {
    if (canUseDOM) {
      if (themeToSet) {
        window.localStorage.setItem(themeLocalStorageKey, themeToSet)
        document.documentElement.setAttribute('data-theme', themeToSet)
      } else {
        window.localStorage.removeItem(themeLocalStorageKey)
        const implicitPreference = getImplicitPreference()
        document.documentElement.setAttribute('data-theme', implicitPreference || '')
      }
      setThemeState(themeToSet)
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ContextType => use(ThemeContext)
