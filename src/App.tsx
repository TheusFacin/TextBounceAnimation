import Particles from 'react-particles-js'
import { BouncingPhrase } from './components/BouncingPhrase'

import './styles/global.css'
import './styles/app.css'

const App = () => {
  return (
    <header>
      <Particles
        className="particles-container"
        params={{
          particles: {
            number: {
              value: 260,
              density: {
                enable: false,
              },
            },
            color: {
              value: '#666',
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
            },
          },
        }}
      />

      <div className="text-container">
        <h1>
          <BouncingPhrase>Bom dia!</BouncingPhrase>
        </h1>

        <p>Testando um texto saltitante :)</p>
      </div>
    </header>
  )
}

export default App
