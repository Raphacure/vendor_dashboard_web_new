import { Checkbox, Row, Select, Tooltip } from 'antd'
import React, { useMemo, useState } from 'react'
import { Button, Form, Modal, Tab } from 'react-bootstrap'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { createCommunicationLink, editCommunicationLink } from '../../../redux/slices/CommunicationMap/CommunicationService'
import WaTemplatesStyles from '../whatsApp/WaTemplatesStyles'
import { IoEye } from 'react-icons/io5'
import TemplatePreview from './TemplatePreview'
import { MdPreview } from 'react-icons/md'


type prop = {
  onClose: () => void,
  id: any,
  defaultSelectedData?: formDataDto,
  onSuccess: () => void
}

type formDataDto = {
  name: string,
  booking_type: string,
  booking_sub_type?: string,
  booking_status: string,
  booking_test_type?: string | null,
  to: string,
  wa_template_id: any,
  sms_template_id: any,
  email_template_id: any,
  active_status: "active" | "inactive",
  visit_type: string | null,
  topics: string[] | null
}

export type previewTemplateTypeDto = "WATHS-APP-TEMPLATE" | "EMAIL-TEMPLATE" | "SMS-TEMPLATE" | null

export const toOptions = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "HR",
    value: "hr",
  },
  {
    label: "Doctor",
    value: "doctor",
  },
  {
    label: "Vendor",
    value: "vendor",
  },
]

export const hrTopicsOptions = [
  { label: "Marketing", value: "Marketing" },
  { label: "Invoice", value: "Invoice" },
  { label: "Payment", value: "Payment" },
  { label: "Daily MIS ", value: "Daily MIS " },
  { label: "Monthly MIS", value: "Monthly MIS" },
]
export const bkSubType = [
  { label: "Instant Call", value: "Instant Call" },
  { label: "Video Call", value: "Video Call" },
  { label: "Audio Call", value: "Audio Call" },
  { label: "Chat", value: "Chat" },
]

const CreateCommunicationLinkModal = ({ onClose, id, defaultSelectedData, onSuccess }: prop) => {
  const {
    config
  } = useSelector(
    (state: any) => state?.communications
  );


  const [errorFields, setErrorFields] = useState<any>({
    name: false,
    booking_type: false,
    booking_status: false,
    to: false,
  })

  const [formData, setFormData] = useState<formDataDto>(defaultSelectedData ? defaultSelectedData : {
    name: "",
    booking_type: "",
    booking_sub_type: "",
    booking_status: "",
    booking_test_type: null,
    to: "",
    wa_template_id: null,
    sms_template_id: null,
    email_template_id: null,
    active_status: "inactive",
    visit_type: null,
    topics: null
  })
  const [previewTemplate, setpreviewTemplate] = useState<previewTemplateTypeDto>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)

  const bookingTestTypesOptions: any[] = config?.bookingTestTypes?.map((booking: string) => ({ label: booking, value: booking }))

  const dispatch = useDispatch()

  const handleSave = async () => {
    let res: any = null;

    let isValid = true;
    const errors: any = {
      name: false,
      booking_type: false,
      booking_test_type: false,
      visit_type: false,
      to: false,
    }

    Object.keys(errorFields)?.map((key: any) => {
      if (key == "booking_test_type") {
        // @ts-ignore
        if (formData?.booking_type == "test_booking" && !formData?.[key]) {
          isValid = false
          errors[key] = true;
        }
      }
      else if (key == "visit_type") {
        // @ts-ignore
        if (formData?.booking_type == "package_booking" && !formData?.[key]) {
          isValid = false
          errors[key] = true;
        }
      }
      // @ts-ignore
      else if (!formData?.[key] as any) {
        isValid = false
        errors[key] = true;
      }
    })
    console.log({ isValid, errors, formData });

    if (!isValid) {
      setErrorFields(errors)
      return
    }

    const body = { ...formData, from: "client" }

    if (formData?.booking_type != "virtual_consultation") {
      delete body["booking_sub_type"]
    }

    if (id) {
      res = await dispatch(editCommunicationLink({ id, payload: body }))
    } else {
      res = await dispatch(createCommunicationLink(body))
    }

    if (res?.payload?.success) {
      onSuccess()
      toast.success(`Communication link ${id ? 'Saved' : 'Created'} Successfully.`)
    } else {
      toast.error(res?.error?.message ?? `Failed to save data.`)
    }
  }
  return (
    <WaTemplatesStyles>
      <Modal show size='xl' onHide={onClose}>
        <Modal.Header closeButton={true} >
          <h4>{id ? 'Update' : 'Create'} Communication Link</h4>

        </Modal.Header>
        <Modal.Body>
          <div className='d-flex w-100'>
            <div className='w-100 pr-2'>
              {/* id */}
              {id && <Form.Group className=''>
                <Form.Label className='text-sm !mb-1'>ID (Non-editable)</Form.Label>
                <Form.Control value={id} readOnly />
              </Form.Group>}

              {/* name */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Name</Form.Label>
                <Form.Control value={formData?.name}
                  isInvalid={errorFields?.name ? true : false}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e?.target?.value })
                    setErrorFields({
                      ...errorFields, name: false
                    })
                  }} />
                {errorFields?.name && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Name is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>

              {/* Booking Type */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Booking Type</Form.Label>
                <Select
                  value={formData?.booking_type}
                  getPopupContainer={trigger => trigger.parentElement}
                  onChange={(e) => {
                    setFormData({ ...formData, "booking_type": e })
                    setErrorFields({
                      ...errorFields, booking_type: false
                    })
                  }}
                  className='w-100' options={config?.bookingTypes?.map((booking: any) => ({ label: booking, value: booking }))} />
                {errorFields?.booking_type && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Booking type is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>

              {/* Booking Sub Type */}
              {formData?.booking_type == "virtual_consultation" ? <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Booking Sub Type</Form.Label>
                <Select
                  value={formData?.booking_sub_type}
                  onChange={(e) => {
                    setFormData({ ...formData, "booking_sub_type": e })
                    setErrorFields({
                      ...errorFields, booking_sub_type: false
                    })
                  }}
                  getPopupContainer={trigger => trigger.parentElement}
                  className='w-100' options={bkSubType} />
                {errorFields?.booking_sub_type && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Booking sub type is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group> : <></>}

              {/* Booking Status */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Booking Status</Form.Label>
                <div className='w-100'>
                  <Select
                    showSearch
                    getPopupContainer={trigger => trigger.parentElement}
                    value={formData?.booking_status}
                    onChange={(e) => {
                      setFormData({ ...formData, "booking_status": e })
                      setErrorFields({
                        ...errorFields, booking_status: false
                      })
                    }}

                    className='w-100' options={config?.bookingStatuses?.map((booking: any) => ({ label: booking?.name, value: booking?.id }))} />
                </div>

                {errorFields?.booking_status && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Booking status is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>

              {/* Booking test type */}
              {formData?.booking_type == "test_booking" && <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Booking Test Type</Form.Label>
                <div className='w-100'>
                  <Select
                    value={formData?.booking_test_type}
                    onChange={(e) => {
                      setFormData({ ...formData, "booking_test_type": e })
                      setErrorFields({
                        ...errorFields, booking_test_type: false
                      })
                    }}
                    getPopupContainer={trigger => trigger.parentElement}

                    className='w-100' options={config?.bookingTestTypes?.map((booking: any) => ({ label: booking, value: booking }))} />
                </div>
                {errorFields?.booking_test_type && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Booking test type is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>}

              {/* Booking visit type */}
              {formData?.booking_type == "package_booking" && <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Booking Visit Type</Form.Label>
                <div className='w-100'>
                  <Select
                    value={formData?.visit_type}
                    onChange={(e) => {
                      setFormData({ ...formData, "visit_type": e })
                      setErrorFields({
                        ...errorFields, visit_type: false
                      })
                    }}
                    getPopupContainer={trigger => trigger.parentElement}
                    className='w-100' options={
                      config?.bookingPackageVistTypes?.map((visitType: any) => ({ label: visitType, value: visitType }))
                    } />
                </div>
                {errorFields?.visit_type && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      Booking visit type is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>}

              {/* To */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>To</Form.Label>
                <Select
                  getPopupContainer={trigger => trigger.parentElement}

                  value={formData?.to}
                  onChange={(e) => {
                    setFormData({ ...formData, "to": e })
                    setErrorFields({
                      ...errorFields, to: false
                    })
                  }}
                  className='w-100' options={toOptions} />
                {errorFields?.to && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      To is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group>
              {formData?.to == "hr" ? <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>HR Topics </Form.Label>
                <Select
                  mode='multiple'
                  value={formData?.topics}
                  onChange={(e) => {
                    setFormData({ ...formData, "topics": e })
                    setErrorFields({
                      ...errorFields, to: false
                    })
                  }}
                  getPopupContainer={trigger => trigger.parentElement}
                  className='w-100' options={hrTopicsOptions} />
                {errorFields?.to && (
                  <WaTemplatesStyles>
                    <p className='error mt-1'>
                      To is required!.
                    </p>
                  </WaTemplatesStyles>
                )}
              </Form.Group> : <></>}

              {/* Whatsapp template Id */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Whats App Template Id</Form.Label>

                <div className='d-flex align-items-center'>
                  <Select
                    getPopupContainer={trigger => trigger.parentElement}
                    showSearch={true}
                    value={formData?.wa_template_id}
                    onChange={(e) => {
                      setFormData({ ...formData, "wa_template_id": e })
                      // setErrorFields({
                      //   ...errorFields, wa_template_id: false
                      // })
                    }}
                    className='w-100'
                    options={[{ label: 'Select template', value: null }, ...config?.waTemplates?.map((booking: any) => ({ label: booking?.name, value: booking?.id }))]} />
                  {formData?.wa_template_id ?
                    <MdPreview
                      onClick={() => {
                        setpreviewTemplate("WATHS-APP-TEMPLATE")
                        setSelectedTemplate(config?.waTemplates?.find((template: any) => template?.id == formData?.wa_template_id))
                      }}
                      className={`ml-2 cursor-pointer`} title='Preview' />
                    : <></>}
                </div>
              </Form.Group>

              {/* email template Id */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>Email Template Id</Form.Label>

                <div className='d-flex align-items-center'>
                  <Select
                    getPopupContainer={trigger => trigger.parentElement}
                    showSearch={true}
                    value={formData?.email_template_id}
                    onChange={(e) => {
                      setFormData({ ...formData, "email_template_id": e })
                      // setErrorFields({
                      //   ...errorFields, email_template_id: false
                      // })
                    }}
                    className='w-100'
                    options={[{ label: "Select template", value: null }, ...config?.emailTemplates?.map((booking: any) => ({ label: booking?.name, value: booking?.id }))]} />
                  {formData?.email_template_id ?
                    <MdPreview
                      onClick={() => {
                        setpreviewTemplate("EMAIL-TEMPLATE")
                        setSelectedTemplate(config?.emailTemplates?.find((template: any) => template?.id == formData?.email_template_id))
                      }}
                      className={`ml-2 cursor-pointer`} title='Preview' /> : <></>}
                </div>
              </Form.Group>
              {/* SMS template Id */}
              <Form.Group className='mt-2'>
                <Form.Label className='text-sm !mb-1'>SMS Template Id</Form.Label>
                <div className='d-flex align-items-center'>
                  <Select
                    getPopupContainer={trigger => trigger.parentElement}
                    showSearch={true}
                    value={formData?.sms_template_id}
                    onChange={(e) => {
                      setFormData({ ...formData, "sms_template_id": e })
                    }}
                    className='w-100'
                    options={[{ label: "Select template", value: null }, ...(config?.smsTemplates?.map((booking: any) => ({ label: booking?.name, value: booking?.id })) ?? [])]} />
                  {formData?.sms_template_id ?
                    <MdPreview
                      onClick={() => {
                        setpreviewTemplate("SMS-TEMPLATE")
                        setSelectedTemplate(config?.smsTemplates?.find((template: any) => template?.id == formData?.sms_template_id))
                      }}
                      className={`ml-2 cursor-pointer`} title='Preview' /> : <></>}
                </div>
              </Form.Group>

              {/* Active status */}
              <div className='d-flex mt-2 '>
                <input
                  onChange={(e) => {
                    console.log(e?.target?.checked);

                    setFormData({ ...formData, active_status: e?.target?.checked ? 'active' : "inactive" })
                  }}
                  checked={formData?.active_status == "active"}
                  type="checkbox" className='mr-2' name="active_status" id="active_status" />
                <Form.Label className='text-sm !mb-1 !ml-3' id='active_status' htmlFor='active_status'>Active Status </Form.Label>
              </div>
            </div>

            {previewTemplate ? <div className='border-l w-100 px-2'>
              <h6 className='text-capitalize'>{previewTemplate?.replace("-", " ")?.toLowerCase()} Preview</h6>
              <TemplatePreview data={selectedTemplate} templateType={previewTemplate} />
            </div> : <></>}
          </div>


        </Modal.Body>
        <Modal.Footer>
          <div className="actions-btn-sec mt-2 d-flex justify-content-end">
            <Button className="assign-button" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </WaTemplatesStyles>
  )
}

export default CreateCommunicationLinkModal