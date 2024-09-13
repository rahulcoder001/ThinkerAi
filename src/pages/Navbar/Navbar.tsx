import './navbar.css';

export function Navbar() {
  return (
    <nav className=" text-black ">
      <div className=" bg-slate-100 p-2 flex justify-between  px-8">
        <p className="font-extrabold text-xl nav-logo">THINKER.AI</p>
        
        <ul className="flex nav-items">
          <li className="px-4 font-semibold">Home</li>
          <li className="px-4 font-semibold">About</li>
          <li className="px-4 font-semibold">Teachers</li>
          <li className="px-4 font-semibold">Courses</li>
          <li className="px-4 font-semibold">Career</li>
        </ul>
        
        <button className="p-2 text-sm rounded-2xl font-bold bg-gray-600 bg-opacity-10 nav-button">Join Now</button>
      </div>
    </nav>
  );
}
