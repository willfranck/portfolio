'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newSystemTheme = e.matches ? 'dark' : 'light'
      setTheme(newSystemTheme)
    })
  })


  return (
    <button 
      onClick={() => {theme && theme === 'light' ? setTheme('dark') : setTheme('light')}}
      className='flex justify-center items-center gap-2 py-2 translate-x-10 -translate-y-10 [&>span]:hover:translate-x-0 [&>span]:hover:opacity-100' 
    >
      {mounted ? (
        <>
          {theme && theme === 'light' ? (
            <>
              <span className='span translate-x-2 opacity-0'>
                It&apos;s a Sunny Day!
              </span>
              <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" stroke="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7c-4.962 0-9 4.037-9 9s4.038 9 9 9c4.963 0 9-4.037 9-9s-4.037-9-9-9zm0 15c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-16.361a1.5 1.5 0 0 0 1.5-1.5V2a1.5 1.5 0 0 0-3 0v2.139a1.5 1.5 0 0 0 1.5 1.5zM6.552 8.673a1.498 1.498 0 0 0 2.122 0 1.5 1.5 0 0 0 0-2.121L7.16 5.04A1.5 1.5 0 1 0 5.04 7.161l1.512 1.512zM5.638 16a1.5 1.5 0 0 0-1.5-1.5H2a1.5 1.5 0 0 0 0 3h2.138a1.5 1.5 0 0 0 1.5-1.5zm.914 7.327L5.04 24.84a1.5 1.5 0 1 0 2.121 2.121l1.512-1.512a1.5 1.5 0 1 0-2.12-2.12zM16 26.361a1.5 1.5 0 0 0-1.5 1.5V30a1.5 1.5 0 0 0 3 0v-2.139a1.5 1.5 0 0 0-1.5-1.5zm9.448-3.034a1.5 1.5 0 1 0-2.12 2.121l1.51 1.512a1.496 1.496 0 0 0 2.121 0 1.5 1.5 0 0 0 .001-2.121l-1.512-1.512zM30 14.5h-2.139a1.5 1.5 0 0 0 0 3H30a1.5 1.5 0 0 0 0-3zm-5.612-5.388c.383 0 .767-.146 1.06-.44l1.512-1.51a1.5 1.5 0 1 0-2.121-2.122l-1.512 1.512a1.5 1.5 0 0 0 1.06 2.56z"></path>
              </svg>
            </>
          ) : (
            <>
              <span className='span translate-x-2 opacity-0'>
                Time for Sleepies
              </span>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </>
          )}
        </>
      ) : (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" stroke="currentColor" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M26.31 9.26A7.93 7.93 0 0 0 22 8a8 8 0 0 0-1.62.16 9 9 0 1 0 0 15.67A8 8 0 0 0 22 24a8 8 0 0 0 4.31-14.74zM16 23a7 7 0 1 1 1.75-13.77 8 8 0 0 0 0 13.53A7 7 0 0 1 16 23zm0 4a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm-9.19-3.22-.71.71a1 1 0 1 0 1.41 1.41l.71-.71a1 1 0 0 0-1.41-1.41zM4 15H3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm2.81-6.78a1 1 0 0 0 1.41-1.41l-.71-.71A1 1 0 0 0 6.1 7.51zM16 5a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1z" data-name="Mail Box"></path>
        </svg>
      )}
    </button>
  )
}
