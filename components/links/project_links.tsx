import React from "react";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react"

interface ProjectLinkProps {
	code: string;
	live: string;
	is_private?: boolean;
}

export default function ProjectLinks({ code, live }: ProjectLinkProps) {
	return (
		<>
			<div className="flex gap-2">
				<a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
				>
					<Button
						size="sm"
						variant="outline"
						className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent transform hover:scale-105 transition-all duration-300"
					>
						<Github className="w-4 h-4 mr-1" />
						Code
					</Button>
				</a>

				<a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
				>
					<Button
						size="sm"
						className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
					>
						<ExternalLink className="w-4 h-4 mr-1" />
						Live
					</Button>
				</a>	
			</div>
		</>
	)
}