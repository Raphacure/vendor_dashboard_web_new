import {
  createTickets,
  updateTickets,
} from "@/redux/slices/tickets/ticketService";
import { Select } from "antd";
import React, { useCallback, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import CustomModal from "../custom/modal/CustomModal/CustomModal";
import PrimaryButton from "../custom/button/PrimaryButton";
import SecoundaryButton from "../custom/button/SecoundaryButton";

type prop = {
  isEdit: boolean;
  onHide: () => void;
  onSuccess: () => void;
  defaultData?: ticketFormDto;
  selectedId?: number;
};

type ticketFormDto = {
  subject: string;
  description?: string;
  status?: string;
};

type FormErrors = {
  subject?: string;
  description?: string;
  status?: string;
};

const TicketForm = ({
  isEdit,
  onHide,
  onSuccess,
  defaultData,
  selectedId,
}: prop) => {
  const [formData, setFormData] = useState<ticketFormDto>(
    defaultData ?? {
      subject: "",
      description: "",
      status: "",
    }
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useDispatch();

  const validateField = useCallback(
    (name: string, value: string): string | undefined => {
      switch (name) {
        case "subject":
          if (!value.trim()) return "Title is required";
          if (value.length < 3) return "Title must be at least 3 characters";
          break;
      }
      return undefined;
    },
    []
  );

  console.log(errors, "errors");

  const handleSubmit = useCallback(async () => {
    const newErrors: FormErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value ?? "");
      if (error) newErrors[key as keyof ticketFormDto] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    console.log("Form submitted:", formData);
    let res: any = null;

    if (isEdit) {
      res = await dispatch(updateTickets({ id: selectedId, body: formData }));
    } else {
      res = await dispatch(createTickets({...formData,status:"open"}));
    }

    if (res?.payload?.success) {
      toast.success(`Ticket ${isEdit ? "updated" : "created"} successfully!.`);
      onSuccess();
    } else {
      toast.error(res?.error?.message || "Something went wrong!.");
    }
  }, [formData, validateField, isEdit, selectedId]);

  const handleChange = useCallback((e: any) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <CustomModal
      open={true}
      handleClose={onHide}
      title={`${isEdit ? "Edit" : "Create"} Ticket`}
    >
      <CustomModal.Body>
        <Form noValidate>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              isInvalid={!!errors.subject}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Status</Form.Label>
            <br />
            <Select
              className="w-full !h-[38px]"
              getPopupContainer={(trigger) => trigger.parentElement}
              value={formData?.status || null}
              options={[
                {
                  label: "In Progress",
                  value: "in-progress",
                },
                {
                  label: "Open",
                  value: "open",
                },
                {
                  label: "Closed",
                  value: "closed",
                },
              ]}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, status: e }));
              }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={onHide}>
            Cancel
          </SecoundaryButton>
          <PrimaryButton
            className="!bg-[#252b61] border-0 !border-transparent !text-white"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default TicketForm;
