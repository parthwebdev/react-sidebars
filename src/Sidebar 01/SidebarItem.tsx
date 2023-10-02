import { mainLinks } from "./Links";

interface Props {
  link: (typeof mainLinks)[number];
  expanded: boolean;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

function SidebarItem({ link, expanded, active, setActive }: Props) {
  return (
    <li
      className={`flex p-3 my-1 items-center gap-3
      text-gray-100 font-medium rounded-md cursor-pointer
      hover:bg-accent-light transition-all
      ${expanded ? "w-56" : "w-auto"}
      ${active === link.id ? "bg-indigo-600 hover:bg-indigo-600" : ""}
    `}
      onClick={() => setActive(link.id)}
    >
      {link.icon}
      <span className={`${expanded ? "block" : "hidden"} transition-all`}>
        {link.label}
      </span>
    </li>
  );
}

export default SidebarItem;
