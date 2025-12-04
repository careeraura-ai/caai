import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function AvatarDebugViewer() {
  const [camPos, setCamPos] = useState([0, 0, 0]);

  return (
    <div className="w-full h-[600px] bg-black/40 rounded-xl relative">
      {/* Display values on screen */}
      <div className="absolute top-3 left-3 bg-black/60 text-white p-3 rounded text-sm z-20">
        <div><b>Camera Position:</b> {camPos.map(n => n.toFixed(2)).join(", ")}</div>
        <div><b>Avatar Position:</b> 0, -1.5, 0</div>
        <div><b>Avatar Scale:</b> 1.8, 1.8, 1.8</div>
        <div><b>Avatar Rotation:</b> 0, 3.14, 0</div>
      </div>

      <Canvas
        camera={{ position: [0, 1.7, 2.5], fov: 25 }}
      >
        <SceneTracker onCameraMove={setCamPos} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <AvatarModel />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}

function SceneTracker({ onCameraMove }) {
  const { camera } = useThree();
  useFrame(() => {
    onCameraMove([camera.position.x, camera.position.y, camera.position.z]);
  });
  return null;
}

function AvatarModel() {
  const ref = useRef();
  const { scene } = useGLTF("/avatars/avatar_model.glb");

  // Default pose for debugging
  scene.rotation.set(0, Math.PI, 0);   // face camera
  scene.position.set(0, -1.5, 0);      // lift torso
  scene.scale.set(1.8, 1.8, 1.8);      // bigger view

  return <primitive ref={ref} object={scene} />;
}
