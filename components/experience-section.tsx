import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { experienceData } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
          >
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white mb-2">{experience.position}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-400">
                    <span className="text-purple-300 font-semibold">{experience.company}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit">
                  {experience.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">{experience.description}</p>
              <div className="space-y-2">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-400 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
