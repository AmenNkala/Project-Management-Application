export default function Input({ type, name, id }) {
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label
        htmlFor={id}
        className='text-sm font-bold uppercase text-stone-500'
      >
        {name}
      </label>
      {type === "textarea" ? (
        <textarea
          className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
          id={id}
          name={name}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
        />
      )}
    </p>
  );
}
