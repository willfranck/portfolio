'use client'
// import Link from 'next/link'
import Logo from '@global/logo'
import ThemeToggle from '@global/themeToggle'
import { useScrollSpy } from '@hooks/scrollspy'
import content from '@homepage/content'


export default function Header() {
  const pageSections = content.header.pageSections
  const activeSection = useScrollSpy(pageSections.map(section => section.sectionId))

  const scrollToSection = (props: string) => {
    document.getElementById(props)?.scrollIntoView()
  }

  return (
    <header className='lg:sticky lg:top-0 flex flex-col lg:justify-between items-center lg:max-h-screen lg:w-2/5 p-10 lg:py-20'>
      <div className='flex flex-col justify-center items-end'>
        <ThemeToggle />
        <Logo />
        
        <div className='my-10 pr-16 hidden lg:block'>
          {pageSections && pageSections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.sectionId)}
              className={`nav-button flex justify-end items-center w-full py-2 [&>span]:hover:w-16 [&>p]:hover:text-white dark:[&>p]:hover:text-blue-400 ${section.sectionId === activeSection ? 'text-white dark:text-blue-400' : ''}`}
            >
              {/* <span className='nav-indicator h-[2px] bg-slate-600 mr-2'></span> */}
              <p className='duration-300'>{section.name}</p>
              <span className={`w-6 h-[2px] bg-slate-600 ml-2 ${section.sectionId === activeSection ? 'w-16' : 'w-6'}`}></span>
            </button>
          ))}
        </div>
      </div>

      <nav>
        <ul className='flex gap-4 mt-10'>
          <li>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
            </svg>
          </li>
          <li>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  )
}
