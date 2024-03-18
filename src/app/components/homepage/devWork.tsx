'use client'
import { useState } from 'react'
import FeatureCard, { Card } from '@global/featureCard'
import content from '@homepage/content'


export default function DevWork() {
  const devWork = content.work.dev
  const [projects, setProjects] = useState<Card[]>(devWork)
  
  
  return (
    <>
      {projects && projects.map((project, index) => (
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
