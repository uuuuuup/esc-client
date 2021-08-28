export interface IMenuItem {
  name: string;
  link: string;
}

export const menus: IMenuItem[] = [
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
