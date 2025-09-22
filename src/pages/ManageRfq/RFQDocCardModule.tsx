import {
  CategoryDivcolors,
  RFQDocCardModuleStyled,
} from "./RFQDocCardModule.styled";

const RFQDocCardModule = (props: any) => {
  const {
    doctor,
    selectedCards,
    setSelectedCards,
    section,
    onSelectedDoctorCardsChange,
  } = props;

  const handleCardClick = (item: any) => {
    const updatedSelectedCards = item;
    setSelectedCards((prev: any) => {
      if (prev?.includes(item.id)) {
        return prev?.filter((card: any) => card != item?.id);
      }
      return [...prev, item.id];
    });

    if (section === "doctor" && onSelectedDoctorCardsChange) {
      onSelectedDoctorCardsChange(updatedSelectedCards);
    }
    return updatedSelectedCards;
  };

  console.log(selectedCards, "selectedCards");

  return (
    <RFQDocCardModuleStyled>
      <div className="our-services-all">
        {Array.isArray(doctor) &&
          doctor?.map((category: any, index: any) => (
            <div>
              <CategoryDivcolors
                index={index}
                key={index}
                className={`home-page-card ${
                  Array.isArray(selectedCards) &&
                  selectedCards?.includes(category?.id)
                    ? "activeCard"
                    : ""
                }`}
                onClick={() => {
                  handleCardClick(category);
                }}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => props.catogorySelect(category)}
                >
                  <div className="home-card-image-img">
                    <img src={category.image} className="mt-2" />
                  </div>
                </div>
              </CategoryDivcolors>
              <p className="category-mobile-wiew ">{category?.name} </p>
            </div>
          ))}
      </div>
    </RFQDocCardModuleStyled>
  );
};

export default RFQDocCardModule;
