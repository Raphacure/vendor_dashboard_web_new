import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Logout from "@/components/logout/Logout";
import useClientDetails from "@/hooks/auth/useClientDetails";

const DashboardProfileStyled = styled.div`
  padding: 15px;

  h4,
  h5 {
    color: 252B61;
    font-family: Inter;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #252b61;
  }

  .profile-contents {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .route-name {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-family: Inter;
      font-weight: 400;
      font-size: 18px;
      line-height: 21.78px;
      letter-spacing: 1.5%;
      color: #616161;
    }

    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
  .doctor-edit-div {
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    border: 1px solid #00000014;
    padding: 15px;
    width: 100%;
  }
  .doctor-details {
    display: flex;
    gap: 5px;

    p {
      margin: 0;
    }

    img {
      width: 70px;
      aspect-ratio: 1;
      border-radius: 50%;
    }
  }

  .doc-placeholder {
    width: 70px;
    height: 70px;
  }

  .profile-pic-div {
    width: 69px;
    height: 69px;
    overflow: hidden;
    border: 2px solid #252b61;
    border-radius: 50%;
  }

  .details-align {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dadada;
    padding: 15px 10px;
    align-items: center;
    cursor: pointer;
  }
  .contents {
    ul {
      list-style: none;
      padding-left: 0;
    }
  }
  .logout-div {
    border-radius: 15px;
    border: 1px solid rgb(37, 43, 97);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logout-div-contents {
    display: flex;
    gap: 20px;
    align-items: center;

    p {
      margin: 0;
    }
    h5 {
      margin: 0;
    }
  }
`;

const DashboardProfile = () => {
  const navigate = useNavigate() as any;
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const { clientDetails } = useClientDetails();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };
  return (
    <DashboardProfileStyled>
      <div className="profile-contents">
        <div className="doctor-edit-div">
          <div className="flex justify-between doctor-details !w-full">
            <div className="profile-pic-div">
              {clientDetails?.logo_url && (
                <img src={clientDetails?.logo_url} alt="doc-img" />
              )}
            </div>
            <div>
              <p className="text-2xl font-bold">{clientDetails?.name}</p>
            </div>
          </div>
        </div>
        <div className="appointment-management contents">
          <h4>Appointment Management</h4>
          <ul>
            <li>
              <div
                onClick={() =>
                  navigate("/dashboard", {
                    state: {
                      render: { dashboardHeader: true },
                      name: "Home",
                    },
                  })
                }
                className="details-align"
              >
                <div className="route-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068856017.png"
                    alt="dashboard-img"
                  />
                  <p>Dashboard</p>
                </div>
                <FiChevronRight />
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  navigate("/bookings", {
                    state: {
                      name: "Bookings",
                    },
                  })
                }
                className="details-align"
              >
                <div className="route-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png"
                    alt="booking-img"
                  />
                  <p>Bookings</p>
                </div>
                <FiChevronRight />
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  navigate("/patients", {
                    state: {
                      name: "My Patients",
                    },
                  })
                }
                className="details-align"
              >
                <div className="route-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068953762.png"
                    alt="my-patient-img"
                  />
                  <p>My Employees</p>
                </div>
                <FiChevronRight />
              </div>
            </li>
            <li>
              <div className="details-align">
                <div className="route-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069133972.png"
                    alt="calaender-img"
                  />
                  <p>My Calender</p>
                </div>
                <FiChevronRight />
              </div>
            </li>
          </ul>
        </div>
        <div className="logout-div">
          <div
            className="logout-div-contents"
            onClick={() => setIsLogoutOpen(true)}
          >
            <div>
              <FaPowerOff className="cursor-pointer" />
            </div>
            <div>
              <h5 className="cursor-pointer">Logout</h5>
              <p>we'll eagerly await your return!</p>
            </div>
          </div>
          <div>
            <FiChevronRight />
          </div>
        </div>
      </div>
      {isLogoutOpen && (
        <Logout
          onHide={() => setIsLogoutOpen(false)}
          handleLogout={handleLogout}
        />
      )}
    </DashboardProfileStyled>
  );
};

export default DashboardProfile;
