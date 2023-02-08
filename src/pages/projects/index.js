import { getProjects } from "lib/projects";
import Link from "next/link";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects
    }
  }
};

const Projects = () => {
  return (
    <main>
      <h2>Projects page</h2>
      <Link href={'/projects/work-1'}>Project 1</Link>
      <Link href={'/projects/work-2'}>Project 2</Link>
      <Link href={'/projects/work-3'}>Project 3</Link>
    </main>
  )
};

export default Projects;