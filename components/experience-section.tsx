"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
import { experienceData } from "@/lib/data"
import { useState } from "react"

export function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Professional Journey</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
          A timeline of my professional growth and the impact I've made along the way
        </p>
      </div>

      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <Card
            key={index}
            className={`bg-slate-800/50 border-blue-500/20 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02] ${
              hoveredCard === index ? "bg-slate-800/70 shadow-2xl shadow-blue-500/10" : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader className="relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg" />
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white mb-2 flex items-center gap-2">
                    {experience.position}
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-400">
                    <span className="text-blue-300 font-semibold text-lg">{experience.company}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-sky-400" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 w-fit animate-pulse"
                >
                  {experience.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4 leading-relaxed">{experience.description}</p>
              <div className="space-y-3">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div
                    key={achievementIndex}
                    className="flex items-start gap-3 group"
                    style={{ animationDelay: `${index * 200 + achievementIndex * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-blue-500/30 text-blue-400 text-xs hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 200 + techIndex * 50}ms` }}
                  >
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
