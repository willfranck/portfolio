import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter intersecting entries
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting)

        if (intersectingEntries.length) {
          // Sort intersecting entries by boundingClientRect.top in ascending order
          intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

          // Set active section to the one with the highest boundingClientRect.top
          setActiveSection(intersectingEntries[0].target.id)
        }
      },
      { threshold: 0.8 } // Adjust this value to change when the callback is called
    )

    sectionIds.forEach((id) => {
      const element = document.querySelector(`#${id}`)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.querySelector(`#${id}`)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds])

  return activeSection
}
