import React, { useState } from "react";
import {
  CategorySubDivcolors,
  RFQDocCardModuleStyled,
} from "./RFQDocCardModule.styled";

interface RFQDocCardModuleProps {
  doctor: any[];
  selectedCard: any[]
  onSelectedCardsChange: (selectedCardDetails: any[]) => void;
}

const RFQDocCardModule: React.FC<RFQDocCardModuleProps> = (props) => {
  const { doctor, onSelectedCardsChange, selectedCard } = props;
  const [selectedCards, setSelectedCards] = useState<number[]>(selectedCard ?? []);

  console.log(selectedCard,"selectedCard");
  

  const handleCardClick = (index: number) => {
    setSelectedCards((prevSelected) => {
      const isSelected = prevSelected.includes(index);
      const updatedSelectedCards = isSelected
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index];
      const updatedSelectedCardDetails = updatedSelectedCards.map(
        (i) => doctor[i]
      );
      onSelectedCardsChange(updatedSelectedCardDetails);
      return updatedSelectedCards;
    });
  };

  return (
    <RFQDocCardModuleStyled>
      <div className="container">
        <div className="row">
          {doctor?.map((item: any, index: number) => (
            <div
              className={`col-md-3 col-sm-6 mb-4 ${
                selectedCards.includes(index) ? "selected" : ""
              }`}
              key={index}
            >
              <div
                className="carousal-main-div"
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: "pointer",
                  border: selectedCards.includes(index)
                    ? "1px solid #9747ff"
                    : "",
                  boxShadow: selectedCards.includes(index)
                    ? "0 0 10px rgba(0, 123, 255, 0.5)"
                    : "none",
                  borderTopRightRadius: "2rem",
                  borderTopLeftRadius: "2rem",
                }}
              >
                <div className="cardCmp-main-div">
                  <CategorySubDivcolors
                    className="Carousel-sub-cards-div"
                    index={index}
                  >
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732723889259.png" />

                    <div className="renderCard-div">
                      <h5>{item?.name}</h5>
                    </div>
                  </CategorySubDivcolors>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RFQDocCardModuleStyled>
  );
};

export default RFQDocCardModule;
