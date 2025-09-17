import TestTubesIcon from "@/assets/images/labtests/testtubes.svg";
import { HealthSaverCardStyled } from "./HealthSaverCard.styled";

const Banner = ({ discount }: any) => {
  return (
    <div className="bannerWrapper">
      <div className="rectangle">{discount}% Off</div>
      <div className="triangle"></div>
    </div>
  );
};

const HealthSaverCard = ({
  title,
  featureButtonText,
  reportTime,
  testCount,
  discount,
  hoverTitle,
  addToCart,
  section,
  origin,
  sectionName,
}: any) => {
  const addItemToCard = () => {
    addToCart();
  };
  return (
    <HealthSaverCardStyled>
      <div
        className="d-flex flex-column cursor-pointer"
        onClick={() => {
          if (origin !== "packageDetails" && addToCart) {
            addItemToCard();
          }
        }}
      >
        <div className="imgWrapper">
          {sectionName == "womenscare" ? (
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1740983625709.png"
              alt="Background"
            />
          ) : (
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732626138544.png"
              alt="Background"
            />
          )}

          {discount > 0 && <Banner discount={discount} />}
          <div className="textContent">
            <div>
              <h2 title={hoverTitle}>{title}</h2>
              {/* <h3
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              ></h3> */}
            </div>
            <div className="">
              <button className="featureButton">
                <img src={TestTubesIcon} alt="Feature Icon" />
                {featureButtonText}
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            // sectionName == "womenscare"
            "d-flex flex-row justify-content-between test-img-div"
            // : " d-flex flex-row w-full justify-content-between px-3"
          }
        >
          <div className="d-flex flex-row logo align-items-center cardInfoRow ">
            {section === "radiology" ? (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733906583474.png"
                alt="Clinic Logo"
              />
            ) : (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745308974171.png"
                alt="Reports Logo"
              />
            )}

            {section === "radiology" ? (
              <h3>In Clinic</h3>
            ) : (
              <div
                className={
                  // sectionName == "womenscare"
                  "d-flex flex-column"
                  // : "d-flex flex-row"
                }
              >
                <h3 className="me-2">Report Within</h3>
                <h4>{reportTime}</h4>
              </div>
            )}
          </div>
          {section !== "radiology" && (
            <div className="d-flex flex-row logo tests align-items-center cardInfoRow">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745309064882.png"
                alt="Lab Tests Logo"
              />
              <div
                className={
                  // sectionName == "womenscare"
                  "d-flex flex-column"
                  // : "d-flex flex-row"
                }
              >
                <h3 className="me-2">Includes</h3>
                <h4>{testCount} Tests</h4>
              </div>
            </div>
          )}
        </div>
        <div
          className={sectionName == "womenscare" ? "bottomSec1" : "bottomSec"}
        >
          <button className="featureButton">
            Add
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745312296429.png"
              alt=""
              className="cart-icon"
            />
          </button>
        </div>
      </div>
    </HealthSaverCardStyled>
  );
};

export default HealthSaverCard;
