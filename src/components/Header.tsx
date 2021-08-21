import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="w-full max-w-7xl m-auto px-4 py-8 flex flex-row justify-between">
      <div className="font-bold text-2xl">
        <Link to="/Overview">E.S.C </Link>
      </div>
      <div className="">
        {menus.map((menu) => {
          return (
            <Link className="pr-8" to={menu.link}>
              {menu.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row">
        <button className="pr-4">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>
      </div>
    </div>
  );
};
