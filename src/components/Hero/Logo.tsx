export function Logo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center rounded-full mt-2">
      <div className="w-full h-full rounded-full overflow-hidden"> 
        <img
          src="/DBHLOGO.png"
          alt="DBH Logo"
          className="w-full h-full object-cover" 
        />
      </div>
      <span className="text-white text-sm mt-2 font-light tracking-wider">
      </span>
    </div>
  );
}
