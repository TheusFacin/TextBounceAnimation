import { useEffect, useRef } from 'react'
import './styles.css'

type BouncingLetterProps = {
  letter: string
  index: number
}

export const BouncingLetter = ({ letter, index }: BouncingLetterProps) => {
  // this prevents the animation to run while other is running
  let isAnimating = false

  const letterRef = useRef(document.createElement('span'))

  // running the entry animation
  useEffect(() => {
    // there's a delay depending on the letter's position in the phrase
    letterRef.current.style.animationDelay = `${(index + 1) * 0.2}s`

    // adding to animation class
    letterRef.current.classList.add('animate-start')
    isAnimating = true

    letterRef.current.onanimationend = () => {
      // removing the animation and reseting the delay
      letterRef.current.classList.remove('animate-start')
      letterRef.current.style.animationDelay = '0s'
      isAnimating = false
    }
  }, [])

  // running the bouncy animation when mouse is over
  const handleBounce = () => {
    // if there's a animation running, just don't add another
    if (isAnimating) return

    // adding the animation class
    letterRef.current.classList.add('animate')

    letterRef.current.onanimationstart = () => {
      isAnimating = true
    }

    // removing the animation class as it's unnecessary now
    letterRef.current.onanimationend = () => {
      letterRef.current.classList.remove('animate')
      isAnimating = false
    }
  }

  return (
    <span className="letter" onMouseMove={handleBounce} ref={letterRef}>
      {letter}
    </span>
  )
}
