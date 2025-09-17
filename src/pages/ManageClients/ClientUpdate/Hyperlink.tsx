import React, { useEffect, useState } from "react";
import { HyperlinkStyled } from "./Hyperlink.styled";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  createHyperlinkAPI,
  getHyperlinkAPI,
} from "../../../redux/slices/Clients/ClientsService";
import { useDispatch } from "react-redux";
import { Col, Form, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";

interface PackageDetail {
  id: number;
  type: string;
  limits: string;
  coverage: string;
  productDetails: string;
  serviceDetails: string;
}

const Hyperlink = ({ id }: any) => {
  const [subdomainKey, setSubdomainKey] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const dispatch = useDispatch();
  const [clientName, setClientName] = useState("");
  const [textColor, setTextColor] = useState("")
  const [bgColor, setBgColor] = useState("")

  const [agreedServices, setAgreedServices] = useState<{
    allowRetailLogin: boolean;
    hideOpd: boolean;
    hideCity: boolean;
    allowedServices: string[];
    allow_sso: null | boolean
  }>({
    allowRetailLogin: false,
    hideOpd: false,
    hideCity: false,
    allowedServices: [],
    allow_sso: null
  });

  const handleServiceToggle = (service: string) => {
    setAgreedServices((prev) => {
      const currentServices = prev.allowedServices;

      // Check if the service is already selected
      if (currentServices.includes(service)) {
        // Remove it if it's already selected
        return {
          ...prev,
          allowedServices: currentServices.filter((s: any) => s !== service),
        };
      } else {
        // Add it if it's not selected
        return {
          ...prev,
          allowedServices: [...currentServices, service],
        };
      }
    });
  };

  useEffect(() => {
    console.log("agreedServices : ", agreedServices);
  }, [agreedServices]);

  const packageInitDetails = {
    id: 0,
    type: "",
    limits: "",
    coverage: "",
    productDetails: "",
    serviceDetails: "",
  }

  const [details, setDetails] = useState<PackageDetail[]>([packageInitDetails]);

  const handleAddSection = () => {
    setDetails((prev) => [
      ...(prev ?? []),
      packageInitDetails,
    ]);
  };

  const handleDeleteSection = (id: any) => {
    console.log(id, details);

    setDetails((prev) => prev.filter((_, i) => i !== id));
  };

  const handleChange = (
    id: number,
    field: keyof PackageDetail,
    value: string
  ) => {
    setDetails(
      details.map((detail, i: number) => {
        return i === id ? { ...detail, [field]: value } : detail;
      })
    );
  };

  console.log(details);

  const allowedServicesPath : any = {
    Home: "/",
    "Doctor Consultation": "/doctor",
    "Lab Test": "/labtest",
    "Fitness": "/Gymlist",
    Pharmacy: "/pharmacy",
    "Domiciliary Care": "/domiciliarycare",
    "Mental Wellness": "/mentalwellness",
    "Dental Care": "/dentalcare",
    Ambulance: "/ambulance",
    Radiology: "/radiology",
    "Eye Care": "/eyecare",
    "Ayurveda": "/ayurveda"
  }

  const handleSave = async () => {
    const payload = {
      client: {
        subdomain_key: subdomainKey,
        agreed_services: {
          services: agreedServices.allowedServices?.map((service) => ({to: allowedServicesPath?.[service], name: service})),
          package_details: details?.map((detail, index) => ({
            no: index + 1,
            type: detail.type,
            limits: detail.limits,
            coverage: detail.coverage,
            product_details: detail.productDetails,
            service_details: detail.serviceDetails,
          })),
          booking_extra: [],
          allow_retail_login: agreedServices.allowRetailLogin,
          allow_sso: agreedServices?.allow_sso,
          about_us: aboutUs,
          hide_opd: agreedServices.hideOpd,
          hide_city: agreedServices.hideCity,
          book_appointment: null,
        },
        background_color: bgColor,
        text_color: textColor
      },
    };
    const res = (await dispatch(
      createHyperlinkAPI({
        id,
        payload,
      })
    )) as any;

    if (res?.error) {
      toast.error(res?.error?.message ?? "Something went wrong!.")
    } else {
      toast.success("Saved successfully!.")
    }

  };

  const handleFetch = async () => {
    const res = (await dispatch(
      getHyperlinkAPI({
        id,
      })
    )) as any;

    console.log("resp : ", res?.payload?.data);
    setClientName(res?.payload?.data?.client?.name ?? "");
    setSubdomainKey(res?.payload?.data?.client?.subdomain_key ?? []);

    setDetails(
      res?.payload?.data?.client?.agreed_services?.package_details?.map((pack: any, i: number) => {
        return {
          "no": pack?.no ?? i + 1,
          "type": pack?.type ?? "",
          "limits": pack?.limits ?? "",
          "coverage": pack?.coverage ?? "",
          "productDetails": pack?.product_details ?? "",
          "serviceDetails": pack?.service_details ?? ""
        }
      }) ?? []
    );
    setAboutUs(res?.payload?.data?.client?.agreed_services?.about_us ?? null);
    const service = res?.payload?.data?.client?.agreed_services?.services;
    setAgreedServices({
      allowRetailLogin:
        res?.payload?.data?.client?.agreed_services?.allow_retail_login ?? false,
      allow_sso: res?.payload?.data?.client?.agreed_services?.allow_sso ?? false,
      hideOpd: res?.payload?.data?.client?.agreed_services?.hide_opd ?? false,
      hideCity: res?.payload?.data?.client?.agreed_services?.hide_city ?? false,
      allowedServices: service?.map((serv: any) => serv?.name) ?? [],
    });
    setTextColor(res?.payload?.data?.client?.text_color)
    setBgColor(res?.payload?.data?.client?.background_color)
  };

  console.log(agreedServices, "agreedServices.allowedServices");

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <HyperlinkStyled>
      <div className="form-container">
        <h2>{clientName || "Client Name"}</h2>
        <div className="input-group">
          <label htmlFor="subdomain">https:// </label>
          <input
            type="text"
            id="subdomain"
            placeholder="Enter subdomain"
            className="subdomain-input"
            value={subdomainKey}
            onChange={(e) => setSubdomainKey(e.target.value)}
          />
          <span className="static-text">.raphacure.com</span>
        </div>

        <h4>Agreed Services</h4>
        <div className="checkbox-group">
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={agreedServices.allowRetailLogin}
              onChange={(e) =>
                setAgreedServices((prev) => ({
                  ...prev,
                  allowRetailLogin: e.target.checked,
                }))
              }
            />
            Allow Retail Login
          </label>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={agreedServices.hideOpd}
              onChange={(e) =>
                setAgreedServices((prev) => ({
                  ...prev,
                  hideOpd: e.target.checked,
                }))
              }
            />
            Hide OPD
          </label>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={agreedServices.hideCity}
              onChange={(e) =>
                setAgreedServices((prev) => ({
                  ...prev,
                  hideCity: e.target.checked,
                }))
              }
            />
            Hide City
          </label>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={agreedServices.allow_sso ?? false}
              onChange={(e) =>
                setAgreedServices((prev) => ({
                  ...prev,
                  allow_sso: e.target.checked,
                }))
              }
            />
            Allow SSO
          </label>
        </div>

        <div className="textarea-group">
          <label htmlFor="about-us">About us</label>
          <textarea
            id="about-us"
            placeholder="Enter details here"
            value={aboutUs}
            onChange={(e) => setAboutUs(e.target.value)}
          ></textarea>
        </div>

        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Background Color</Form.Label>
              <Form.Control
                type="text"
                name="bgColor"
                value={bgColor ?? ""}
                onChange={(e) => {
                  setBgColor(e?.target?.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="unit">
              <Form.Label>Text Color</Form.Label>
              <Form.Control
                type="text"
                name="textColor"
                value={textColor}
                onChange={(e) => {
                  setTextColor(e?.target?.value)
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="checkbox-group2 mt-3">
          <h4>Allowed Services</h4>
          <div className="services">
            {[
              "Home",
              "Doctor Consultation",
              "Lab Test",
              "Fitness",
              "Domiciliary Care",
              "Mental Wellness",
              "Dental Care",
              "Ambulance",
              "Radiology",
              "Pharmacy",
              "Ayurveda",
              "Eye Care",
            ]?.map((service, index) => (
              <label key={index} className="cursor-pointer">
                <input
                  type="checkbox"
                  
                  checked={agreedServices?.allowedServices?.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div className="package-container">
          <h2>
            Package Details
            <button className="add-button" onClick={handleAddSection}>
              <FaCirclePlus size={25} />
            </button>
          </h2>

          {details?.map((detail, i: number) => (
            <div key={i} className="package-row">
              <input
                type="text"
                placeholder="Type"
                value={detail.type}
                onChange={(e) => handleChange(i, "type", e.target.value)}
              />
              <input
                type="text"
                placeholder="Limits"
                value={detail.limits}
                onChange={(e) => handleChange(i, "limits", e.target.value)}
              />
              <input
                type="text"
                placeholder="Coverage"
                value={detail.coverage}
                onChange={(e) => handleChange(i, "coverage", e.target.value)}
              />
              <input
                type="text"
                placeholder="Product Details"
                value={detail.productDetails}
                onChange={(e) =>
                  handleChange(i, "productDetails", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Service Details"
                value={detail.serviceDetails}
                onChange={(e) =>
                  handleChange(i, "serviceDetails", e.target.value)
                }
              />
              <button
                className="delete-button"
                onClick={() => handleDeleteSection(i)}
              >
                <MdDelete size={25} />
              </button>
            </div>
          ))}

          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </HyperlinkStyled>
  );
};

export default Hyperlink;
