import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { ProjectStory } from "./ProjectStory";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="What I've built"
      description="Real work — a solo Next.js build, the technical operations of a live dealership platform, an academic embedded-systems project, and what's next."
    >
      <div>
        {projects.map((project, index) => (
          <ProjectStory key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
