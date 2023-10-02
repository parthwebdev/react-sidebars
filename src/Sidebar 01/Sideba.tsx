import { ChevronFirst, ChevronLast } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { additionalLinks, mainLinks } from "./Links";
import Logo from "../assets/Logo1.png";
import { useState } from "react";

function Sideba() {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          >
            <img src={Logo} alt="Untitled UI" className="w-8 h-8" />
            <h2 className="text-lg text-white font-bold">Untitled UI</h2>
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 text-gray-100 rounded-lg bg-accent-light hover:bg-accent-light"
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
        </div>

        {/* <div className="flex-1"> */}
        <ul className="py-3 border-b border-[hsl(217,20%,45%)] border-opacity-30">
          {mainLinks.map((link) => (
            <SidebarItem key={link.id} link={link} expanded={expanded} />
          ))}
        </ul>

        <ul className={`py-3`}>
          {additionalLinks.map((link) => (
            <SidebarItem key={link.id} link={link} expanded={expanded} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
export default Sideba;
