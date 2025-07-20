"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Code, Palette, Rocket } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProfile = () => {
    const profileSection = document.getElementById("profile-section")
    profileSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg rotate-45 opacity-20" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-30" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float-slow">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl rotate-12 opacity-25" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg -rotate-45 opacity-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-6 animate-fade-in-up">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-4 py-2 text-sm font-medium">
              👋 Welcome to my digital space
            </Badge>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Creating Digital
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </h1>

          {/* Dynamic role text */}
          <div className="mb-8 animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              I'm a{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  {roles[currentRole]}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse block" />
              </span>
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Passionate about crafting beautiful, functional, and user-centered digital solutions that make a
              difference in people's lives.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-600">
            <div className="flex items-center gap-2 text-blue-300">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Clean Code</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300">
              <Palette className="w-5 h-5" />
              <span className="text-sm font-medium">Beautiful Design</span>
            </div>
            <div className="flex items-center gap-2 text-sky-300">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-medium">Fast Performance</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-800">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProfile}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 bg-transparent px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce cursor-pointer" onClick={scrollToProfile}>
            <ChevronDown className="w-8 h-8 text-blue-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
