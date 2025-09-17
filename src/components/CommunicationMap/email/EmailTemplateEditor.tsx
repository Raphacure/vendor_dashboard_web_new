import { Button, Select } from "antd"
import { useState, useMemo, useRef } from "react"
import { Modal, Row, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { emailTemplateCreation, emailTemplateUpdate } from "../../../redux/slices/CommunicationMap/CommunicationService"
import WaTemplatesStyles from "../whatsApp/WaTemplatesStyles"
import EmailTemplatePreview from "./EmailTemplatePreview"
import { emailTypeOptions } from "./ManageEmailTemplates"

import 'antd/dist/reset.css';
import { IoClose } from "react-icons/io5"

type prop = {
    template: any,
    onClose: () => void,
    isEdit: boolean
    onSuccess: () => void
}


const EmailTemplateEditor = ({ template, onClose, onSuccess, isEdit }: prop) => {
    const data = template?.wa_components?.find((ele: any) => ele?.type == "BODY")
    const paramsCount = data?.text?.trim()?.split(/{{\d+}}/g)?.length
    const [paramsVal, setparamValue] = useState(template?.params ?? [])
    const [body, setBody] = useState(template?.text ? template?.text?.toString()?.replaceAll("<br>", "\n") ?? "" : '')
    const [name, setName] = useState(template?.name ?? "")
    const [subject, setSubject] = useState(template?.subject ?? "")
    const [type, setType] = useState(template?.type ?? null)
    const dispatch = useDispatch()

    const [selectedText, setSelectedText] = useState("");
    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);
    const [showOption, setShowOption] = useState(false)
    const [isBody, setIsBody] = useState(false)
    const textareaRef = useRef(null);
    const subjectRef = useRef(null);


    const { paramsOptions } = useSelector(
        (state: any) => state?.communications
    );


    const options = useMemo(() => {
        return paramsOptions?.map((item: any) => ({ label: item, value: item }))
    }, [paramsOptions])

    const saveTemplateVariables = async () => {
        if (!name || !body || !subject || !type) {
            toast.error("Fill all fields.")
            return
        }
        const data = { "emailtemplate": { "name": name, "text": body ? body?.toString()?.replaceAll("\n", "<br>") : "", "subject": subject, type, from: "client" } }
        let res: any = null;
        if (isEdit) {
            res = await dispatch(emailTemplateUpdate({ id: template?.id, payload: data }))
        } else {
            res = await dispatch(emailTemplateCreation(data))
        }

        if (res?.payload?.success) {
            toast.success("Temnplate saved successfully!.")
            onSuccess()
            return
        }
        toast.error(res?.error?.message)
    }

    const handleTextSelection = (isTextArea: boolean) => {
        let textarea: any = null
        if (isTextArea) {
            textarea = textareaRef.current;
        } else {
            textarea = subjectRef.current;
        }
        if (!textarea) return;

        let selectionStart = textarea.selectionStart;
        let selectionEnd = textarea.selectionEnd;
        const selectedTextTemp = textarea.value?.substring(selectionStart, selectionEnd);

        const totalLen = textarea.value.length;

        if (selectionStart === selectionEnd) return;

        // Expand selection by checking for `[` before and `]` after
        while (selectionStart > 0 && textarea.value.charAt(selectionStart) !== '[' && textarea.value.charAt(selectionStart) != ']') {
            console.log("selectionStart", selectionStart);

            selectionStart--;
        }
        while (selectionEnd < totalLen && textarea.value.charAt(selectionEnd) !== ']' && textarea.value.charAt(selectionEnd) !== '[') {
            console.log("selectionEnd", selectionEnd);
            selectionEnd++;
        }


        if (textarea.value.charAt(selectionStart) === '[' && textarea.value.charAt(selectionEnd) === ']') {
            textarea.selectionStart = selectionStart;
            textarea.selectionEnd = selectionEnd + 1;

            setIsBody(isTextArea)
            setSelectedText(selectedTextTemp?.trim());
            setSelectionStart(selectionStart);
            setSelectionEnd(selectionEnd + 1);
            setShowOption(true)
        } else {
            return;
        }
    };



    return (
        <WaTemplatesStyles>
            <Modal show={true} size='lg' className="!p-3" centered>
                <Modal.Header className="!px-3"
                    // onHide={onClose}
                >
                    <div className="w-100 flex justify-between items-start">
                        <div>
                            <div className="mb-2">
                                <strong>ID:</strong> {template?.id}
                            </div>
                            <div className="mb-1 d-flex justify-content-start align-items-center">
                                <strong className="!mr-3">Name:</strong>
                                <Form.Control
                                    value={name}
                                    onChange={(e: any) => setName(e?.target?.value ?? "")}
                                    className="ml-2"
                                />
                            </div>
                            <div className="w-full mt-3 mb-1 d-flex justify-content-start align-items-center">
                                <strong className="!mr-3 min-w-[50px]">Type:</strong>
                                <Select
                                    style={{ minWidth: "250px" }}
                                    className="!w-100 ml-3 !h-[38px]"
                                    allowClear
                                    value={type}
                                    onChange={setType}
                                    options={emailTypeOptions}
                                    showSearch
                                    getPopupContainer={trigger => trigger.parentElement}
                                />

                            </div>

                        </div>
                        <Button type="default" onClick={onClose}><IoClose className="cursor-pointer"  /></Button>

                    </div>
                </Modal.Header>
                <Modal.Body className='m-0 p-0 !pl-3 !pr-3'>
                    <WaTemplatesStyles className='d-flex'>
                        <Row className=" w-full">

                            <Col sm={6} className='min-w-[250px] max-w-[400px] border-r p-3'>
                                <strong className="">Edit Template</strong>

                                <div className="mb-1 mt-3 d-flex justify-content-start align-items-center">
                                    <strong className="!mr-3 min-w-[70px]">Subject :</strong>
                                    <Form.Control
                                        ref={subjectRef}
                                        value={subject}
                                        onDoubleClick={() => handleTextSelection(false)}
                                        onChange={(e: any) => setSubject(e?.target?.value ?? "")}
                                        className="ml-2"
                                    />
                                </div>

                                <div className="mt-3">
                                    <strong>Body :</strong>
                                    <textarea
                                        ref={textareaRef}
                                        value={body}
                                        // onMouseUp={handleTextSelection}
                                        onDoubleClick={() => handleTextSelection(true)}
                                        placeholder="Write your email content here. Use [field_name] for dynamic fields."
                                        onChange={(e: any) => setBody(e?.target?.value ?? "")}
                                        className="textArea" name="" id=""
                                    ></textarea>
                                </div>
                                <button
                                    onClick={saveTemplateVariables}
                                    className='save-btn'>Save</button>

                                {showOption && <div className="mt-3">
                                    Select dynamic field
                                    <Select
                                        className="w-100 mt-1"
                                        options={options}
                                        showSearch
                                        getPopupContainer={trigger => trigger.parentElement}
                                        value={paramsOptions?.includes(selectedText) ? selectedText : null}
                                        onChange={(selectedOption: any) => {
                                            if (!selectedOption || selectionStart === null || selectionEnd === null) return;

                                            const selectedVariable = `[${selectedOption}]`;


                                            if (isBody) {
                                                const updatedText =
                                                    body.substring(0, selectionStart) +
                                                    selectedVariable +
                                                    body.substring(selectionEnd);
                                                setBody(updatedText);
                                            }
                                            else {
                                                const updatedText =
                                                    subject.substring(0, selectionStart) +
                                                    selectedVariable +
                                                    subject.substring(selectionEnd);
                                                setSubject(updatedText)
                                            }
                                            setShowOption(false)
                                        }}
                                    />
                                </div>}

                            </Col>
                            <Col sm={6}>
                                <div className="mt-3 mb-3">
                                    <strong >Email Message Preview</strong>
                                    <EmailTemplatePreview body={body} />
                                </div>

                            </Col>
                        </Row>
                    </WaTemplatesStyles>

                </Modal.Body>
            </Modal>
        </WaTemplatesStyles>
    )
}

export default EmailTemplateEditor