import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IMenuItem {
  name: string;
  link: string;
}

const menus: IMenuItem[] = [
  {
    name: "Overview",
    link: "/Overview",
  },
  {
    name: "About us",
    link: "/AboutUs",
  },
  {
    name: "Applying",
    link: "/Applying",
  },
  {
    name: "Volunteering",
    link: "/Volunteering",
  },
];

export const Header = () => {
  return (
    <div className="fixed h-16 sm:h-24 top-0 w-full bg-white z-10 flex items-center">
      <div className="w-full max-w-7xl m-auto px-4 flex flex-row justify-between items-center">
        <div className="hidden sm:block font-bold text-2xl">
          <Link to="/Overview">E.S.C </Link>
        </div>
        <button className="block sm:hidden">
          <FontAwesomeIcon icon={faListAlt} size="lg" />
        </button>
        <div className="flex-grow block sm:hidden font-bold text-base text-center">
          E.S.C (Education Sharing Club)
        </div>
        <div className="hidden sm:block mx-4">
          {menus.map((menu) => {
            return (
              <Link
                className="text-sm md:text-base pr-2 md:pr-8"
                to={menu.link}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row">
          <button>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
          <button className="pl-4 hidden sm:block">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};
