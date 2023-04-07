'use client'
import Script from 'next/script'
import { useEffect } from 'react'
import { start } from 'repl'

interface skillsProps {
  href: string
  title: string
}

declare global {
  interface Window {
    TagCanvas: any
  }
}

const skills: skillsProps[] = [
  { href: '#html', title: 'HTML' },
  { href: '#css', title: 'CSS' },
  { href: '#javascript', title: 'JavaScript' },
  { href: '#typescript', title: 'TypeScript' },
  { href: '#react', title: 'React' },
  { href: '#nextjs', title: 'Next JS' },
  { href: '#es13', title: 'ES13' },
  { href: '#json', title: 'JSON' },
  { href: '#tailwind', title: 'Tailwind' },
  { href: '#c++', title: 'C++' },
  { href: '#nodejs', title: 'Node JS' },
  { href: '#git', title: 'Git' },
  { href: '#npm', title: 'npm' },
  { href: '#nvim', title: 'nvim' },
  { href: '#astro', title: 'Astro' },
  { href: '#solidjs', title: 'Solid JS' },
  { href: '#solidstart', title: 'Solid Start' },
  { href: '#radixui', title: 'Radix UI' },
  { href: '#prisma', title: 'Prisma' },
  { href: '#trpc', title: 'tRPC' },
  { href: '#postgresql', title: 'PostgreSQL' },
  { href: '#zod', title: 'zod' },
  { href: '#nextauth', title: 'Next Auth' },
]

const TagCanvas: React.FC = () => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas
    const tagCanvasOptions = {
      textColour: '#1de4e7',
      outlineColour: 'transparent',
      reverse: true,
      depth: 1.35,
      maxSpeed: 0.05,
      weight: true,
      initial: [0.1, -0.1],
      shuffleTags: true,
      wheelZoom: true,
      fadeIn: 1000,
    }
    TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions)
  }, [])

  return (
    <div className='container'>
      <Script
        strategy='beforeInteractive'
        src='https://www.goat1000.com/tagcanvas.min.js'
      />
      <canvas
        id='tagcanvas'
        width='800'
        height='580'
        style={{
          maxWidth: '1000px',
          width: '100%',
          zIndex: '99',
          position: 'relative',
          padding: 'auto',
        }}
      ></canvas>
      <div id='taglist' style={{ display: 'none' }}>
        <ul>
          {skills.map((skill) => (
            <li key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TagCanvas
