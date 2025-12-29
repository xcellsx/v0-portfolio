"use client"

import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Html, Bounds, useBounds } from "@react-three/drei"
import { useTheme } from "./theme-provider"

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath)
  const bounds = useBounds()
  
  useEffect(() => {
    bounds.refresh(scene).fit()
  }, [scene, bounds])

  return <primitive object={scene} />
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="text-xs text-muted-foreground">Loading...</div>
    </Html>
  )
}

function ModelViewer({ modelPath, className }: { modelPath: string; className?: string }) {
  const { theme } = useTheme()

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<LoadingFallback />}>
          <Bounds fit clip observe margin={0.9}>
            <Model modelPath={modelPath} />
          </Bounds>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Environment preset={theme === "dark" ? "night" : "sunset"} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export { ModelViewer }
