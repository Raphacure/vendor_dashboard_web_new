import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Form, Input, Radio, Select, Button, message } from "antd";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import AddEmployeeStyled from "./AddEmployee.styled";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addNewClientEmpoyeeAPI } from "@/redux/slices/employees/EmployeeService";
import { useNavigate } from "react-router";

const AddEmployeePage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();

  // Departments list
  const departments = [
    { value: "HR", label: "HR" },
    { value: "IT", label: "IT" },
    { value: "Finance", label: "Finance" },
    { value: "Operations", label: "Operations" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Admin", label: "Admin" },
  ];

  // Handle form submission
  const handleSubmit = async (values: any) => {
    setLoading(true);

    // Simulate API call
    console.log("Form values:", values);
    try {
      const payload = {
        user: {
          first_name: values.name?.split(" ")[0],
          last_name: values.name?.split(" ")[1],
          gender: values.gender,
          designation: values.department,
          employee_id: values.emp_id,
          active_status: "active",
          email: values.emailId,
          phone: values.mobileNo,
        },
      };
      const result = await dispatch(addNewClientEmpoyeeAPI(payload));
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      }
      toast.success("Employee added successfully");
      navigate(-1);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <AddEmployeeStyled>
      <div className="!px-[39px] !py-[48.7px] bg-white rounded-lg">
        <div className="flex justify-between items-center !mb-[24.24px]">
          <h1 className="!text-[28px] font-bold text-gray-900 m-0">
            Add Employee
          </h1>
          <SecoundaryButton className="!py-[10px] !px-[20px]">
            Bulk Upload
          </SecoundaryButton>
        </div>

        <div>
          <div className="flex justify-between items-center !mb-[33.14px]">
            <h2 className="!text-[22px] font-medium m-0">Employee Details</h2>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Name */}
              <Form.Item
                name="name"
                label={<span className="text-sm">Name*</span>}
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input className="h-10 rounded-md" />
              </Form.Item>

              {/* Gender */}
              <Form.Item
                name="gender"
                label={<span className="text-sm">Gender*</span>}
                rules={[{ required: true, message: "Gender is required" }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-3 gap-[20px] h-[39px]">
                    <Radio.Button
                      value="Male"
                      className="px-3 py-1 rounded-full"
                    >
                      Male
                    </Radio.Button>
                    <Radio.Button
                      value="Female"
                      className="px-3 py-1 rounded-full"
                    >
                      Female
                    </Radio.Button>
                    <Radio.Button
                      value="Other"
                      className="px-3 py-1 rounded-full"
                    >
                      Other
                    </Radio.Button>
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Department */}
              <Form.Item
                name="department"
                label={<span className="text-sm">Department *</span>}
                rules={[{ required: true, message: "Department is required" }]}
              >
                <Select
                  placeholder="Search / select"
                  options={departments}
                  className="h-10 rounded-md"
                  suffixIcon={<ChevronDown size={20} />}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                />
              </Form.Item>

              {/* Site Id */}
              <Form.Item
                name="emp_id"
                label={<span className="text-sm">Employee Id</span>}
              >
                <Input className="h-10 rounded-md" />
              </Form.Item>

              {/* Employee Grade */}
              <Form.Item
                name="employeeGrade"
                label={<span className="text-sm">Employee Grade *</span>}
                rules={[
                  { required: true, message: "Employee Grade is required" },
                ]}
              >
                <Input className="h-10 rounded-md" />
              </Form.Item>

              {/* Email Id */}
              <Form.Item
                name="emailId"
                label={<span className="text-sm">Email Id*</span>}
                rules={[
                  { required: true, message: "Email ID is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input className="h-10 rounded-md" />
              </Form.Item>

              {/* Mobile No */}
              <Form.Item
                name="mobileNo"
                label={<span className="text-sm">Mobile No*</span>}
                rules={[{ required: true, message: "Mobile No is required" }, { pattern: /^\d{10}$/, message: "Mobile No must be exactly 10 digits" }]}
              >
                <Input className="h-10 rounded-md" maxLength={10} />
              </Form.Item>

              {/* Pincode */}
              <Form.Item
                name="pincode"
                label={<span className="text-sm">Pincode*</span>}
                rules={[{ required: true, message: "Pincode is required" }, { pattern: /^\d{1,6}$/, message: "Pincode must be at most 6 digits" }]}
              >
                <Input className="h-10 rounded-md" maxLength={6} />
              </Form.Item>
            </div>

            <div className="flex justify-end gap-[21px] !mt-[47.7px]">
              <SecoundaryButton
                className="!px-[20px] !py-[10px]"
                onClick={handleCancel}
              >
                Cancel
              </SecoundaryButton>
              <PrimaryButton
                type="primary"
                htmlType="submit"
                className="!px-[20px] !py-[10px]"
                loading={loading}
              >
                Book Now
              </PrimaryButton>
            </div>
          </Form>
        </div>
      </div>
    </AddEmployeeStyled>
  );
};

export default AddEmployeePage;
