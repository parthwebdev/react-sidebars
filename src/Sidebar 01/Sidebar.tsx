import { useState } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";

import Logo from "../assets/Logo.png";
import { additionalLinks, mainLinks } from "./Links";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [active, setActive] = useState<number>(mainLinks[0].id);

  return (
    <aside className="h-screen w-max px-4 py-6 bg-[hsl(217,38%,11%)] flex flex-col justify-between items-center">
      <div className="flex flex-col gap-4 items-center">
        <div
          className={`flex items-center justify-between transition-all ${
            expanded ? "w-full" : "w-auto"
          }`}
        >
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          >
            <img src={Logo} alt="Untitled UI" className="w-8 h-8" />
            <h2 className="text-lg text-white font-bold line-clamp-1">
              Untitled UI
            </h2>
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 text-gray-100 rounded-lg bg-accent-light hover:bg-accent-lighter"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="py-3 border-b border-[hsl(217,20%,45%)] border-opacity-30">
          {mainLinks.map((link) => (
            <SidebarItem
              key={link.id}
              link={link}
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>

        <ul className={`py-3`}>
          {additionalLinks.map((link) => (
            <SidebarItem
              key={link.id}
              link={link}
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
