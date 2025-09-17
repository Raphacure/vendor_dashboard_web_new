import { Select } from "antd"
import { useState, useMemo, useRef } from "react"
import { Modal, Row, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { smsTemplateCreation, smsTemplateUpdate } from "../../../redux/slices/CommunicationMap/CommunicationService"
import WaTemplatesStyles from "../whatsApp/WaTemplatesStyles"
import { update } from "lodash"


type prop = {
    template: any,
    onClose: () => void,
    isEdit: boolean
    onSuccess: () => void
}


const SmsTemplateEditor = ({ template, onClose, onSuccess, isEdit }: prop) => {
    console.log(template);

    const data = template?.wa_components?.find((ele: any) => ele?.type == "BODY")

    const paramsCount = data?.text?.trim()?.split(/{{\d+}}/g)?.length
    const [paramsVal, setparamValue] = useState(template?.params ?? [])

    let text = useMemo(() => {
        if (!isEdit) return ""
        let startIndex = 0;
        let finalText = "";
        let matches = [...template?.text?.matchAll(/\{#(.*?)#\}/g)];

        matches.forEach((match, i) => {
            let index = match.index;
            finalText += template.text.substring(startIndex, index);
            finalText += `{#${template?.params?.[i] ?? 'var'}#}`;
            startIndex = index + match[0].length;
        });

        if (startIndex < template.text.length) {
            finalText += template.text.substring(startIndex);
        }

        return finalText;
    }, [template, isEdit]);


    const [body, setBody] = useState(text ?? '')
    const [name, setName] = useState(template?.name ?? "")
    const [subject, setSubject] = useState(template?.subject ?? "")
    const dispatch = useDispatch()

    const [selectedText, setSelectedText] = useState("");
    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);
    const [showOption, setShowOption] = useState(false)
    const [index, setIndex] = useState(-1)
    const [isBody, setIsBody] = useState(false)
    const textareaRef = useRef(null);
    const subjectRef = useRef(null);

    let variableStartsWith = '{#'
    let variableEndsWith = '#}'


    const { paramsOptions } = useSelector(
        (state: any) => state?.communications
    );

    const options = useMemo(() => {
        return paramsOptions?.map((item: any) => ({ label: item, value: item }))
    }, [paramsOptions])

    const saveTemplateVariables = async () => {
        if (!name || !body) {
            toast.error("Fill all fields.")
            return
        }
        const allVariables = [...body.matchAll(/\{#(.*?)#\}/g)].map((match: any) => match[1]);
        const updatedBody = body.replace(/\{#(.*?)#\}/g, "{#var#}");
        if (allVariables?.find((ele) => ele == 'var')) {
            toast.error('Map all variable correctly!.')
            return
        }
        const data = { "smstemplate": { "name": name, "text": updatedBody, params: allVariables, from: "client"  } }

        let res: any = null;
        if (isEdit) {
            res = await dispatch(smsTemplateUpdate({ id: template?.id, payload: data }))
        } else {
            res = await dispatch(smsTemplateCreation(data))
        }

        if (res?.payload?.success) {
            toast.success("Temnplate saved successfully!.")
            onSuccess()
            return
        }
        toast.error(res?.error?.message)
    }

    const handleTextSelection = (isTextArea: boolean) => {
        let textarea: any = textareaRef.current;
        if (!textarea) return;

        let selectionStart = textarea.selectionStart;
        let selectionEnd = textarea.selectionEnd;

        const totalLen = textarea.value.length;
        console.log({ selectionStart, selectionEnd });


        if (selectionStart === selectionEnd) return;

        // Expand selection by checking for `{#` before and `#}` after
        while (selectionStart > 1 && `${textarea.value.charAt(selectionStart - 1)}${textarea.value.charAt(selectionStart)}` !== variableStartsWith && `${textarea.value.charAt(selectionStart - 1)}${textarea.value.charAt(selectionStart)}` != variableEndsWith) {
            console.log("selectionStart", `${textarea.value.charAt(selectionStart - 1)}${textarea.value.charAt(selectionStart)}`, `${textarea.value.charAt(selectionStart - 1)}${textarea.value.charAt(selectionStart)}`);

            selectionStart--;
        }
        while (selectionEnd < (totalLen - 1) && `${textarea.value.charAt(selectionEnd)}${textarea.value.charAt(selectionEnd + 1)}` !== variableEndsWith && `${textarea.value.charAt(selectionEnd + 1)}${textarea.value.charAt(selectionEnd)}` !== variableStartsWith) {
            console.log("selectionEnd", selectionEnd);
            selectionEnd++;
        }
        selectionStart--
        selectionEnd++


        if (`${textarea.value.charAt(selectionStart)}${textarea.value.charAt(selectionStart + 1)}` === variableStartsWith && `${textarea.value.charAt(selectionEnd - 1)}${textarea.value.charAt(selectionEnd)}` === variableEndsWith) {
            textarea.selectionStart = selectionStart;
            textarea.selectionEnd = selectionEnd + 1;

            console.log({ selectionStart, selectionEnd });
            console.log(textarea?.value?.substring(selectionStart + 2, selectionEnd - 1));

            const allVariables = [...textarea.value.matchAll(/\{#(.*?)#\}/g)];
            let varFoundAt = allVariables.findIndex(match => match.index === selectionStart);
            setIndex(varFoundAt)

            // here i need to get current selected var number
            setSelectedText(textarea?.value?.substring(selectionStart + 2, selectionEnd - 1)?.trim());
            setSelectionStart(selectionStart);
            setSelectionEnd(selectionEnd + 1);
            setShowOption(true)
        } else {
            return;
        }
    };



    return (
        <Modal className="!p-3" show={true} size='xl' centered>
            <Modal.Header closeButton
                onHide={onClose}
            >
                <div className="min-w-[90vw] max-w-[95vw]">
                    <div className="mb-2">
                        <strong>ID:</strong> {template?.id}
                    </div>
                    <div className="mb-1 d-flex justify-content-start align-items-center">
                        <strong className="min-w-[55px]">Name {" "}:</strong>
                        <Form.Control
                            value={name}
                            onChange={(e: any) => setName(e?.target?.value ?? "")}
                            className="!ml-2"
                        />
                    </div>

                </div>
            </Modal.Header>
            <Modal.Body className='m-0 p-0 !px-3'>
                <WaTemplatesStyles className='d-flex'>
                    <Row className="w-100">

                        <Col sm={6} className=' border-r p-3'>
                            <strong className="">Text {" "}:</strong>

                            <div className="mt-1">
                                <textarea
                                    ref={textareaRef}
                                    value={body}
                                    // onMouseUp={handleTextSelection}
                                    onDoubleClick={() => handleTextSelection(true)}
                                    placeholder="Write your SMS content here. Use {#var#} for dynamic fields."
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

                                        const selectedVariable = `{#${selectedOption}#}`;

                                        const updatedText =
                                            body.substring(0, selectionStart) +
                                            selectedVariable +
                                            body.substring(selectionEnd);
                                        setBody(updatedText);
                                        setShowOption(false)
                                    }}
                                />
                            </div>}

                        </Col>
                        <Col sm={6}>
                            <div className="mt-3 mb-3">
                                <strong >SMS Message Preview</strong>
                            </div>
                            <div className="smsPreview max-h-[60vh] overflow-y-auto pr-3">
                                <div className="preview-body"
                                    dangerouslySetInnerHTML={{ __html: body?.toString()?.replace("\n", "<br>") ?? "" }}
                                />
                            </div>
                        </Col>
                    </Row>
                </WaTemplatesStyles>

            </Modal.Body>
        </Modal>
    )
}

export default SmsTemplateEditor