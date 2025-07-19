import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import { projectsData } from "@/lib/data"

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
          >
            <CardHeader className="pb-4">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
              <p className="text-slate-400 text-sm">{project.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </div>

                {project.status && (
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      project.status === "Completed"
                        ? "border-green-500/30 text-green-400"
                        : "border-orange-500/30 text-orange-400"
                    }`}
                  >
                    {project.status}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
