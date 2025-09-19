import { SidebarStyled } from "./Sidebar.styled";
import React, { useState, useLayoutEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import Logout from "@/components/logout/Logout";
import { FaChevronRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { dispatchUserLogout } from "@/redux/slices/auth/authSlice";

interface SubmenuItem {
  name: string;
  path: string;
  openInNewTab?: boolean;
}

interface MenuItem {
  name: string;
  img: string;
  whiteImg: string;
  path: string;
  openInNewTab: boolean;
  hasSubMenu?: boolean;
  subMenuItems?: SubmenuItem[];
  requiredHeadDoctor?: boolean;
  isOhcClinicRequired?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293492251.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293431189.svg",
    // path: "/dashboard",
    path: "/dashboard",
    openInNewTab: false,
  },
  {
    name: "Data Analytics",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419857892.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419877370.png",
    path: "/data-analytics",
    openInNewTab: false,
  },
  {
    name: "Quick Links",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",
    // path: "/dashboard",
    path: "/quick-links",
    openInNewTab: false,
  },
  {
    name: "Orders",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293230653.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293366982.svg",
    path: "/orders",
    openInNewTab: false,
  },
  {
    name: "Booking",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293230653.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293366982.svg",
    path: "/bookings/all",
    openInNewTab: false,
  },
  {
    name: "My Clients",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419622833.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419698378.png",
    path: "/MyClients",
    openInNewTab: false,
  },

  {
    name: "Packages Requested",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1757401687133.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1757401735668.svg",
    path: "/packages",
    openInNewTab: false,
  },

  {
    name: "My Employees",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293567456.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293602216.svg",
    path: "/employees",
    openInNewTab: false,
  },
  {
    name: "RFQ",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419893082.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419916468.png",
    path: "/RFQ",
    openInNewTab: false,
  },
  // {
  //   name: "Communication Map",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
  //   path: "/communication-map",
  //   openInNewTab: false,
  // },
  {
    name: "Manage Users",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419792542.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419830326.png",
    path: "/ManageUsers",
    openInNewTab: false,
  },
  {
    name: "Tickets",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742984246183.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742984284335.png",
    path: "/tickets",
    openInNewTab: false,
  },
  {
    name: "Community",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419792542.png",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419830326.png",
    path: "/communities",
    openInNewTab: false,
  },
  {
    name: "My Calendar",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293673090.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293716091.svg",
    path: "/calendar",
    openInNewTab: false,
  },
  {
    name: "Chat",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293907164.svg",
    whiteImg:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/31020-1754293874149.svg",
    path: "/chat",
    openInNewTab: true,
  },
  // {
  //   name: "Promotional Data",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",
  //   whiteImg:
  //     "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738090371408.png",
  //   path: "/promotional-data",
  //   openInNewTab: false,
  // },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [logoutShow, setLogOutShow] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  const filteredMenuItems = React.useMemo(() => {
    return menuItems;
  }, []);

  useLayoutEffect(() => {
    const currentPath = location.pathname;
    let activeItem = filteredMenuItems.find((item) => {
      return currentPath === item.path;
    });

    if (!activeItem) {
      filteredMenuItems.forEach((item) => {
        if (item.subMenuItems) {
          const activeSubItem = item.subMenuItems.find(
            (subItem) => currentPath === subItem.path
          );
          if (activeSubItem) {
            activeItem = item;
            setActiveSubMenu(activeSubItem.name);
          }
        }
      });
    } else {
      setActiveSubMenu(null);
    }

    if (activeItem) {
      setActiveTab(activeItem.name);

      const updateIndicator = () => {
        if (activeItemRef.current && menuRef.current) {
          setIndicatorStyle({
            top: activeItemRef.current.offsetTop,
            height: activeItemRef.current.clientHeight,
          });
        }
      };

      requestAnimationFrame(updateIndicator);
    }
  }, [location.pathname, filteredMenuItems]);

  const handleItemClick = React.useCallback(
    (item: MenuItem) => {
      if (item.openInNewTab) {
        window.open(item.path, "_blank");
        return;
      }

      if (activeTab !== item.name) {
        setActiveSubMenu(null);
      }
      setActiveTab(item.name);
      navigate(item.path);

      requestAnimationFrame(() => {
        const activeElement = document.querySelector(
          `.menu-item[data-item="${item.name}"]`
        );
        if (activeElement && menuRef.current) {
          setIndicatorStyle({
            top: (activeElement as HTMLElement).offsetTop,
            height: activeElement.clientHeight,
          });
        }
      });
    },
    [activeTab, navigate]
  );

  const handleSubItemClick = React.useCallback(
    (subItem: SubmenuItem, parentItem: MenuItem) => {
      if (subItem.openInNewTab) {
        window.open(subItem.path, "_blank");
        return;
      }
      setActiveSubMenu(subItem.name);
      setActiveTab(parentItem.name);
      navigate(subItem.path);
    },
    [navigate]
  );

  const handleLogout = React.useCallback(() => {
    dispatch(dispatchUserLogout());
  }, [dispatch]);

  return (
    <SidebarStyled>
      {logoutShow && (
        <Logout
          onHide={() => setLogOutShow(false)}
          handleLogout={handleLogout}
        />
      )}

      <div className="sidebar-main">
        <div className="menu" ref={menuRef}>
          {/* Sliding Active Indicator */}
          <div
            className="active-indicator"
            style={{
              transform: `translateY(${indicatorStyle.top}px)`,
              height: `${indicatorStyle.height}px`,
              opacity: activeTab ? 1 : 0,
            }}
          />

          {filteredMenuItems.map((item, index) => (
            <div
              key={item.name}
              style={{ "--item-index": index } as React.CSSProperties}
            >
              <div
                className={`menu-item ${
                  activeTab === item.name ? "active" : ""
                } ${item?.hasSubMenu ? "has-sub-menu" : ""}`}
                data-item={item.name}
                ref={activeTab === item.name ? activeItemRef : null}
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={activeTab === item.name ? item.whiteImg : item.img}
                  alt={item.name}
                  className="logo"
                />
                <span>{item.name}</span>

                {item.hasSubMenu && (
                  <div className="chevron-icon">
                    <FaChevronRight />
                  </div>
                )}
              </div>

              {item.hasSubMenu && (
                <div className="submenu-container">
                  <div className="submenu-divider"></div>
                  {item.subMenuItems?.map((subItem) => (
                    <div
                      key={subItem.name}
                      className={`submenu-item ${
                        activeSubMenu === subItem?.name ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubItemClick(subItem, item);
                      }}
                    >
                      <div></div>
                      <span>{subItem.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bottom-section">
          <div className="logout" onClick={() => setLogOutShow(true)}>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738066580891.png"
              alt="Logout"
              className="logo"
            />
            <span>Logout</span>
          </div>
        </div>

        <div className="help-center-container">
          <div className="help-center-icon">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068069674.png"
              alt="Help Center"
              className="logo"
            />
          </div>
          <span className="help-center-text">Help Center</span>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
