import { BouncingLetter } from '../BouncingLetter'
import './styles.css'

type BoucingPhraseProps = {
  children: string
}

export const BouncingPhrase = ({ children }: BoucingPhraseProps) => {
  let indexOffset = 0

  return (
    <span className="phrase">
      {children.split('').map((letter, i) => {
        if (letter === ' ') {
          indexOffset++
          return <span key={`${letter}${i}`}> </span>
        } else
          return (
            <BouncingLetter
              key={`${letter}${i}`}
              letter={letter}
              index={i - indexOffset}
            />
          )
      })}
    </span>
  )
}
