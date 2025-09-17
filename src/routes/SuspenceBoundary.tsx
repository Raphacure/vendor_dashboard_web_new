import FullPageLoader from "@/components/loader/FullPageLoader/FullPageLoader";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";

const SuspenceBoundary = () => {
  const location = useLocation();

  return (
    <Suspense key={location.key} fallback={<FullPageLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenceBoundary;