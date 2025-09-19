import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import { AppDispatch, RootState } from "@/redux/store";

import RaphaPlusHeader from "@/layout/Header/Header";
import Sidebar from "@/layout/SideBar/Sidebar";
import MobileHeader from "@/layout/MobileHeader/MobileHeader";
import MobileFooter from "@/layout/MobileFooter/MobileFooter";
import Loader from "@/components/loader/loader/Loader";

import { useIsProtected } from "@/components/Auth/Protected/ProtectedComponent";
import { checkIsMobile, getCurrentRoute } from "@/lib/common";
import useVendorLinkableId from "@/hooks/auth/useVendorLinkableId";
import { locationsDetails } from "./Layout.constants";
import { getVendorDetailsThunk } from "@/redux/slices/vendor/vendorService";

const MemoizedRaphaPlusHeader = React.memo(RaphaPlusHeader);
const MemoizedSidebar = React.memo(Sidebar);
const MemoizedMobileHeader = React.memo(MobileHeader);
const MemoizedMobileFooter = React.memo(MobileFooter);

const MainLayout = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const isProtected = useIsProtected();
  const { linkableId } = useVendorLinkableId();
  const isMobile = checkIsMobile();

  const { fullScreenloading } = useSelector(
    (store: RootState) => store.app.loading
  );

  const currentPathKey = useMemo(
    () =>
      getCurrentRoute(
        locationsDetails.map((item) => ({ path: item.path, key: item.name })),
        location.pathname
      ) ?? "Dashboard",
    [location.pathname]
  );

  const matchedLocation = useMemo(
    () => locationsDetails.find((item) => item.name === currentPathKey),
    [currentPathKey]
  );

  const finalRenderState = useMemo(() => {
    const defaultState = matchedLocation?.state?.noRender || {} as any;
    const passedState = location.state?.noRender || {};
    // Merge them, with the state passed during navigation taking precedence
    return {
      header: passedState.header ?? defaultState?.header,
      sidebar: passedState.sidebar ?? defaultState?.sidebar,
      footer: passedState.footer ?? defaultState?.footer,
      mobilefooter: passedState.mobilefooter ?? defaultState?.mobilefooter,
    };
  }, [location.state, matchedLocation]);

  useEffect(() => {
    if (linkableId) {
      dispatch(getVendorDetailsThunk({ id: linkableId }));
    }
  }, [linkableId, dispatch]);

  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh] overflow-hidden">
        <div>{!finalRenderState.header && <MemoizedMobileHeader />}</div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <div>{!finalRenderState.mobilefooter && <MemoizedMobileFooter />}</div>
      </div>
    );
  }

  return (
    <>
      <div className={"wrapper-hide-header"}>
        {fullScreenloading && <Loader />}
        {/* Simplified conditional rendering */}
        {isProtected && finalRenderState.header && <MemoizedRaphaPlusHeader />}
        <div
          className={`raphaplus-layout-container full-content-sec-page-design1 ${
            finalRenderState.header && !isProtected ? "!pt-0" : ""
          }`}
        >
          {isProtected && !finalRenderState.sidebar && (
            <div>
              <MemoizedSidebar />
            </div>
          )}
          <div
            className={`w-full overflow-y-auto ${
              finalRenderState.header && !isProtected
                ? "max-h-[100vh]"
                : "max-h-[calc(100vh-89px)]"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
