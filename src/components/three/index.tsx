const Three = () => {
  return (
    <>
      {/* Ball */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Abmient light */}
      <ambientLight args={["#ffffff", 1.5]} />
    </>
  )
}

export default Three