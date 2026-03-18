import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Canvas3D(){
  return(
    <Canvas>
      <ambientLight intensity={1}/>
      <mesh>
        <sphereGeometry args={[2,32,32]} />
        <meshStandardMaterial color="blue"/>
      </mesh>
      <OrbitControls/>
    </Canvas>
  )
}