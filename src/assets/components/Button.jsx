export default function Button({ handleClick, children, ...props }) {
  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
