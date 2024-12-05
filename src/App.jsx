import { useState } from "react";
import AddProjectForm from "./assets/components/AddProjectForm";
import Splash from "./assets/components/Splash";
import Aside from "./assets/components/Aside";

const PROJECTS = [];
function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function onSave(project) {
    setProjects([...projects, project]);
    setIsAddingProject(false);
  }
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <Aside
        projects={projects}
        handleAddingProject={() => setIsAddingProject(true)}
      />
      <main className='flex-1 h-screen my-8 flex gap-8'>
        {isAddingProject && (
          <AddProjectForm
            handleCancel={() => setIsAddingProject(false)}
            onSave={onSave}
          />
        )}
        {!isAddingProject && (
          <Splash handleAddingProject={() => setIsAddingProject(true)} />
        )}
      </main>
    </div>
  );
}

export default App;
