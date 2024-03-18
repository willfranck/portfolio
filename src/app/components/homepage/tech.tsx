import Image from 'next/image'
import content from '@homepage/content'


export default function Tech() {
  const techImgs = content.tech.imgUrls


  return (
    <div className='relative flex justify-center items-center flex-wrap gap-8 max-w-[40rem] py-10 bg-slate-600/5 before:absolute before:inset-0 before:-z-10 before:bg-blue-900/30'>
      {techImgs && techImgs.map((img, index) => (
        <Image 
          key={index}
          src={`/${img}`}
          alt={`${img} logo`}
          width={80}
          height={80}
          className='w-20 h-20'
        />
      ))}
      </div>
  )
}