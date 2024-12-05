import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    type,
    name,
    id,
    withLabel = true,
    inputClassName = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600",
  },
  ref
) {
  return (
    <>
      {withLabel && (
        <label
          htmlFor={id}
          className='text-sm font-bold uppercase text-stone-500'
        >
          {name}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          ref={ref}
          className={inputClassName}
          id={id}
          name={name}
        ></textarea>
      ) : (
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          className={inputClassName}
        />
      )}
    </>
  );
});

export default Input;
