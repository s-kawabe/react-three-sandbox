import { Environment, OrbitControls, OrbitControlsProps, PerspectiveCamera, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { angleToRadians } from "../../utils"
import * as THREE from "three"
import gsap from "gsap"
import { Power2, Bounce } from "gsap/src/all"

// type Args = Parameters<typeof OrbitControls>[number]
// type ArgRef = Omit<Args, keyof OrbitControlsProps>
// type Ref = NonNullable<ArgRef["ref"]>

const Three = () => {
  const [colorMapTexture, dispMapTexture] = useTexture(["aa", "bb"])

  const orbitControlsRef = useRef<any>(null)
  const ballRef = useRef<any>(null)
  
  // Code to move the camera arround
  // (エフェクトの実行、コントロールの更新など、レンダリングされたすべてのフレームでコードが実行される
  // コールバック関数は、フレームがレンダリングされる直前に呼び出されます。)
  useFrame((state) => {
    if(!!orbitControlsRef.current) {
      const  { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
      orbitControlsRef.current.setPolarAngle((y + 0.5) * angleToRadians(90 - 30))
      orbitControlsRef.current.update();
    }
  })

  // Animation
  useEffect(() => {
    if(!!ballRef.current) {
      console.log(ballRef.current)

      // const timeline = gsap.timeline()

      // x-axis motion
      gsap.to(ballRef.current.position, {
        x: 2,
        duration: 2,
        ease: Power2.easeOut
      })

      // y-axis motion
      gsap.to(ballRef.current.position, {
        y: 0.5,
        duration: 1,
        ease: Bounce.easeOut
      })

    }
  }, [ballRef.current])

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

      {/* Ball */}
      <mesh position={[-2, 2.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]}  />
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