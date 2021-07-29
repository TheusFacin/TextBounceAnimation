import { useEffect } from 'react'
import { useRef } from 'react'
import './styles.css'

type BouncingLetterProps = {
  letter: string
  index: number
}

export const BouncingLetter = ({ letter, index }: BouncingLetterProps) => {
  // I'm not using state because there's no need to
  // re-render every time the animation starts or ends
  let isAnimating = false

  const letterRef = useRef(document.createElement('span'))

  useEffect(() => {
    letterRef.current.style.animationDelay = `${(index + 1) * 0.2}s`
    letterRef.current.classList.add('animate-start')
    isAnimating = true

    letterRef.current.onanimationend = () => {
      letterRef.current.classList.remove('animate-start')
      letterRef.current.style.animationDelay = '0s'
      isAnimating = false
    }
  }, [])

  const handleBounce = () => {
    if (isAnimating) return

    letterRef.current.classList.add('animate')

    letterRef.current.onanimationstart = () => {
      isAnimating = true
    }

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
