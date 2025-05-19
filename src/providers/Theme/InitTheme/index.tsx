'use client'

import React from 'react'
import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const mediaQuery = '(prefers-color-scheme: dark)'
              const mql = window.matchMedia(mediaQuery)
              const preference = window.localStorage.getItem('${themeLocalStorageKey}')
              let themeToSet = '${defaultTheme}'

              if (preference) {
                themeToSet = preference
              } else {
                const implicitPreference = mql.matches ? 'dark' : 'light'
                themeToSet = implicitPreference
              }

              document.documentElement.setAttribute('data-theme', themeToSet)
            } catch (e) {
              console.error('Failed to initialize theme:', e)
            }
          })()
        `,
      }}
    />
  )
}
