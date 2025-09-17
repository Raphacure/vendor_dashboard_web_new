import { FiX } from "react-icons/fi";

const SharePopup = ({ data, shareOpen, setShareOpen }: any) => {
  const shareItems = [
    {
      type: "whatsapp",
      name: "whatsApp",
      icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1740462430505.png",
    },
    {
      type: "email",
      name: "Email ID",
      icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1740462475961.png",
    },
  ];

  const handleShare = (platform: string, patient: any) => {
    const url = window.location.href; // Current URL
    const message = `Check out this appointment details for ${patient?.first_name}:\n${url}`;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;
      case "email":
        window.open(
          `mailto:?subject=Appointment Details&body=${encodeURIComponent(
            message
          )}`,
          "_self"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="share-main-div">
      {shareOpen?.isOpen && shareOpen?.id === data?.id && (
        <div className="share-div">
          <div className="share-top-header">
            <p>Share Booking Through</p>
            <div
              className="share-close"
              onClick={() => setShareOpen({ isOpen: false, id: null })}
            >
              <FiX />
            </div>
          </div>
          <div className="share-items">
            {shareItems.map((item) => {
              return (
                <div
                  onClick={() => handleShare(item?.type, data?.user)}
                  className="share-items-list-div"
                  key={item?.type}
                >
                  <img src={item?.icon} alt={item?.name} />
                  <p>{item?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <img
        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/122601-1738832042247.png"
        alt="Logo"
        className="icon"
        onClick={() => setShareOpen({ isOpen: true, id: data?.id })}
      />
    </div>
  );
};


export default SharePopup