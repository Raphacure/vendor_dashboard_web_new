import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { CreateTicketBody } from "@/Scenes/apis/ticket/ticketAPI.types";
import { createTicketAPI } from "@/Scenes/apis/ticket/ticketsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { Form, Input } from "antd";
import toast from "react-hot-toast";

type prop = {
  isEdit: boolean;
  onHide: () => void;
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

const TicketForm = ({ isEdit, onHide }: prop) => {
  const [formData, setFormData] = useState<ticketFormDto>({
    subject: "",
    description: "",
    status: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      payload,
      signal,
    }: {
      payload: CreateTicketBody;
      signal: AbortSignal;
    }) => {
      return createTicketAPI(payload, { signal });
    },
    onSuccess: () => {
      toast.success("Ticket created successfully!");
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      onHide();
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to create ticket");
    },
  });

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "subject":
        if (!value.trim()) return "Title is required";
        if (value.length < 3) return "Title must be at least 3 characters";
        break;
    }
    return undefined;
  };

  const handleSubmit = useCallback(async () => {
    const newErrors: FormErrors = {};

    const fieldsToValidate: Array<keyof ticketFormDto> = [
      "subject",
      "description",
    ];

    fieldsToValidate.forEach((key) => {
      const value = formData[key];
      const error = validateField(key, value ?? "");
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    const { status, ...payload } = formData;

    mutation.mutate({
      payload: payload,
      signal: new AbortController().signal,
    });
  }, [formData, mutation]);

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
        <Form onFinish={handleSubmit} noValidate>
          <Form.Item
            label="Title"
            validateStatus={errors.subject ? "error" : ""}
            help={errors.subject}
            className="mb-3"
          >
            <Input
              type="text"
              placeholder="Enter title"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </Form.Item>
          {/* <Form.Item label="Status" className="mb-3">
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
          </Form.Item> */}

          <Form.Item
            label="Description"
            validateStatus={errors.description ? "error" : ""}
            help={errors.description}
            className="mb-3"
          >
            <Input.TextArea
              rows={3}
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={onHide}>Cancel</SecoundaryButton>
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
