import { getCurrentRoute } from "@/lib/common";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MobileFooterStyled } from "./MobileFooter.styled";

interface MenuItem {
  name: string;
  img: string;
  whiteImg: string;
  path: string;
  openInNewTab: boolean;
  state?: any;
  action?: any;
}

const categoryItems = [
  // {
  //   name: "Orders",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
  //   path: "/orders",
  //   openInNewTab: false,
  //   state: { name: "Orders" },
  //   action(history: any) {
  //     history(this.path, { state: this?.state });
  //   },
  // },
  // {
  //   name: "Quick Links",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",
  //   path: "/quick-links",
  //   openInNewTab: false,
  // },
  // {
  //   name: "Packages",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1757401687133.svg",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1757401735668.svg",
  //   path: "/packages",
  //   openInNewTab: false,
  // },
  // {
  //   name: "Data Analytics",
  //   img: "	https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419857892.png",
  //   whiteImg:
  //     "	https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419877370.png",
  //   path: "/data-analytics",
  //   openInNewTab: false,
  // },
  // {
  //   name: "My Employees",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068953762.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090411933.png",
  //   path: "/employees",
  //   openInNewTab: false,
  // },
  // {
  //   name: "Manage Users",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1743396573910.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1743751876973.png",
  //   path: "/manageUsers",
  //   openInNewTab: false,
  // },
  // {
  //   name: "Promotional Data",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
  //   path: "/promotional-data",
  //   openInNewTab: false,
  // },
  // {
  //   name: "My Clients",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419622833.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419698378.png",
  //   path: "/MyClients",
  //   openInNewTab: false,
  // },
  {
    name: "RFQ",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419893082.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419916468.png",
    path: "/RFQ",
    openInNewTab: false,
  },
  // {
  //   name: "Community",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419792542.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419830326.png",
  //   path: "/communities",
  //   openInNewTab: false,
  // },
  // {
  //   name: "Communication  Map",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
  //   path: "/communication-map",
  //   openInNewTab: false,
  // },
  {
    name: "Tickets",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
    path: "/tickets",
    openInNewTab: false,
  },

  {
    name: "My Calendar",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069133972.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090528045.png",
    path: "/calendar",
    openInNewTab: false,
  },
  {
    name: "Chat",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745841817031.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745841854484.png",
    path: "/chat",
    openInNewTab: true,
  },
];

const menuItems: MenuItem[] = [
  {
    name: "Home",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754298609835.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754298609835.svg",
    path: "/dashboard",
    openInNewTab: false,
    state: { render: { dashboardHeader: true }, name: "Home" },
    action(history: any, instituteAction: any) {
      history(this.path, { state: this?.state });
    },
  },
  {
    name: "Bookings",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293230653.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293230653.svg",
    path: "/bookings",
    openInNewTab: false,
    state: { name: "Bookings" },
    action(history: any, instituteAction: any) {
      history(this.path, { state: this?.state });
    },
  },
  {
    name: "Menu",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754294851190.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754294851190.svg",
    path: "",
    openInNewTab: false,
    state: { isCategory: true },
    action(_: any, instituteAction: any) {
      instituteAction("open_category");
    },
  },
  {
    name: "Leads",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293567456.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293567456.svg",
    path: "/leads",
    openInNewTab: false,
    action(history: any, instituteAction: any) {
      history(this.path, { state: this?.state });
    },
  },
  {
    name: "Calendar",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293673090.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293673090.svg",
    path: "/calendar",
    openInNewTab: false,
    state: { state: { name: "Calender" } },
    action(history: any, instituteAction: any) {
      history(this.path, { state: this?.state });
    },
  },
];

const MobileFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCategoryOpen, setIsCategory] = useState(false);
  const instituteAction = (action: string, data: any) => {
    const actions = [
      {
        type: "open_category",
        action: (data: any) => {
          setIsCategory((pre) => !pre);
        },
      },
    ];
    actions.find((item: any) => item.type === action)?.action?.(data);
  };

  useEffect(() => {
    setIsCategory(false);
  }, [location]);

  const selectedMenuItem = getCurrentRoute(
    menuItems.map((item) => ({ path: item.path, key: item.name })),
    location.pathname
  );

  return (
    <MobileFooterStyled>
      <div className={`category-open ${isCategoryOpen ? "open" : ""}`}>
        <div className="p-2 h-full">
          <div className="grid grid-cols-3 gap-1 justify-items-center">
            {categoryItems.map((item: any) => {
              return (
                <div
                  className="cursor-pointer text-center"
                  key={item.name}
                  onClick={() => {
                    setIsCategory(false);
                    navigate(item.path, { state: item?.state });
                  }}
                >
                  <img
                    src={item.img}
                    className="w-[40px] h-[40px]"
                    alt={item.name}
                  />
                  <p className="truncate w-full text-wrap">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-main-div">
        {menuItems.map((item: MenuItem) => {
          return (
            <div
              className={`cursor-pointer transition-opacity duration-300 ${
                selectedMenuItem === item.name || "Menu" === item.name
                  ? "opacity-[1]"
                  : "opacity-[.7]"
              }`}
              key={item.name}
              onClick={() => item?.action(navigate, instituteAction)}
            >
              <img src={item.img} alt={item.name} />
              <p className="text-nowrap">{item.name}</p>
            </div>
          );
        })}
      </div>
    </MobileFooterStyled>
  );
};

export default MobileFooter;
