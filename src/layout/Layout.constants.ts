import { Sidebar } from "lucide-react";

export const locationsDetails = [
  {
    name: "signin",
    state: {
      noRender: { mobilefooter: true, search: true, header:true,sidebar:true},
    },
    path: "/signin",
    id:"signin"
  },
  {
    name: "Dashboard",
    state: { render:{dashboardHeader: true}, noRender: { header:true } },
    path: "/dashboard",
    id:"dashboard"
  },
  {
    name: "Dashboard Profile",
    path: "/dashboard/profile",
    id:"dashboard_profile"
  },
];