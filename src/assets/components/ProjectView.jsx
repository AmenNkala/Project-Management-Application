import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function ProjectView({
  project,
  deleteProject,
  updateProjectTasks,
  deleteProjectTask,
}) {
  const taskRef = useRef();

  function addTask() {
    const newTask = taskRef.current.value;

    if (newTask) {
      updateProjectTasks(project, newTask);
      taskRef.current.value = "";
    }
  }

  function deleteTask(index) {
    project.tasks.splice(index, 1);
    deleteProjectTask(project, project.tasks);
  }
  return (
    <div className='w-[35rem] mt-16 ml-10'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {project.title}
          </h1>
          <Button
            className='text-stone-600 hover:text-stone-950'
            handleClick={() => deleteProject(project)}
          >
            Delete
          </Button>
        </div>
        <p className='mb-4 text-stone-400'>{project["due date"]}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>
          {project.description}
        </p>
      </header>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>

      <span>
        <Input
          inputClassName='w-64 px-2 py-1 mr-6 rounded-sm bg-stone-200'
          withLabel={false}
          type='text'
          name='task'
          id='task'
          ref={taskRef}
        />
        <Button
          className='text-stone-700 hover:text-red-500'
          handleClick={addTask}
        >
          Add Task
        </Button>
      </span>
      {project.tasks.length <= 0 ? (
        <p className='text-stone-800 my-4'>
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {project.tasks.map((task, index) => (
            <li key={index} className='flex justify-between my-4'>
              {task}{" "}
              <Button
                className='text-stone-700 hover:text-red-500'
                handleClick={() => deleteTask(index)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
