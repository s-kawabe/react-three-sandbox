import { Environment, OrbitControls, OrbitControlsProps, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { angleToRadians } from "../../utils"
import * as THREE from "three"

// type Args = Parameters<typeof OrbitControls>[number]
// type ArgRef = Omit<Args, keyof OrbitControlsProps>
// type Ref = NonNullable<ArgRef["ref"]>

const Three = () => {
  const orbitControlsRef = useRef<any>(null)
  // エフェクトの実行、コントロールの更新など、レンダリングされたすべてのフレームでコードが実行される
  // コールバック関数は、フレームがレンダリングされる直前に呼び出されます。
  useFrame((state) => {
    if(!!orbitControlsRef.current) {
      const  { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
      orbitControlsRef.current.setPolarAngle((y + 0.5) * angleToRadians(90 - 30))
      orbitControlsRef.current.update();
    }
  })

  useEffect(() => {
    if(!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current)
    }
  }, [orbitControlsRef.current])
 
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

      {/* Ball */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]}  />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Abmient light */}
      <ambientLight args={["#ffffff", 0.25]} />
      {/* spotLight */}
      <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  )
}

export default Three