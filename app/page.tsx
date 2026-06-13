import { ContactSection } from "@/components/contact-section"
import { Landing } from "@/components/landing"
import { SelectedProjects } from "@/components/selected-projects"
import { TechnicalSkills } from "@/components/technical-skills"

export default function Page() {
  return (
    <>
      <Landing />
      <SelectedProjects />
      <TechnicalSkills />
      <ContactSection />
    </>
  )
}
