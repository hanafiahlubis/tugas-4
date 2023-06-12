import "./Tombol.css";
export default function Tombol({ children, onClick, className }) {
  //   console.log(aaa);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
