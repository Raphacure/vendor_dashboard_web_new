import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RaphaPlusHeader from "@/layout/Header/Header";
import { checkIsMobile, getCurrentRoute } from "@/lib/common";
import MobileHeader from "@/layout/MobileHeader/MobileHeader";
import MobileFooter from "@/layout/MobileFooter/MobileFooter";
import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "@/layout/SideBar/Sidebar";
import Loader from "@/components/loader/loader/Loader";
import { useIsProtected } from "@/components/Auth/Protected/ProtectedComponent";
import { locationsDetails } from "./Layout.constants";
import { RootState } from "@/redux/store";

const MainLayout = (props: any) => {
  const navigate = useNavigate();

  const isProtected = useIsProtected();

  const { fullScreenloading, routeScreenLoading } = useSelector(
    (store: RootState) => store.app.loading
  );

  const isMobile = checkIsMobile();

  const location = useLocation() as any;

  const state = location.state;

  const currentPathKey =
    getCurrentRoute(
      locationsDetails.map((item) => ({ path: item.path, key: item.name })),
      location.pathname
    ) ?? "Dashboard";

  const matchedLocation = useMemo(
    () => locationsDetails.find((item) => item.name === currentPathKey),
    [currentPathKey]
  );

  const locationState = location.state === null ? undefined : location.state;

  const locationChange = typeof matchedLocation?.state === typeof locationState;

  useEffect(() => {
    navigate(
      {
        pathname: location.pathname,
        search: location.search,
      },
      {
        replace: true,
        state: {
          ...(typeof locationState === "object" && locationState !== null
            ? { ...locationState }
            : {}),
          ...matchedLocation?.state,
        },
      }
    );
  }, [matchedLocation, navigate, location.pathname, locationChange]);

  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh] overflow-hidden">
        <div>
          {!(
            state?.noRender?.header ?? matchedLocation?.state?.noRender?.header
          ) && <MobileHeader />}
        </div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <div>
          {!(
            state?.noRender?.footer ??
            matchedLocation?.state?.noRender?.mobilefooter
          ) && <MobileFooter />}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={"wrapper-hide-header"}>
        <>
          {fullScreenloading && <Loader />}
          {isProtected && state?.noRender?.header && <RaphaPlusHeader />}
          <div
            className={`raphaplus-layout-container full-content-sec-page-design1 ${
              state?.noRender?.header && !isProtected ? "!pt-0" : ""
            }`}
          >
            {isProtected && !state?.noRender?.sidebar && (
              <div>
                <Sidebar />
              </div>
            )}
            <div
              className={`w-100 overflow-y-auto ${
                state?.noRender?.header && !isProtected
                  ? "max-h-[100vh]"
                  : "max-h-[calc(100vh-89px)]"
              }`}
            >
              <Outlet />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MainLayout;
