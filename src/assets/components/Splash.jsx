import logo from "../../assets/logo.png";
import Button from "./Button";

export default function Splash({ handleAddingProject }) {
  return (
    <div className='mt-24 text-center w-full'>
      <img
        src={logo}
        alt='a logo showing pen on a notebook'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-700 my-4'>
        No projects selected
      </h2>
      <p className='text-stone-600 mb-8'>
        Select project or get started with a new one
      </p>
      <Button
        className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-auto'
        handleClick={handleAddingProject}
      >
        Create New Project
      </Button>
    </div>
  );
}
