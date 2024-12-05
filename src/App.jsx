import { useState } from "react";
import AddProjectForm from "./assets/components/AddProjectForm";
import Splash from "./assets/components/Splash";
import Aside from "./assets/components/Aside";

const PROJECTS = [];
function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  function handleAddingProject() {
    setIsAddingProject(true);
  }

  function handleAddProject(project) {
    PROJECTS.push(project);
    setIsAddingProject(false);
  }
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <Aside handleAddingProject={handleAddingProject} />
      <main className='flex-1 h-screen my-8 flex gap-8'>
        {isAddingProject && (
          <AddProjectForm
            handleCancel={() => setIsAddingProject(false)}
            onSave={handleAddProject}
          />
        )}
        {!isAddingProject && (
          <Splash handleAddingProject={handleAddingProject} />
        )}
      </main>
    </div>
  );
}

export default App;
