import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react"
import { ProfileLink } from "@/lib/data";

interface LinkProps {
  links: ProfileLink[]
}

export default function ProfileLinks({ links }: LinkProps) {
  const styles = {
    linkedin: "border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300",
    github: "border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300",
    contactme: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
  }

  const getIcon = (context: string) => {
    switch (context) {
      case "linkedin":
        return <Linkedin/>

      case "github":
        return <Github/>

      case "contactme":
        return <Mail/>
    }
  }

  const getContextTitle = (context: string) => {
    switch (context) {
      case "linkedin":
        return "LinkedIn"

      case "github":
        return "Github"

      case "contactme":
        return "Contact Me"
    }
  }

  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant={link.context !== "contactme" ? "outline": "default"}
            className={styles[link.context]}
          >
          {getContextTitle(link.context)}
          {getIcon(link.context)}
          </Button>
        </a>
      ))}
    </>
  )

}