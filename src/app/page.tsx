import Header from '@homepage/header'
import Bio from '@homepage/bio'
import Tech from '@homepage/tech'
import DevWork from '@homepage/devWork'
import Projects from '@homepage/projects'
import Employers from '@homepage/work'


export default function Home() {
  return (
    <main className='w-full max-w-7xl min-h-screen mx-auto'>
      <section className='lg:flex lg:flex-row-reverse lg:justify-between lg:gap-4'>
        <Header />

        <article className='flex flex-col justify-center items-center lg:gap-10 lg:w-3/5 p-4 lg:p-20'>
          <div id='bio' className='mt-10 mb-20 scroll-mt-20'>
            <Bio />
          </div>

          <hr></hr>
          
          <div id='tech' className='group my-20 scroll-mt-20'>
            <Tech />
          </div>

          <hr></hr>
          
          <ol id='devWork' className='group my-20 scroll-mt-20'>
            <DevWork />
          </ol>

          <hr></hr>

          <ol id='projects' className='group my-20 scroll-mt-20'>
            <Projects />
          </ol>

          <hr></hr>

          <ol id='work' className='group my-20 scroll-mt-20'>
            <Employers />
          </ol>
        </article>
      </section>
    </main>
  )
}
