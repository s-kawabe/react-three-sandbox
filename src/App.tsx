import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Three from './components/three'
import './App.css'

function App() {
  return (
      // shadows: boolean meshの影を表現 
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={<div>...loading</div>}>
          <Three />          
        </Suspense>
      </Canvas>
  )
}

export default App
