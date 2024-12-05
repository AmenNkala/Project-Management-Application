import Button from "./assets/components/Button";
import logo from "./assets/logo.png";
function App() {
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <aside className='w-1/3 mt-8 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-lg'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
          Your projects
        </h2>
        <Button
          className='px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950'
          handleClick={() => 0}
        >
          + Add Project
        </Button>
      </aside>
      <main className='flex-1 h-screen my-8 flex gap-8'>
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
            handleClick={() => 0}
          >
            Create New Project
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
