import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profileData } from "@/lib/data"

export function ProfileSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
      <Card className="relative bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt={profileData.name}
                  className="w-full h-full rounded-full object-cover bg-slate-700"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800" />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{profileData.name}</h1>
              <p className="text-xl text-purple-300 mb-4">{profileData.title}</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-2xl">{profileData.bio}</p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                {profileData.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
