'use client'
import { useState, useEffect } from 'react'
import FeatureCard, { Card } from '@global/featureCard'
import content from '@homepage/content'


export default function Employers() {
  const workHistory = content.work.nonDev
  const [work, setWork] = useState<Card[]>(workHistory)

    
  return (
    <>
      {work && work.map((project, index) => (
        <FeatureCard
          key={index} 
          start={project.start}
          end={project.end}
          lineBarVisibility={project.lineBarVisibility}
          title={project.title}
          position={project.position}
          desc={project.desc}
          tech={project.tech}
        />
      ))}
    </>
  )
}
