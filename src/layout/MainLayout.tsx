import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import SidebarRaphaplus from "@/pages/DoctorPatientDashboard/Sidebar";
import RaphaPlusHeader from "@/layout/Header/Header";
import { checkIsMobile, getCurrentRoute } from "@/lib/common";
import MobileHeader from "@/layout/MobileHeader/MobileHeader";
import MobileFooter from "@/layout/MobileFooter/MobileFooter";
import { useLocation, useNavigate } from "react-router";
import Sidebar from "@/layout/SideBar/Sidebar";
import { API_KEY, SERVER_IP } from "@/lib/config";
import Loader from "@/components/loader/loader/Loader";
import {
  updateSubDomainDetails,
  updateSubDomainName,
  updateUserDetails,
  updateIsRaphaPlus,
  updateClientDetails,
} from "@/redux/slices/auth/authSlice";
import { updateTablist } from "@/redux/slices/doctor/doctorSlice";
import axios from "axios";
import { useIsProtected } from "@/components/Auth/Protected/ProtectedComponent";
import { getClientDetailsNewAPI } from "@/redux/slices/Clients/ClientsService";
import toast from "react-hot-toast";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { locationsDetails } from "./Layout.constants";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RaphaplusLayout = (props: any) => {
  const { user } = useSelector(({ auth }: any) => auth);
  const { linkableId } = useClientLinkableId();
  const urlP = window.location.pathname;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const query1 = useQuery();
  const userid = query1.get("userid");

  const isProtected = useIsProtected();

  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    checkDomainName();
    if (!user) {
      navigate("/signin");
    } else {
      getSubdomainInfo();
    }
  }, [user, window.location.hostname]);

  const checkDomainName = () => {
    const hostName = window.location.hostname;
    const isRP =
      hostName?.indexOf("raphaplus") !== -1 ||
      hostName?.indexOf("raphadoc") !== -1 ||
      hostName?.indexOf("myclinic") !== -1
        ? // || hostName?.indexOf("localhost") !== -1
          true
        : false;
    if (isRP) {
      dispatch(updateIsRaphaPlus(true));
    }
  };
  const getSubdomainInfo = async () => {
    const xKey = API_KEY;
    try {
      const patha = window.location.hostname;
      let pathName = patha?.split(".")[0] ?? "";
      console.log("pathName", pathName);
      //@ts-expect-error
      if (pathName && (pathName !== "" || pathName === "localhost")) {
        if (pathName === "localhost") {
          // pathName = "dbs";
          // pathName = "wyh";
          // pathName = "247";
        }
        console.log("patha", patha);
        const url = `${SERVER_IP}/api/v1/client/subdomain/${pathName}`;
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        };
        setIsLoading(true);
        const response = await axios.get(url, { headers });
        setIsLoading(false);
        console.log("elient response", response?.data);
        dispatch(updateSubDomainName(pathName));

        if (response?.data?.data?.client?.id) {
          dispatch(updateSubDomainDetails(response?.data?.data?.client));
          if (response?.data?.data?.client?.agreed_services?.hide_opd) {
            dispatch(updateTablist(["Virtual Consultation"]));
          }
          if (
            response?.data?.data?.client?.agreed_services?.allow_sso &&
            userid &&
            userid != ""
          ) {
            const data1 = { userid: userid };
            const body = { subDomain: pathName, data: { userid: userid } };
            // dispatch(getSubDomainLoginDetails(body));
            console.log("patha", patha);
            const url1 = `${SERVER_IP}/api/v1/auth/${pathName}/signon`;
            const headers = {
              "Content-Type": "application/json",
              "x-api-key": xKey,
            };
            setIsLoading(false);
            const response = await axios.patch(url1, data1, { headers });
            console.log("response", response);
            const userD = response?.data.data;
            if (userD?.id) {
              dispatch(updateUserDetails(userD));
            }
            setIsLoading(false);
          }
        }
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const sideBarHidden = ["/signin"];

  const isMobile = checkIsMobile();

  const location = useLocation() as any;

  const state = location.state;

  const currentPathKey =
    getCurrentRoute(
      locationsDetails.map((item) => ({ path: item.path, key: item.name })),
      location.pathname
    ) ?? "Dashboard";

    console.log("currentPathKey", currentPathKey);

  const matchedLocation = useMemo(
    () => locationsDetails.find((item) => item.name === currentPathKey),
    [currentPathKey]
  );

  console.log("matchedLocation", matchedLocation);

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
        state: {...(typeof locationState === "object" && locationState !== null) ? {...locationState} : {}, ...matchedLocation?.state} ,
      }
    );
  }, [matchedLocation, navigate, location.pathname, locationChange]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = (await dispatch(getClientDetailsNewAPI(linkableId))) as any;
        if (res.error) {
          toast.error(res.error.message ?? "unknown error occured");
          return;
        }
        console.log("newx", res?.payload?.data?.data);
        dispatch(updateClientDetails(res?.payload?.data?.data));
      } catch (error) {
        console.error("Error fetching client details:", error);
        toast.error("An error occurred while fetching client details.");
      }
    };

    handleFetch();
  }, [dispatch, linkableId]);

  const isHeaderHidden = ["/signin"].find((item) => item === location.pathname);

  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh] overflow-hidden">
        <div>
          {!(
            state?.noRender?.header ?? matchedLocation?.state?.noRender?.header
          ) && <MobileHeader />}
        </div>
        <div
          className="flex-1 overflow-y-auto"
        >
          {props.children}
        </div>
        <div>
          {!(
            state?.noRender?.footer ?? matchedLocation?.state?.noRender?.footer
          ) && <MobileFooter />}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={"wrapper-hide-header"}>
        <>
          {isLoading && <Loader />}
          {isProtected && !isHeaderHidden && <RaphaPlusHeader />}
          <div
            className={`raphaplus-layout-container full-content-sec-page-design1 ${
              isHeaderHidden && !isProtected ? "!pt-0" : ""
            }`}
          >
            {isProtected && !sideBarHidden?.includes(urlP) && (
              <div>
                <Sidebar />
              </div>
            )}
            <div
              className={`w-100 overflow-y-auto ${
                isHeaderHidden && !isProtected
                  ? "max-h-[100vh]"
                  : "max-h-[calc(100vh-89px)]"
              }`}
            >
              {" "}
              {props.children}
            </div>
          </div>
          {/* <Footer /> */}
        </>
      </div>
    </>
  );
};

export default RaphaplusLayout;
