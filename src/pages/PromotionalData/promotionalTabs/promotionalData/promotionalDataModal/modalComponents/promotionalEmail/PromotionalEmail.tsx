import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getPromotionalEmailsTemplateAPI,
  sendPromotionsEmails,
} from "../../../../../../../redux/slices/promotionalData/promotionalDataService";
import { toast } from "react-hot-toast";
import { Radio, Space, Tooltip } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PromotionalEmailBodyDiv,
  PromotionalEmailFooterDiv,
} from "./PromotionalEmail.styled";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const PromotionalEmail = ({
  selectedAction,
  data,
  handleClose,
  show,
  handleSoftClose,
}: any) => {
  const dispatch = useDispatch() as any;
  const [campaign, setCampaign] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [emailLoading, setEmailLoading] = useState(true);
  const [emailTemplates, setEmailTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const filteredBody = Object.keys(data).reduce((acc: any, key: any) => {
      if (data[key].length > 0) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
    const modifiedCampain = `${new Date().getTime()}_${campaign}`;
    const payload = {
      campaign: modifiedCampain,
      template_id: selectedTemplate,
      ...filteredBody,
      sendThrough: "email",
    };
    try {
      const result = (await dispatch(sendPromotionsEmails(payload))) as any;
      if (result?.meta?.requestStatus === "fulfilled") {
        toast.success("Emails sent successfully");
        handleClose();
      } else if (result?.meta?.requestStatus === "rejected") {
        toast.error(result?.error?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAllEmailTemplates = async () => {
      setEmailLoading(true);
      try {
        const result = (await dispatch(
          getPromotionalEmailsTemplateAPI()
        )) as any;
        if (result?.meta?.requestStatus === "fulfilled") {
          setEmailTemplates(result?.payload?.data?.templetes);
        } else if (result?.meta?.requestStatus === "rejected") {
          toast.error(result?.error?.message);
        }
      } catch (error) {
        toast.error(JSON.stringify(error));
      } finally {
        setEmailLoading(false);
      }
    };

    getAllEmailTemplates();
  }, []);

  return (
    <>
      <>
        <PromotionalEmailBodyDiv>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              onChange={(e) => setCampaign(e.target.value)}
              type="text"
              placeholder="Enter Campaign Name"
            />
          </Form.Group>
          <div className="email-templates-div">
            {emailTemplates?.length > 0 && !emailLoading ? (
              <Radio.Group
                onChange={(e) => setSelectedTemplate(e.target?.value)}
                value={selectedTemplate}
              >
                <Space direction="vertical">
                  {emailTemplates?.map((template: any) => (
                    <div
                      key={template?.template_id}
                      className="email-container"
                    >
                      <Radio value={template?.template_id}>
                        <b>{template?.template_id?.split("_").join(" ")}</b>
                      </Radio>
                      <div
                        className="email-render-div"
                        dangerouslySetInnerHTML={{ __html: template?.template }}
                      />
                    </div>
                  ))}
                </Space>
              </Radio.Group>
            ) : (
              // Show loading or fallback content if templates aren't available
              <p>Loading email templates...</p>
            )}
          </div>
        </PromotionalEmailBodyDiv>
      </>
      <>
        <PromotionalEmailFooterDiv>
          <div className="btn-group-footer">
            <SecoundaryButton onClick={handleClose}>
              Close
            </SecoundaryButton>
            <Tooltip
              title={
                !Object.entries(data)?.some(([key, value]: any) => {
                  return value?.length > 0;
                }) ||
                !(campaign?.length > 0) ||
                !selectedTemplate
                  ? "please add campaign name"
                  : null
              }
              trigger={["hover"]}
              zIndex={100000}
              color="orange"
            >
              <PrimaryButton
                onClick={handleSubmit}
                disabled={
                  !Object.entries(data)?.some(([key, value]: any) => {
                    return value.length > 0;
                  }) ||
                  !(campaign.length > 0) ||
                  !selectedTemplate
                }
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Sending Mail...
                  </>
                ) : (
                  "Send Mail"
                )}
              </PrimaryButton>
            </Tooltip>
          </div>
        </PromotionalEmailFooterDiv>
      </>
    </>
  );
};

export default PromotionalEmail;
