import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [20, 12, 18]
    }}
  >
    <Experience />
  </Canvas>
)
