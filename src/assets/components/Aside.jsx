import Button from "./Button";

export default function Aside({ handleAddingProject }) {
  return (
    <aside className='w-1/3 mt-8 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-lg'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your projects
      </h2>
      <Button
        className='px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950'
        handleClick={handleAddingProject}
      >
        + Add Project
      </Button>
    </aside>
  );
}
