import { BouncingLetter } from '../BouncingLetter'
import './styles.css'

type BoucingPhraseProps = {
  // I'm using children here to make it easier, as it can be
  // <BouncingPhrase> Hello :) </BouncingPhrase>
  // instead of
  // <BouncingPhrase phrase="Hello :)" />
  children: string
}

export const BouncingPhrase = ({ children }: BoucingPhraseProps) => {
  // this is for not count the spaces in letter's delays
  let indexOffset = 0

  // separating ever letter
  const letters = children.split('')

  return (
    <span className="phrase">
      {letters.map((letter, i) => {
        if (letter === ' ') {
          // if it's a space, then change the offset and render just the space
          indexOffset++
          return <span key={`${letter}${i}`}> </span>
        }
        // else render the letter with the bounce effect
        else {
          return (
            <BouncingLetter
              key={`${letter}${i}`}
              letter={letter}
              index={i - indexOffset}
            />
          )
        }
      })}
    </span>
  )
}
