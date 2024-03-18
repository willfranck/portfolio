import Link from 'next/link'

export type Card = {
  start: string,
  end: string,
  lineBarVisibility: string | null,
  title: string,
  position: string | null,
  desc: string,
  tech: string[] | null
}


export default function FeatureCard(cardProps: Card) {
  return (
    <li>
      <div className='flex flex-col lg:flex-row lg:gap-8 p-4 lg:hover:-translate-y-0.5 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:bg-white/50 dark:lg:hover:bg-slate-800 dark:lg:[&>div>.lineBar]:hover:bg-slate-500'>
        <div className='flex flex-col items-center'>
          <span className='my-2'>
            {cardProps.end}
          </span>

          <div className={`${cardProps.lineBarVisibility} lineBar w-1 h-full bg-slate-700`}></div>
          
          <span className='mt-2 mb-4'>
            {cardProps.start}
          </span>
        </div>

        <div className='flex-1 flex flex-col gap-2'>
          <Link
            href={'/'}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2 max-w-max py-2 pr-6 [&>svg]:hover:translate-x-0.5 [&>svg]:hover:-translate-y-0.5 [&>svg]:hover:fill-blue-400'
          >
            <h3 className='text-2xl'>
              {cardProps.title}
            </h3>
            <svg className='mt-[3px] scale-[80%]' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 20' width="20" height="20">
              <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M13 1h6v6M8 12 19 1"></path></g>
            </svg>
          </Link>

          <p className='text-lg dark:text-gray-400'>
            {cardProps.position}
          </p>
          <p>
            {cardProps.desc}
          </p>

          <ul className='flex flex-wrap gap-4 mt-2'>
            {cardProps.tech?.map((tech, techIndex) => (
              <li 
                key={techIndex} 
                className='px-3 pt-0.5 bg-blue-600/40 dark:bg-blue-600 rounded-full'
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
