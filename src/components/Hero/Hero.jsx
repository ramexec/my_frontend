import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero-main'> 
      <div className="hero-title font-bs neon-text"> 
         {"RAMEXEC".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div> 
    </div>
  )
}
