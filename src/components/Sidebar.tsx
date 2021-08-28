import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { isSignedVar, tokenVar, profileVar } from "../apollo";
import { menus } from "./Menus";

import defaultProfileImg from "../resources/icons/default_profile.png";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

const PROFILE_QUERY = gql`
  query {
    profile {
      name
      email
      picture
    }
  }
`;

export const Sidebar = ({ show, onClose }: SidebarProps) => {
  const isSigned = useReactiveVar(isSignedVar);
  const history = useHistory();
  const { data } = useQuery(PROFILE_QUERY);

  const createMenu = () => {
    return menus.map((menu) => {
      return (
        <button
          className="w-full px-4 text-base border-b-2 border-gray-100 h-11 flex items-center"
          key={menu.name}
          onClick={() => {
            onClose();
            history.push(menu.link);
          }}
        >
          {menu.name}
        </button>
      );
    });
  };

  return (
    <div>
      <div
        className={`${
          show ? "block sm:hidden" : "hidden"
        } fixed top-0 z-40 w-full h-screen bg-transparent bg-black bg-opacity-50`}
        onClick={onClose}
      ></div>
      <div
        className={`${
          show ? "left-0 sm:-left-full" : "-left-full"
        } fixed top-0 z-40 w-full max-w-xs h-screen transition-all duration-500 flex flex-col`}
      >
        <div
          className="bg-black text-gray-400 px-5 py-5"
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={data?.profile?.picture ?? defaultProfileImg}
            alt=""
          ></img>
          {isSigned ? (
            <div className="mt-4 flex justify-between">
              <div>{`Welcome, ${data?.profile?.name}`}</div>
              <button
                onClick={() => {
                  isSignedVar(false);
                  tokenVar(null);
                  profileVar(null);
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="mt-4"
              onClick={() => {
                onClose();
                history.push("/sign-in");
              }}
            >
              로그인이 필요합니다.
            </button>
          )}
        </div>
        <div
          className="max-w-xl w-full mx-auto flex-grow bg-white text-black"
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          {createMenu()}
        </div>
      </div>
    </div>
  );
};
