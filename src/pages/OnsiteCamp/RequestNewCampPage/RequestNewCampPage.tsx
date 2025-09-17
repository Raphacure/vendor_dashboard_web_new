import { FC, useState } from "react";
import { RequestNewCampPageContainer } from "./RequestNewCampPage.styled";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { Form, Input, InputNumber, DatePicker, Typography } from "antd";
import type { Rule } from "antd/es/form";
import SuccessFullModal from "@/components/custom/modal/SucessFullModal/SucessFullModal";
import { useNavigate } from "react-router";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { requestNewCampBreadcrumbsItems } from "@/constants/breadcrumbs.constants";
const { TextArea } = Input;
const { Title } = Typography;

const RequestNewCampPage: FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
    // Handle form submission logic here
    setOpen(true);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} must be a valid number!",
    },
  };

  const requiredRule: Rule = { required: true };

  //modal
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <RequestNewCampPageContainer>
      <div className="!p-3 sm:!py-[44.86px] sm:!px-[39.92px]">
        <CommonBreadCrumbs className="mb-2" items={requestNewCampBreadcrumbsItems} />

        <p className="!text-[28px] font-semibold font-[Inter] !mb-[36.14px]">
          Request New Camp
        </p>


        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            campType: "Pristion care clinic",
          }}
          validateMessages={validateMessages}
        >
          <div className="mb-6">
            <Title level={3} className="!text-[22px] font-semibold font-[Inter] !mb-[27.88px]">
              Camp Details
            </Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
              <Form.Item
                name="campType"
                label="Camp Type"
                rules={[requiredRule]}
              >
                <Input className="w-full input-height-54" />
              </Form.Item>

              <Form.Item
                name="employees"
                label="Number Of Employees"
                rules={[
                  requiredRule,
                  {
                    type: "number",
                    min: 1,
                    message: "Must be at least 1 employee",
                  },
                ]}
              >
                <InputNumber className="w-full input-height-54" />
              </Form.Item>

              <Form.Item
                name="startDate"
                label="Start Date"
                rules={[requiredRule]}
              >
                <DatePicker
                  className="w-full input-height-54"
                  format="YYYY-MM-DD"
                />
              </Form.Item>

              <Form.Item
                name="endDate"
                label="End Date"
                rules={[
                  requiredRule,
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        !getFieldValue("startDate") ||
                        value.isAfter(getFieldValue("startDate"))
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("End date must be after start date")
                      );
                    },
                  }),
                ]}
              >
                <DatePicker
                  className="w-full input-height-54"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item name="note" label="Note" className="mb-8">
            <TextArea rows={5} />
          </Form.Item>

          <div className="flex justify-end gap-2">
            <SecoundaryButton className="!px-[20px] !py-[10px]" type="button" onClick={() => form.resetFields()}>
              Cancel
            </SecoundaryButton>
            <PrimaryButton className="!px-[20px] !py-[10px]" type="submit">Request</PrimaryButton>
          </div>
        </Form>
      </div>
      <SuccessFullModal
        open={open}
        autoClose={false}
        handleClose={handleClose}
        data={{
          title: "Camp Request Submitted",
          message:
            "Our team will review the availability and logistics, and get back to you with the proposed dates and details shortly.",
          whatsNext: [
            <p>
              <b>We're reviewing</b> your request and checking availability.
            </p>,
            <p>
              <b>Our team will contact</b> you for any details needed.
            </p>,
            <p>
              <b>You'll get a confirmation</b> once it's scheduled.
            </p>,
          ],
        }}
        handleBack={() => {
          navigate("/onsite-camp");
        }}
      />
    </RequestNewCampPageContainer>
  );
};

export default RequestNewCampPage;
