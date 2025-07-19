"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Eye } from "lucide-react"
import { projectsData } from "@/lib/data"
import { useState } from "react"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Featured Projects</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
          A showcase of my recent work, from concept to deployment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className={`bg-slate-800/50 border-blue-500/20 backdrop-blur-sm transition-all duration-500 group transform hover:scale-105 ${
              hoveredProject === index ? "bg-slate-800/70 shadow-2xl shadow-blue-500/20" : ""
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="pb-4 relative">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src={project.image || "/placeholder.svg?height=200&width=400"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-300 border-yellow-500/30 animate-pulse">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-500/80 hover:bg-blue-500 backdrop-blur-sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardTitle className="text-xl text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </CardTitle>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {project.description}
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 text-xs hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 150 + techIndex * 50}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </div>

                {project.status && (
                  <Badge
                    variant="outline"
                    className={`text-xs transition-all duration-300 ${
                      project.status === "Completed"
                        ? "border-green-400/30 text-green-400 hover:bg-green-400/10"
                        : "border-orange-400/30 text-orange-400 hover:bg-orange-400/10"
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
