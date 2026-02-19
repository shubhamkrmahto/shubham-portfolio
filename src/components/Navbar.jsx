export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">
          SKM
        </h1>

        <div className="space-x-8 text-gray-600 font-medium hidden md:flex">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#skills" className="hover:text-black transition">Skills</a>
          <a href="#projects" className="hover:text-black transition">Projects</a>
        </div>
      </div>
    </nav>
  );
}
