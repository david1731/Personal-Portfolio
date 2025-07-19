"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { profileData } from "@/lib/data"
import { useState } from "react"

export function ProfileSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="profile-section" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl animate-pulse" />
      <Card className="relative bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 transform hover:scale-[1.02]">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 animate-pulse">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt={profileData.name}
                  className="w-full h-full rounded-full object-cover bg-slate-700 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-800 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-fade-in-up">{profileData.name}</h1>
              <p className="text-xl text-blue-300 mb-4 animate-fade-in-up delay-100">{profileData.title}</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-4 animate-fade-in-up delay-200">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{profileData.location}</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-2xl animate-fade-in-up delay-300">{profileData.bio}</p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start animate-fade-in-up delay-400">
                {profileData.skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`bg-blue-500/20 text-blue-300 border-blue-500/30 cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                      hoveredSkill === skill ? "bg-blue-500/40 shadow-lg shadow-blue-500/25" : ""
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up delay-500">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
