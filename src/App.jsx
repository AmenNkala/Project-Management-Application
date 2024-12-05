import { useState } from "react";
import AddProjectForm from "./assets/components/AddProjectForm";
import Splash from "./assets/components/Splash";
import Aside from "./assets/components/Aside";
import ProjectView from "./assets/components/ProjectView";

/* const PROJECTS = [
  {
    title: "Learn React",
    description: `Learning something new doesn't have to be very different. If you have a map or guide that lets you know "if you first learn A, next attempt to learn B. Then you will find C much easier", things will be much smoother for you.

In this guide, we will break things down into phases and build the roadmap to learn ReactJS. You will also find resources to look into (optionally) as we explore the roadmap further.`,
    "due date": "2024-12-05",
    tasks: [],
  },
  {
    title: "Master React",
    description: `It may also help you decide on alternative routes, how far to go at a stretch, and when to pause.`,
    "due date": "2025-03-30",
    tasks: ["Learn the basisc", "Move to advanced", "Recap router"],
  },
]; */
function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function onSave(project) {
    setProjects([...projects, project]);
    setIsAddingProject(false);
    setSelectedProject(null);
  }

  function selectProject(project) {
    setSelectedProject(project);
  }

  function updateProjectTasks(project, newTask) {
    const updatedProject = {
      ...project,
      tasks: [...project.tasks, newTask],
    };
    setProjects(
      projects.map((p) => (p.title === project.title ? updatedProject : p))
    );
    setSelectedProject(updatedProject);
  }

  function handleAddingProject() {
    setIsAddingProject(true);
    setSelectedProject(null);
  }

  function handleDeleteProject(project) {
    setProjects(projects.filter((p) => p.title !== project.title));
    setSelectedProject(null);
  }

  function handleDeleteProjectTask(project, updatedTasks) {
    const updatedProject = {
      ...project,
      tasks: [...updatedTasks],
    };
    setProjects(
      projects.map((p) => (p.title === project.title ? updatedProject : p))
    );
    setSelectedProject(updatedProject);
  }

  return (
    <div className='flex h-screen overflow-y-hidden'>
      <Aside
        projects={projects}
        handleAddingProject={handleAddingProject}
        onSelectProject={selectProject}
      />
      <main className='flex-1 h-screen my-8 flex gap-8'>
        {!isAddingProject && selectedProject ? (
          <ProjectView
            project={selectedProject}
            deleteProject={handleDeleteProject}
            updateProjectTasks={updateProjectTasks}
            deleteProjectTask={handleDeleteProjectTask}
          />
        ) : isAddingProject && !selectedProject ? (
          <AddProjectForm
            handleCancel={() => setIsAddingProject(false)}
            onSave={onSave}
          />
        ) : (
          <Splash handleAddingProject={handleAddingProject} />
        )}
      </main>
    </div>
  );
}

export default App;
