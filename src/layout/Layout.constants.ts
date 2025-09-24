import { useMatches } from "react-router";

type RouteLayout = {
  noRender?: {
    search?: boolean;
    header?: boolean;
    sidebar?: boolean;
    mobileHeader?: boolean;
    mobileFooter?: boolean;
  };
  render?: {
    dashboardHeader?: boolean;
  };
  title?:string
};

const locationsDetails = [
  {
    layout: {
      noRender: {
        mobileFooter: true,
        search: true,
        header: true,
        sidebar: true,
      },
      title:"signin"
    },
    id: "signin",
  },
  {
    layout: {
      noRender: { mobileFooter: true },
      title:"dashboard"
    },
    id: "dashboardProfile",
  },
  {
    layout: {
      render: { dashboardHeader: true },
      title:"dashboard"
    },
    id: "dashboard",
  },
];

export const getRouteLayout = (id: string): RouteLayout => {
  const location = locationsDetails.find((item) => item.id === id);
  return location?.layout ?? {};
};

export const useRouteLayout = () => {
  const matches = useMatches();
  const matchedRoute = matches[matches.length - 1];

  const layout = getRouteLayout(matchedRoute?.id);

  return layout;
};
