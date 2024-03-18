import Image from 'next/image'


export default function Logo() {
  return (
    <div className='logo relative flex justify-center items-center'>
      <div className='relative outer-circle flex justify-center items-center'>
        <div className='inner-top-left-element'></div>
        <div className='inner-bottom-right-element'></div>
      </div>

      <div className='absolute inset-0 flex flex-col justify-between items-center text-center'>
        <Image 
          src={'/logo_insert.png'} 
          alt='Logo insert of closing brackets' 
          width={48} 
          height={0} 
          className='mt-7' 
        />

        <h1 className='logo-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.7rem] xs:text-[1.9rem] xl:text-[2.3rem] bold tracking-widest'>
          WILLFRANCKCODES
        </h1>

        <h2 className='w-40 mb-10 text-[1rem] text-center'>
          FULL STACK DEVELOPER
        </h2>
      </div>
    </div>
  )
}
