export default function Dot({ className = "" }) {
  return (
    <div
      className={`absolute w-[260px] h-[300px] left-[-30px] bottom-[-240px] rotate-[112deg] ${className}`}
      style={{
        background: "radial-gradient(circle at center, #ff5722 10%, transparent 20%, transparent)",
        backgroundSize: "19px 18px",
      }}
    ></div>
  )
}
