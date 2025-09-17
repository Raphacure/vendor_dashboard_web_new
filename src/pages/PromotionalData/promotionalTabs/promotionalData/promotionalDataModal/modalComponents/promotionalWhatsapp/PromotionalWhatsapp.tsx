import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getPromotionalWhatsappTemplateAPI,
  sendPromotionsEmails,
} from "../../../../../../../redux/slices/promotionalData/promotionalDataService";
import { toast } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skeleton, Spin, Tooltip } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BodyDiv, FooterDiv } from "./PromotionalWhatsapp.styled";
import { IoReloadCircle } from "react-icons/io5";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const PromotionalWhatsapp = ({ data, handleClose }: any) => {
  const dispatch = useDispatch() as any;
  const [selectedTemplate, setSelectedTemplate] = useState(null) as any;
  const [templates, setTemplates] = useState(null) as any;
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [campaign, setCampaign] = useState("");

  //getiing templates api call
  const getAllWhatsappTemplates = async () => {
    setSelectedTemplate(null);
    setLoading(true);
    try {
      const result = (await dispatch(
        getPromotionalWhatsappTemplateAPI()
      )) as any;
      if (result?.meta?.requestStatus === "fulfilled") {
        setTemplates(result?.payload?.data?.templetes);
        if (result?.payload?.data?.templetes?.length > 0) {
          setSelectedTemplate(result?.payload?.data?.templetes?.[0]);
        }
      } else if (result?.meta?.requestStatus === "rejected") {
        toast.error(result?.error?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //

  useEffect(() => {
    getAllWhatsappTemplates();
  }, []);

  // Sample template data - replace with your actual data

  const getStatusColor = (status: any) => {
    switch (status) {
      case "APPROVED":
        return "badge-success";
      case "REJECTED":
        return "badge-danger";
      default:
        return "badge-secondary";
    }
  };

  // handle sent whatsapp templates

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const filteredBody = Object.keys(data).reduce((acc: any, key: any) => {
      if (data[key].length > 0) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
    const modifiedCampain = `${new Date().getTime()}_${campaign}`;
    const payload = {
      campaign: modifiedCampain,
      template_id: selectedTemplate?.id,
      ...filteredBody,
      sendThrough: "phone",
    };
    try {
      const result = (await dispatch(sendPromotionsEmails(payload))) as any;
      if (result?.meta?.requestStatus === "fulfilled") {
        toast.success("Whatapp Message sent successfully");
        handleClose();
      } else if (result?.meta?.requestStatus === "rejected") {
        toast.error(result?.error?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <>
      <>
        <BodyDiv className="container py-1">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              onChange={(e) => setCampaign(e.target.value)}
              type="text"
              placeholder="Enter Campaign Name"
            />
          </Form.Group>

          <div className="row">
            {/* Left side - Template List with Radio Buttons */}
            <div className="col-md-6 left-div">
              <div className="choose-templates-div">
                <p className="text-muted">Select a template to use</p>
                <IoReloadCircle
                  className={loading ? "rotate-icon" : ""}
                  onClick={getAllWhatsappTemplates}
                  size="30px"
                  color="green"
                />
              </div>
              {loading ? (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              ) : (
                templates?.map((template: any) => (
                  <div
                    key={template?.id}
                    className="card mb-3 cursor-pointer"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <div className="card-body d-flex align-items-start">
                      <input
                        type="radio"
                        id={`template-${template?.id}`}
                        name="template"
                        className="mt-1 mr-3"
                        checked={selectedTemplate?.id === template?.id}
                        onChange={() => setSelectedTemplate(template)}
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <label
                            htmlFor={`template-${template?.id}`}
                            className="mb-0 font-weight-medium cursor-pointer"
                          >
                            {template?.name}
                          </label>
                          <span
                            className={`badge ${getStatusColor(
                              template?.wa_status
                            )}`}
                          >
                            {template?.wa_status}
                          </span>
                        </div>
                        <small className="text-muted d-block mt-1">
                          {template?.wa_category}
                        </small>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right side - Selected Template Details */}
            <div className="col-md-6">
              {selectedTemplate ? (
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      {selectedTemplate?.name}
                    </h5>
                    <small className="text-muted">
                      Category: {selectedTemplate?.wa_category}
                    </small>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <small className="text-muted d-block mb-2">
                        Template Content
                      </small>
                      <div className="p-3 bg-light rounded">
                        {selectedTemplate?.wa_components?.map(
                          (item: any, index: number) => {
                            if (
                              item?.type === "HEADER" &&
                              item?.format === "IMAGE" &&
                              item?.example
                            ) {
                              return (
                                <div key={index} className="text-center mb-3">
                                  <img
                                    src={item.example.header_handle[0]}
                                    alt="Header"
                                    className="img-fluid rounded"
                                  />
                                </div>
                              );
                            }
                            if (item?.type === "BODY") {
                              return (
                                <p
                                  key={index}
                                  className="text-dark text-center mb-3"
                                >
                                  {item.text}
                                </p>
                              );
                            }
                            if (item?.type === "FOOTER") {
                              return (
                                <p
                                  key={index}
                                  className="text-muted text-center small"
                                >
                                  {item.text}
                                </p>
                              );
                            }
                            return null;
                          }
                        )}
                      </div>
                    </div>
                    <span
                      className={`badge ${getStatusColor(
                        selectedTemplate?.wa_status
                      )}`}
                    >
                      {selectedTemplate?.wa_status}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="card h-100 bg-light">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <Spin
                      indicator={
                        <LoadingOutlined
                          className="selected-template-loading"
                          spin
                        />
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </BodyDiv>
      </>
      <>
        <FooterDiv>
          <div className="flex justify-end gap-2">
            <SecoundaryButton onClick={handleClose}>
              Close
            </SecoundaryButton>
            <Tooltip
              title={
                !Object.entries(data)?.some(([key, value]: any) => {
                  return value?.length > 0;
                }) ||
                !(campaign?.length > 0) ||
                !selectedTemplate ? "please add campaign name" : null
              }
              trigger={["hover"]}
              zIndex={100000}
              color="orange"
            >
              <PrimaryButton
                onClick={handleSubmit}
                disabled={
                  !Object.entries(data)?.some(([key, value]: any) => {
                    return value?.length > 0;
                  }) ||
                  !(campaign?.length > 0) ||
                  !selectedTemplate
                }
              >
                {submitLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Sending Whatsapp Message...
                  </>
                ) : (
                  "Send Whatsapp Message"
                )}
              </PrimaryButton>
            </Tooltip>
          </div>
        </FooterDiv>
      </>
    </>
  );
};

export default PromotionalWhatsapp;
