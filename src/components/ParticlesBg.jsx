// src/components/ParticlesBg.jsx
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 40 },
          color: { value: "#ffffff" },
          opacity: { value: 0.15 },
          size: { value: 2 },
          move: { speed: 0.6 },
        },
      }}
    />
  );
}
