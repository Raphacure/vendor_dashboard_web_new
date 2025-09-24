import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { AppDispatch, RootState } from "@/redux/store";

import RaphaPlusHeader from "@/layout/Header/Header";
import Sidebar from "@/layout/SideBar/Sidebar";
import MobileHeader from "@/layout/MobileHeader/MobileHeader";
import MobileFooter from "@/layout/MobileFooter/MobileFooter";
import Loader from "@/components/loader/loader/Loader";
import { checkIsMobile } from "@/lib/common";
import useVendorLinkableId from "@/hooks/auth/useVendorLinkableId";
import { getVendorDetailsThunk } from "@/redux/slices/vendor/vendorService";
import { useRouteLayout } from "./Layout.constants";

const MemoizedRaphaPlusHeader = React.memo(RaphaPlusHeader);
const MemoizedSidebar = React.memo(Sidebar);
const MemoizedMobileHeader = React.memo(MobileHeader);
const MemoizedMobileFooter = React.memo(MobileFooter);

const MainLayout = () => {
  const dispatch: AppDispatch = useDispatch();
  const { linkableId } = useVendorLinkableId();
  const isMobile = checkIsMobile();

  const layout = useRouteLayout();

  const { fullScreenloading } = useSelector(
    (store: RootState) => store.app.loading
  );

  useEffect(() => {
    if (linkableId) {
      dispatch(getVendorDetailsThunk({ id: linkableId }));
    }
  }, [linkableId, dispatch]);

  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh] overflow-hidden">
        <div>{!layout?.noRender?.mobileHeader && <MemoizedMobileHeader />}</div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <div>{!layout?.noRender?.mobileFooter && <MemoizedMobileFooter />}</div>
      </div>
    );
  }

  return (
    <>
      <div className={"wrapper-hide-header"}>
        {fullScreenloading && <Loader />}
        {/* Simplified conditional rendering */}
        {!layout?.noRender?.header && <MemoizedRaphaPlusHeader />}
        <div
          className={`raphaplus-layout-container full-content-sec-page-design1 ${
            layout?.noRender?.header ? "!pt-0" : ""
          }`}
        >
          {!layout?.noRender?.sidebar && (
            <div>
              <MemoizedSidebar />
            </div>
          )}
          <div
            className={`w-full overflow-y-auto ${
              layout?.noRender?.header
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
