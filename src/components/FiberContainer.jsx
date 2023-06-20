import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer() {
  return (
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 5 }} shadows>
      <Scene />
      <OrbitControls minDistance={50} maxDistance={30} />
    </Canvas>
  );
}