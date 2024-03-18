import content from '@homepage/content'


export default function Bio() {
  return (
    <div className='space-y-4'>
      <p>{content.bio.paragraph1}</p>
      <p>{content.bio.paragraph2}</p>
    </div>
  )
}
