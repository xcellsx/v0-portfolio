export const cayraSpecMatrix = [
  {
    metric: "Project Identity",
    specification: "Cayra — Toolless BetaFPV Airframe Redesign",
  },
  {
    metric: "Core Paradigm",
    specification: "Friction-Lock Modular Drone Chassis for Field Repairability",
  },
  {
    metric: "Role & Execution",
    specification: "Mechanical Design, CAD Modeling, Rapid Prototyping, Flight Validation",
  },
  {
    metric: "Core Stack",
    specification: "Fusion 360, BetaFPV Reference Frame, FDM Print Iteration",
  },
  {
    metric: "Timeline",
    specification: "Self-Directed Build — 2025",
  },
] as const

export const cayraHeroVideo =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/fBRjhH_ADBBsBKky_4CkLU/public/images/cayra/final.mp4"

export const cayraContext = {
  indexLabel: "[ 01 / The Maintenance Bottleneck ]",
  headline: "Engineering the Toolless Frame.",
  quote:
    "The standard BetaFPV drone architecture is heavily reliant on micro-fasteners. A simple motor replacement requires removing 12+ screws, creating a maintenance bottleneck that creates significant downtime. The design challenge was to reimagine the airframe assembly to be completely toolless without sacrificing structural rigidity. To democratize repairability, the chassis was re-engineered to utilize a central compression lock system — allowing structural arms to be detached and swapped instantly by hand.",
} as const

export const cayraMethodology = [
  {
    title: "Problem Identification",
    description: "Analyzing the OEM BetaFPV frame to isolate maintenance pain points",
  },
  {
    title: "Redesign Ideation",
    description: "Sketching and modeling alternative locking mechanisms in Fusion 360",
  },
  {
    title: "Iterating Design",
    description: "Refining geometry based on weight constraints and printability",
  },
  {
    title: "Flight Validation",
    description: "Live testing the chassis to ensure aerodynamics and vibration dampening",
  },
] as const

export const cayraEvolution = [
  {
    title: "[ Phase 01 // Baseline Analysis ]",
    src: "/images/cayra/problem.png",
    width: 1200,
    height: 750,
    quote:
      "Baseline Analysis. The OEM frame required high-precision tools for disassembly. Small screws were easily lost in field conditions, making rapid repair impossible.",
  },
  {
    title: "[ Phase 02 // V1 Weight Failure ]",
    src: "/images/cayra/weight-fail.png",
    width: 1200,
    height: 750,
    quote:
      "First Toolless Concept. Modularity was achieved using thick snap-fit mechanisms. However, the added material mass exceeded the motor thrust capacity, preventing successful lift-off.",
  },
  {
    title: "[ Phase 03 // V2 Flight Failure ]",
    src: "/images/cayra/flight-fail.png",
    width: 1200,
    height: 750,
    quote:
      "Weight Optimization. Wall thickness was reduced to minimize mass. This modification introduced structural flex, resulting in severe harmonic vibration and flight instability during testing.",
  },
] as const

export const cayraPrototype = [
  {
    title: "[ Assembly 01 // Final Configuration ]",
    src: "/images/cayra/final.png",
    width: 1200,
    height: 900,
    quote:
      "The definitive toolless configuration. A fully integrated system that resolves previous weight and stability failure modes through a unified friction-lock architecture.",
  },
  {
    title: "[ Assembly 02 // Airframe Architecture ]",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/_NyxCoBtrc_VzNaz9hafs1/public/images/cayra/dronebody.mp4",
    width: 1200,
    height: 900,
    quote:
      "Optimized X-Frame geometry. Retains the aerodynamic profile of the OEM chassis while integrating a custom pin-and-socket interface for rapid battery module swapping.",
  },
  {
    title: "[ Assembly 03 // Payload Integration ]",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/SdqEKL2xYYaAZT-mz8T6s2/public/images/cayra/camera.mp4",
    width: 1200,
    height: 900,
    quote:
      "Sensor housing. Features a custom twist-lock mechanism engineered to secure the optical sensor without hardware, ensuring zero-play alignment during flight.",
  },
  {
    title: "[ Assembly 04 // Energy Retention ]",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/tsQNly0WFVZsIdftL_SMhN/public/images/cayra/battholder.mp4",
    width: 1200,
    height: 900,
    quote:
      "Topology-optimized chassis. Engineered with minimal material volume to reduce mass, while maintaining the structural rigidity required to support the power cell under high-G loads.",
  },
] as const
