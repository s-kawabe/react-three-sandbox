import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Three from './components/three'
import './App.css'

function App() {
  return (
      <Canvas id="three-canvas-container">
        <Suspense fallback={<></>}>
          <Three />          
        </Suspense>
      </Canvas>
  )
}

export default App
