import React, { useMemo, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import WaTemplatesStyles from "./WaTemplatesStyles";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { waTemplateParamsUpdate } from "../../../redux/slices/CommunicationMap/CommunicationService";
import { toast } from "react-hot-toast";
import WaTemplatePreview from "./WaTemplatePreview";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { formatStatus } from "@/lib/common";

type prop = {
  template: any;
  onClose: () => void;
  onSuccess: () => void;
};

const WhatsAppTemplateEditor = ({ template, onClose, onSuccess }: prop) => {
  const data = template?.wa_components?.find((ele: any) => ele?.type == "BODY");

  const splitedData = data?.text?.trim()?.split(/{{\d+}}/g);
  const paramsCount = splitedData?.length - 1;

  const [paramsVal, setparamValue] = useState(
    Array.isArray(template?.params) && template?.params?.length == paramsCount
      ? template?.params
      : new Array(paramsCount)?.fill(null)
  );
  const dispatch = useDispatch();

  console.log(paramsVal);

  const { paramsOptions } = useSelector((state: any) => state?.communications);

  const options = useMemo(() => {
    return paramsOptions?.map((item: any) => ({ label: item, value: item }));
  }, [paramsOptions]);

  const saveTemplateVariables = async () => {
    if (paramsCount != paramsVal?.length) {
      toast.error("Please fill all value.");
      return;
    }
    const res: any = await dispatch(
      waTemplateParamsUpdate({
        id: template?.id,
        payload: { watemplate: { params: paramsVal } },
      })
    );

    if (res?.payload?.success) {
      toast.success("Saved Successfully.");
      onSuccess();
    } else {
      toast.error(res?.error?.message ?? "Faild to save template variables");
    }
  };

  return (
    <CustomModal headerClassName="px-1" open={true} handleClose={onClose} title={template?.name}>
      <CustomModal.Body>
        <WaTemplatesStyles className="d-flex px-3">
          <Row>
            <Col sm={8} className="border-r p-3">
              <div className="w-100 d-flex justify-content-between align-items-center">
                <h5 className="title mb-1 mr-2 w-100">{formatStatus(template?.id)}</h5>
                <div
                  className={` ${template?.is_ready ? "ready" : "notReady"}`}
                ></div>
              </div>
              <div className="pt-1 sub-title">
                <strong>Whatsapp Status:</strong>
                <span className="ml-2">{template?.wa_status}</span>
              </div>

              {/* template */}

              <div className="left-container">
                {splitedData?.map((item: any, i: number) => {
                  // if (!item) return <></>
                  return (
                    <div className="mb-2">
                      <div className="mb-1">{item}</div>
                      {i !== splitedData?.length - 1 && item != "" ? (
                        <Select
                          className="w-50 "
                          allowClear
                          value={paramsVal?.[i] ?? ""}
                          onChange={(e) => {
                            setparamValue((prev: any[]) =>
                              prev?.map((ele: any, index: number) => {
                                console.log(ele);
                                if (index == i) {
                                  return e;
                                }
                                return ele;
                              })
                            );
                          }}
                          options={options}
                          showSearch={true}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              {/* paramsVal?.filter((ele:any) => ele != null)?.length  == paramsCount &&  */}
            </Col>
            <Col sm={4}>
              <div className="title m-0 p-0 pb-3 pt-3">
                WhatsApp Message Preview
              </div>
              <WaTemplatePreview template={template} />
            </Col>
          </Row>
        </WaTemplatesStyles>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton>Cancel</SecoundaryButton>
          <PrimaryButton onClick={saveTemplateVariables}>Save</PrimaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default WhatsAppTemplateEditor;
