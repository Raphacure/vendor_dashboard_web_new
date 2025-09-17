import "bootstrap/dist/css/bootstrap.min.css";
import PromotionalWhatsapp from "./modalComponents/promotionalWhatsapp/PromotionalWhatsapp";
import PromotionalEmail from "./modalComponents/promotionalEmail/PromotionalEmail";
import CustomTab from "@/components/custom/Tab/CustomTab";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";



const actions = [
  {
    type: "promotional",
    title: "Promotional Templates",
    Component({
      selectedAction,
      data,
      handleClose,
      show,
      handleSoftClose,
    }: any) {
      const items = [
        {
          label: "Email Templates",
          value: "email",
          children: (
            <PromotionalEmail data={data} handleClose={handleClose} />
          ),
        },
        {
          label: "Whatsapp Templates",
          value: "whatsapp",
          children: <PromotionalWhatsapp data={data} handleClose={handleClose} />,
        },
        // {
        //   label: "RCS Templates",
        //   key: "rcs",
        //   children: <PromotionalRCS data={data} handleClose={handleClose} />,
        // },
        // {
        //   label: "SMS Templates",
        //   key: "sms",
        //   children: <PromotionalRCS data={data} handleClose={handleClose} />,
        // }
      ];
      return (
        <CustomModal open={show} title={this.title} handleClose={handleSoftClose}>
          <CustomModal.Body>
            <CustomTab tabs={items} />
          </CustomModal.Body>
        </CustomModal>
      );
    },
  },
];


const PromotionalModal = ({
  selectedAction,
  data,
  handleClose,
  show,
  handleSoftClose,
}: any) => {
  
  const action = actions.find((item) => item?.type === selectedAction);

  return (
    <>
      {action?.Component({
        selectedAction,
        data,
        handleClose,
        show,
        handleSoftClose,
      })}
    </>
  );
};

export default PromotionalModal;
