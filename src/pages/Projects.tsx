import { Card } from '../components';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl text-dark">projects</h1>
        <p className="text-brown max-w-2xl">
          A mix of music tools, automation scripts, and things I built because I needed them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} hover>
            <div className="space-y-3">
              <h2 className="text-xl text-dark">{project.name}</h2>
              <p className="text-brown text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-sage/30 text-dark rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brown hover:text-dark border-b border-transparent hover:border-dark transition-all"
                  >
                    github →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brown hover:text-dark border-b border-transparent hover:border-dark transition-all"
                  >
                    live →
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
