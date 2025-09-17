import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEmailTemplates, getSmsTemplate, getWaTemplates } from "../../../redux/slices/CommunicationMap/CommunicationService"
import { Button, Form, Modal } from "react-bootstrap"
import { Select, Switch, Table } from "antd"
import EmailTemplateEditor from "../../CommunicationMap/email/EmailTemplateEditor"
import { getAssociateUsersApi, sendClientUserCommunication } from "../../../redux/slices/Clients/ClientsService"
import { toast } from "react-toastify"
import { RootState } from "@/redux/store"
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable"

type prop = {
    sectionName: "EMAIL" | "WHATSAPP" | "SMS",
    clientId: string
}

const SendCommunicationForm = ({ sectionName, clientId }: prop) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [templates, setTemplates] = useState([])
    const [showAddTemplateForm, setShowAddTemplateForm] = useState(false)
    const [users, setUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [selectedGender, setSelectedGender] = useState<any>(null)
    const [selectedAge, setSelectedAge] = useState<any>(null)

    const [searchUser, setSearchUser] = useState("")

    const columns: any = [
        {
            label: "Contact name",
            width: 150,
            dataIndex: "name",
            key: "name",
            render: (_: any, record: any) =>
                `${record?.first_name ?? ""} ${record?.last_name ?? ""}`,
        },
        {
            label: "Mobile number",
            width: 150,
            dataIndex: "phone",
            key: "phone",
        },
        {
            label: "Email id",
            width: 150,
            dataIndex: "email",
            key: "email",
        },

        {
            label: "Active",
            width: 100,
            key: "status",
            render: (itemV: any) => {
                return (
                    <>
                        {itemV?.active_status}
                    </>
                );
            },
        },
    ];

    const getAllWhatsAppRTemplates = useCallback(async () => {
        const res: any = await dispatch(getWaTemplates({}))
        if (res?.payload?.data) {
            setTemplates(res?.payload?.data?.watemplates?.map((item: any) => ({ label: item?.name, value: item?.id })))
        }
    }, [])

    const getAllEmailTemplates = useCallback(async () => {
        const res: any = await dispatch(getEmailTemplates({type: "Marketing", belongs_to: user?.id }))
        if (res?.payload?.data) {
            setTemplates(res?.payload?.data?.emailtemplates?.map((item: any) => ({ label: item?.name, value: item?.id })))
        }
    }, [])

    const user = useSelector((state: RootState) => state.auth.user);

    const getAllSmsTemplates = useCallback(async () => {
        const res: any = await dispatch(getSmsTemplate({belongs_to: user?.id }))
        if (res?.payload?.success) {
            setTemplates(res?.payload?.data?.results?.map((item: any) => ({ label: item?.name, value: item?.id })))
        }
    }, [user])

    const getTemplates = useCallback(() => {
        if (sectionName == "EMAIL") {
            getAllEmailTemplates()
        }
        else if (sectionName == "SMS") {
            getAllSmsTemplates()
        } else if (sectionName == "WHATSAPP") {
            getAllWhatsAppRTemplates()
        }
    }, [getAllEmailTemplates, getAllSmsTemplates, getAllWhatsAppRTemplates, sectionName])

    useEffect(() => {
        getTemplates()
    }, [getTemplates])

    const handleSubmit = async () => {
        if(loading){
            return
        }
        if(!selectedTemplate){
            return toast.error("Please select template")
        }
        const body: any = {
            client_id: clientId,
            template_id: selectedTemplate,
            sendThrough: sectionName?.toLowerCase(),
            filter: {}
        }

        setLoading(true)
        
        if (selectedAge) {
            body["filter"]["fromAge"] = Number(selectedAge?.split("-")?.[0])
            body["filter"]["toAge"] = Number(selectedAge?.split("-")?.[1])
        }
        if (selectedGender) {
            body["filter"]["gender"] = selectedGender
        }
        const res: any = await dispatch(sendClientUserCommunication(body))
        
        if (res?.payload?.success) {
            toast.success("Communication sent successfully!.")
            setSelectedTemplate(null)
            setSelectedAge(null)
            setSelectedGender(null)
        } else {
            toast.error(res?.error?.message || "Failed to send")
        }
        setLoading(false)
    }


    const getAssociatedUsers = useCallback(
        async () => {
            try {
                let body: any = {
                    clientId: clientId,
                    count: 150,
                    page: 0,
                    searchText: searchUser,
                }

                if (selectedAge) {
                    let d = selectedAge?.split("-")
                    body["fromAge"] = Number(d?.[0])
                    body["toAge"] = Number(d?.[1])
                }

                if (selectedGender) {
                    body["gender"] = selectedGender
                }
                const res = (await dispatch(getAssociateUsersApi(body))) as any;
                console.log("API Response: ", res);

                setUsers(res?.payload?.data?.clientUsers);
                setTotalUsers(res?.payload?.data?.clientUsersCount);
            } catch (error) {
                console.error("Error fetching associated users:", error);
            }
        },
        [dispatch, searchUser, clientId, selectedAge, selectedGender]
    );

    useEffect(() => {
        getAssociatedUsers()
    }, [getAssociatedUsers])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-capitalize">
                    Send {sectionName?.toLowerCase()} Communications
                </h5>
                {/* {sectionName == "EMAIL" ? <Button
                    onClick={() => {
                        setShowAddTemplateForm(true)
                    }}
                    variant="outline-dark"
                >Add Template</Button> : <></>} */}
            </div>
            <Form className="border rounded-sm p-3 mt-3">
                <Form.Group>
                    <Form.Label>Select Template</Form.Label>
                    <br />
                    <Select
                        // mode="multiple"
                        showSearch
                        allowClear
                        value={selectedTemplate}
                        placeholder="Select template"
                        onChange={(e: any) => setSelectedTemplate(e)}
                        options={templates}
                        className="delta-select select-filter w-100"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Gender</Form.Label>
                    <br />
                    <Select
                        // mode="multiple"
                        showSearch
                        allowClear
                        value={selectedGender}
                        placeholder="Select Gender"
                        onChange={(e: any) => setSelectedGender(e)}
                        options={[
                            { option: 'Male', value: "male" },
                            { option: 'Female', value: "female" },
                        ]}
                        className="delta-select select-filter w-100"
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Age</Form.Label>
                    <br />
                    <Select
                        // mode="multiple"
                        showSearch
                        allowClear
                        value={selectedAge}
                        placeholder="Select Age"
                        onChange={(e: any) => {
                            setSelectedAge(e)
                        }}
                        options={[
                            { option: 'O to 20', value: '0-20' },
                            { option: '2O to 30', value: '20-30' },
                            { option: '3O to 60', value: '30-60' },
                            { option: '6O to 100', value: '60-100' },
                            { option: 'O to 100', value: '0-100' },
                        ]}
                        className="delta-select select-filter w-100"
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Select Users ({totalUsers})</Form.Label>
                    <br />
                    {/* <Select
                        mode="multiple"
                        showSearch
                        searchValue={searchUser}
                        onSearch={(e: any) => setSearchUser(e)}
                        value={selectedUser}
                        placeholder="Select users"
                        onChange={(e: any) => setSelectedUser(e)}
                        options={users}
                        className="delta-select select-filter w-100"
                        filterOption={() => true}
                    /> */}

                    <CustomTable
                        columns={columns}
                        data={users}
                        showingName=""
                        isLoading={loading}
                        total={totalUsers}
                    />
                </Form.Group>

                <div className="mt-3 d-flex justify-content-end align-items-center">
                    <Button
                    onClick={handleSubmit}
                    className="">{ loading ? 'Loading' : 'Send'}</Button>
                </div>
            </Form>

            {showAddTemplateForm && <EmailTemplateEditor
                isEdit={false}
                onClose={() => {
                    setShowAddTemplateForm(false)
                }} template={null}
                onSuccess={() => {
                    setShowAddTemplateForm(false)
                    getTemplates()
                }}
            />}
        </>
    )
}

export default SendCommunicationForm