import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getPromotionalRCSAPI,
  getPromotionalWhatsappTemplateAPI,
  sendPromotionsEmails,
} from "../../../../../../../redux/slices/promotionalData/promotionalDataService";
import { toast } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skeleton, Spin, Tooltip } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BodyDiv, FooterDiv } from "./PromotionalRCS.styled";
import { IoReloadCircle } from "react-icons/io5";

// Define the interface for the template object based on the provided structure
interface Template {
  id: string; // Keep internal id if different from templateid? Assuming 'id' field from example is internal.
  name: string;
  text: string | null;
  templateid: string;
  bot_id: string;
  messageType: string;
  params: string[];
  variable_mapping: { [key: string]: string[] };
  rcs_detail: any | null; // Type accordingly if structure is known
  params_count: number | null;
  is_ready: boolean;
  created_at: string;
  updated_at: string;
  marketplace_name: string;
  // Add any other relevant fields from the actual API response if different
}

const PromotionalRCS = ({ data, handleClose }: any) => {
  const dispatch = useDispatch();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [templates, setTemplates] = useState<Template[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [campaign, setCampaign] = useState("");

  //getiing templates api call
  const getAllWhatsappTemplates = async () => {
    setSelectedTemplate(null);
    setLoading(true);
    try {
      const result = (await dispatch(
        getPromotionalRCSAPI() // Assuming this API fetches the new structure
      )) as any;
      if (result?.meta?.requestStatus === "fulfilled") {
        const fetchedTemplates = result?.payload?.data?.results as Template[]; // Assuming 'results' holds the array
        setTemplates(fetchedTemplates);
        if (fetchedTemplates?.length > 0) {
          // Select the first template from the results array
          setSelectedTemplate(fetchedTemplates[0]);
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
      template_id: selectedTemplate?.templateid, // Use templateid here
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
      <Modal.Body>
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
                templates?.map((template: Template) => (
                  <div
                    key={template?.templateid} // Use templateid for key
                    className="card mb-3 cursor-pointer"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <div className="card-body d-flex align-items-start">
                      <input
                        type="radio"
                        id={`template-${template?.templateid}`} // Use templateid for id
                        name="template"
                        className="mt-1 mr-3"
                        checked={selectedTemplate?.templateid === template?.templateid} // Compare templateid
                        onChange={() => setSelectedTemplate(template)}
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <label
                            htmlFor={`template-${template?.templateid}`} // Use templateid for htmlFor
                            className="mb-0 font-weight-medium cursor-pointer"
                          >
                            {template?.name}
                          </label>
                          {/* Removed status badge as wa_status is unavailable */}
                        </div>
                        {/* Removed category as wa_category is unavailable */}
                        <small className="text-muted d-block mt-1">
                          {template?.messageType && `Type: ${template.messageType}`}
                        </small>
                        {template?.marketplace_name && (
                          <small className="text-muted d-block mt-1">
                           Marketplace: {template.marketplace_name}
                          </small>
                        )}
                        {template?.params && (
                          <small className="text-muted d-block mt-1">
                            Params: {template.params.length}
                          </small>
                        )}
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
                    {/* Removed category */}
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <small className="text-muted d-block mb-2">
                        Template Details
                      </small>
                      {/* Removed template content preview based on wa_components */}
                      {/* You might want to display selectedTemplate.text or other details here if available */}
                      <div className="p-3 bg-light rounded">
                       {selectedTemplate.text ? (
                         <p className="text-dark mb-0">{selectedTemplate.text}</p>
                       ) : (
                         <p className="text-muted mb-0"><i>Template content preview not available.</i></p>
                       )}
                        {/* Display other relevant details like params or marketplace */}
                         {selectedTemplate?.marketplace_name && (
                          <small className="text-muted d-block mt-2">
                           Marketplace: {selectedTemplate.marketplace_name}
                          </small>
                        )}
                        {selectedTemplate?.params && selectedTemplate.params.length > 0 && (
                          <small className="text-muted d-block mt-1">
                            Required Params: {selectedTemplate.params.join(', ')}
                          </small>
                        )}
                      </div>
                    </div>
                    {/* Removed status badge */}
                  </div>
                </div>
              ) : (
                <div className="card h-100 bg-light">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    {/* Display loading indicator or placeholder when no template is selected */}
                    {!loading && templates && templates.length > 0 && (
                       <p className="text-muted">Select a template from the left to see details.</p>
                    )}
                    {/* Keep loading indicator if templates are still loading */}
                    {loading && (
                       <Spin
                         indicator={
                           <LoadingOutlined
                             className="selected-template-loading"
                             spin
                           />
                         }
                       />
                    )}
                     {/* Handle case where no templates are found */}
                    {!loading && (!templates || templates.length === 0) && (
                       <p className="text-muted">No templates found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </BodyDiv>
      </Modal.Body>
      <Modal.Footer>
        <FooterDiv>
          <div className="btn-group-footer">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Tooltip
              title={
                !Object.entries(data)?.some(([key, value]: any) => {
                  return value?.length > 0;
                })
                  ? "Please select recipients"
                  : !(campaign?.length > 0)
                  ? "Please enter a campaign name"
                  : !selectedTemplate
                  ? "Please select a template"
                  : null // No title if enabled
              }
              trigger={["hover"]}
              zIndex={100000}
              color="orange"
            >
              {/* Span needed for Tooltip to work on disabled Button */}
              <span>
                <Button
                  className="rapha-btn"
                  onClick={handleSubmit}
                  disabled={
                    !Object.entries(data)?.some(([_, value]: any) => {
                      return value?.length > 0;
                    }) ||
                    !(campaign?.length > 0) ||
                    !selectedTemplate
                  }
                  style={ // Prevent events interfering with Tooltip when disabled
                    !Object.entries(data)?.some(([_, value]: any) => {
                      return value?.length > 0;
                    }) || !(campaign?.length > 0) || !selectedTemplate
                      ? { pointerEvents: 'none' }
                      : {}
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
                    "Send RCS Message"
                  )}
                </Button>
              </span>
            </Tooltip>
          </div>
        </FooterDiv>
      </Modal.Footer>
    </>
  );
};

export default PromotionalRCS;
