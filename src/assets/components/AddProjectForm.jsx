import { useRef } from "react";

import Button from "./Button";
import Input from "./Input";
const FORM_INPUTS = [
  { type: "text", name: "title", id: "title" },
  { type: "textarea", name: "description", id: "description" },
  { type: "date", name: "due date", id: "dueDate" },
];

export default function AddProjectFormModal({ handleCancel, onSave }) {
  const form = useRef();
  function handleSave() {
    const formData = new FormData(form.current);
    const project = Object.fromEntries(formData.entries());
    onSave({ ...project, tasks: [] });
  }
  return (
    <div className='mt-24 w-full pr-48 pl-10'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <Button handleClick={handleCancel}>Cancel</Button>
        <Button
          className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
          handleClick={handleSave}
        >
          Save
        </Button>
      </menu>
      <form ref={form} className='mt-4 text-left'>
        {FORM_INPUTS.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            name={input.name}
            id={input.id}
          />
        ))}
      </form>
    </div>
  );
}
