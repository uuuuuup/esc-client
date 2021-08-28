import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isSignedVar } from "../apollo";

interface IMenuItem {
  name: string;
  link: string;
}

const menus: IMenuItem[] = [
  {
    name: "Overview",
    link: "/overview",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Applying",
    link: "/applying",
  },
  {
    name: "Volunteering",
    link: "/volunteering",
  },
];

export const Header = () => {
  const history = useHistory();
  const isSigned = useReactiveVar(isSignedVar);
  console.log(isSigned);

  const createMenu = () => {
    return menus.map((menu) => {
      return (
        <Link className="text-sm md:text-base" to={menu.link} key={menu.name}>
          {menu.name}
        </Link>
      );
    });
  };

  return (
    <div className="sticky h-20 sm:h-24 top-0 w-full bg-white z-10 flex flex-col">
      <div className="w-full max-w-7xl h-full m-auto px-4 flex items-center">
        <div className="flex-shrink-0 hidden sm:block font-bold text-2xl">
          <Link to="/Overview">E.S.C </Link>
        </div>
        <div className="flex-grow hidden sm:flex sm:justify-evenly max-w-2xl mx-auto">
          {createMenu()}
        </div>
        <button className="block sm:hidden">
          <FontAwesomeIcon icon={faListAlt} size="lg" />
        </button>
        <div className="flex-grow block sm:hidden font-bold text-base text-center">
          E.S.C (Education Sharing Club)
        </div>
        <button className="flex-shrink-0">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
        <div className="hidden sm:block">
          {isSigned ? (
            <button
              className="flex-shrink-0 pl-4"
              onClick={() => isSignedVar(false)}
            >
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
            </button>
          ) : (
            <button
              className="flex-shrink-0 pl-4"
              onClick={() => history.push("/sign-in")}
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between sm:hidden w-full max-w-xs mx-auto p-1">
        {createMenu()}
      </div>
    </div>
  );
};
