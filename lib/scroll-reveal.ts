export function fadeInFromTopClass(visible: boolean, duration = "duration-[900ms]") {
  return `transition-all ${duration} ease-out ${
    visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
  }`
}

export function fadeDelayStyle(delayMs: number): { transitionDelay: string } {
  return { transitionDelay: `${delayMs}ms` }
}
