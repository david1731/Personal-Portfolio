import { ProfileSection } from "@/components/profile-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 space-y-16">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  )
}
