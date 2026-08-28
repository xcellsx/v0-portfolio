export type UiUxResearchColumn = {
  label: string
  items: readonly string[]
}

export type UiUxJourneyStage = {
  index: string
  stage: string
  emotion: string
  user: string
  product: string
}

export type UiUxIntervention = {
  title: string
  description: string
}

export type UiUxCaseStudyData = {
  title: string
  subtitle: string
  eyebrow: string
  confidentiality?: string
  live?: {
    url?: string
    figmaUrl?: string
    note?: string
  }
  problem: {
    headline: string
    summary: string
    detail?: string
  }
  outcome: {
    headline: string
    summary: string
    metrics: readonly string[]
  }
  breakdown: readonly { metric: string; specification: string }[]
  research: {
    headline: string
    summary: string
    methods: readonly UiUxResearchColumn[]
    lesson: string
  }
  journey: {
    label: string
    headline: string
    summary: string
    stages: readonly UiUxJourneyStage[]
  }
  hifi: {
    headline: string
    summary: string
    withheld?: string
    preview?: {
      src: string
      alt: string
      width: number
      height: number
    }
    interventions: readonly UiUxIntervention[]
  }
}
