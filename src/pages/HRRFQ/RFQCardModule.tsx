import React, { useState } from "react";
import { RFQCardModuleStyled } from "./RFQCardModule.styled";
import { BsCart2 } from "react-icons/bs";

const RFQCardModule = (props: any) => {
  const {
    details,
    section,
    hideSection,
    onSelectedCardsChange,
    onSelectedRadiologyCardsChange,
    popUpShow,
  } = props;

  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardClick = (item: any) => {
    const updatedSelectedCards = item;
    setSelectedCards((prev: any) => {
      if (prev?.includes(item.service_code)) {
        return prev?.filter((card: any) => card != item?.service_code);
      }
      return [...prev, item.service_code];
    });

    if (section === "Pathology" && onSelectedCardsChange) {
      onSelectedCardsChange(updatedSelectedCards);
    }
    if (section === "Radiology" && onSelectedRadiologyCardsChange) {
      onSelectedRadiologyCardsChange(updatedSelectedCards);
    }
    return updatedSelectedCards;
  };

  const Banner = ({ discount }: { discount: number }) => {
    return (
      <div className="bannerWrapper">
        <div className="rectangle">{discount}% Off</div>
      </div>
    );
  };

  return (
    <RFQCardModuleStyled>
      <div className="row">
        {details?.map((item: any, index: number) => {
          const isSelected = selectedCards.includes(index);
          return (
            <div
              className={`${
                hideSection === "HideSection" ? "col-lg-6" : "col-lg-4"
              } col-md-6 col-12 `}
              key={index}
            >
              <div
                className={`RFQExistingList-card-main-div ${
                  isSelected ? "selected" : ""
                }`}
              >
                <div className="d-flex flex-column gap-4">
                  <div className="imgWrapper">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732626138544.png"
                      alt="Background"
                    />
                    {hideSection !== "HideSection" && (
                      <Banner discount={item?.price?.discount_percentage} />
                    )}
                    <div className="textContent">
                      <div>
                        <h2>{item?.service_name}</h2>
                        <h3>{item?.subtitle}</h3>
                      </div>
                      <div>
                        <button className="featureButton">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732554774753.png"
                            alt="Feature Icon"
                          />
                          <p>{section}</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row w-full justify-content-between px-3">
                    <div className="d-flex flex-row logo">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732555146541.png"
                        alt="Lab Tests Logo"
                      />
                      <div>
                        <h3>Includes</h3>
                        <h4>
                          {item?.tests?.length
                            ? `${item.tests.length} Tests${
                                item.tests.length > 1 ? "s" : ""
                              } `
                            : "1 Tests"}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="bottomSec">
                    <div className="d-flex">
                      <button
                        className="me-3"
                        onClick={() => props.popUpShow(true, item)}
                      >
                        View
                      </button>
                      <button onClick={() => handleCardClick(item)}>
                        {Array.isArray(selectedCards) &&
                        selectedCards?.includes(item?.service_code)
                          ? "Remove"
                          : "Add to RFQ"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </RFQCardModuleStyled>
  );
};

export default RFQCardModule;
