// // src/components/AvatarPlayer.jsx
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { OVR_VISEMES } from "../lib/vicemeMap";

// function AvatarModel({ visemeIndex = 0, visemeValue = 0 }) {
//   const ref = useRef();
//   const { scene } = useGLTF("/avatars/avatar_model.glb");

//   // Apply your exact stable transform settings:
//   scene.position.set(0, -2.5, 0);       // YOUR POSITION
//   scene.scale.set(1.8, 1.8, 1.8);        // YOUR SCALE
//   scene.rotation.set(0, 3.14, 0);        // YOUR ROTATION (face camera)

//   // Find skinned mesh for lip sync
//   let skinnedMesh = null;
//   scene.traverse((obj) => {
//     if (obj.isSkinnedMesh) skinnedMesh = obj;
//   });

//   // Lip sync update loop
//   useFrame(() => {
//     if (!skinnedMesh?.morphTargetDictionary) return;

//     const dict = skinnedMesh.morphTargetDictionary;
//     const influences = skinnedMesh.morphTargetInfluences;

//     // Reset all
//     OVR_VISEMES.forEach(name => {
//       if (dict[name] !== undefined) influences[dict[name]] = 0;
//     });

//     // Apply selected viseme
//     const vName = OVR_VISEMES[visemeIndex];
//     if (dict[vName] !== undefined) {
//       influences[dict[vName]] = visemeValue;
//     }
//   });

//   return <primitive object={scene} ref={ref} />;
// }

// export default function AvatarPlayer({ visemeIndex = 0, visemeValue = 0 }) {
//   return (
//     <div className="w-full h-[480px] rounded-xl overflow-hidden bg-black/20">
//       <Canvas
//         dpr={[1, 2]}
//         camera={{
//           position: [-0.17, 1.05, -4.73], // YOUR FIXED CAMERA POSITION
//           fov: 22,                       // small FOV for portrait framing
//         }}
//       >
//         {/* Lighting */}
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 3, 2]} intensity={1.3} />

//         {/* Avatar */}
//         <AvatarModel visemeIndex={visemeIndex} visemeValue={visemeValue} />
//       </Canvas>
//     </div>
//   );
// }
// src/components/AvatarPlayer.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { OVR_VISEMES } from "../lib/vicemeMap";

function AvatarModel({ visemeIndex = 0, visemeValue = 0 }) {
  const ref = useRef();
  const { scene } = useGLTF("/avatars/avatar_model.glb");

  // Avatar transform (UPDATED Y POSITION)
  scene.position.set(0, -2.5, 0);     // <-- CHANGED from -1.5 to -2.5
  scene.scale.set(1.8, 1.8, 1.8);
  scene.rotation.set(0, 3.14, 0);

  // find skinned mesh
  let skinnedMesh = null;
  scene.traverse((obj) => {
    if (obj.isSkinnedMesh) skinnedMesh = obj;
  });

  useFrame(() => {
    if (!skinnedMesh || !skinnedMesh.morphTargetDictionary) return;

    const dict = skinnedMesh.morphTargetDictionary;
    const infl = skinnedMesh.morphTargetInfluences;

    // reset all visemes
    OVR_VISEMES.forEach((name) => {
      if (dict[name] !== undefined) infl[dict[name]] = 0;
    });

    // apply the current viseme
    const v = OVR_VISEMES[visemeIndex];
    if (dict[v] !== undefined) infl[dict[v]] = visemeValue;
  });

  return <primitive object={scene} ref={ref} />;
}

export default function AvatarPlayer({ visemeIndex = 0, visemeValue = 0 }) {
  return (
    <div className="w-full h-[480px] rounded-xl overflow-hidden bg-black/30">
      <Canvas
        camera={{
          position: [-0.17, 1.05, -4.73], // your fixed camera position
          fov: 22,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />

        {/* Avatar */}
        <AvatarModel visemeIndex={visemeIndex} visemeValue={visemeValue} />

        {/* Keep camera still */}
        {/* <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
