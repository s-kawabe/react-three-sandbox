import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { angleToRadians } from "../../utils"

const Three = () => {

  const orbitControlsRef = useRef(null)
  //
  useFrame((state) => {
      
  })

  useEffect(() => {
    if(!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current)
    }
  }, [orbitControlsRef.current])

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 10]}/>
      <OrbitControls ref={orbitControlsRef} />

      {/* Ball */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
        <planeGeometry args={[7, 7]}  />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Abmient light */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  )
}

export default Three