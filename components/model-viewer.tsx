"use client"

import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Bounds, useBounds } from "@react-three/drei"
import { useTheme } from "./theme-provider"

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath)
  const bounds = useBounds()

  useEffect(() => {
    bounds.refresh(scene).fit()
  }, [scene, bounds])

  return <primitive object={scene} />
}

function ViewportSkeleton({ label = "Loading mesh…" }: { label?: string }) {
  return (
    <div className="viewport-skeleton h-full min-h-[12rem]">
      <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
        [ {label} ]
      </p>
    </div>
  )
}

function ModelViewer({
  modelPath,
  className,
  scrollFriendly = false,
}: {
  modelPath: string
  className?: string
  scrollFriendly?: boolean
}) {
  const { theme } = useTheme()
  const [orbitEnabled, setOrbitEnabled] = useState(false)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)")
    setIsCoarsePointer(query.matches)
    const onChange = (event: MediaQueryListEvent) => setIsCoarsePointer(event.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const needsTapToOrbit = scrollFriendly && isCoarsePointer
  const canOrbit = !needsTapToOrbit || orbitEnabled

  return (
    <div className={`relative min-h-[12rem] ${className ?? ""}`}>
      <div
        className="h-full w-full"
        style={{ touchAction: scrollFriendly ? "pan-y" : "none" }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={0.9}>
              <Model modelPath={modelPath} />
            </Bounds>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={canOrbit}
              autoRotate={canOrbit}
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
            <Environment preset={theme === "dark" ? "night" : "sunset"} />
          </Suspense>
        </Canvas>
      </div>

      {needsTapToOrbit && !orbitEnabled ? (
        <button
          type="button"
          onClick={() => setOrbitEnabled(true)}
          className="absolute inset-0 flex items-end justify-center bg-transparent p-4"
          aria-label="Enable 3D model inspection"
        >
          <span className="border border-offblack/20 bg-offwhite/90 px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-offblack uppercase backdrop-blur-sm">
            [ Tap to Inspect ]
          </span>
        </button>
      ) : null}
    </div>
  )
}

export { ModelViewer, ViewportSkeleton }
