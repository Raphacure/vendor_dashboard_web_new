import { useCallback, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import * as XLSX from "xlsx";
import { toast } from 'react-hot-toast';
import { Select, Table } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { bulkUploadClient,  getAllClients } from '../../redux/slices/Clients/ClientsService';

const BulkUploadClient = () => {
    const { allClients } = useSelector((state: any) => state?.clients);

    const columnsKey = [
        "name",
        "address",
        "state",
        "city",
        "zip",
        "logo_url",
        "user_max",
        "dependent_per_user",
        "booking_key",
        "contract_start",
        "contract_end",
    ]
    const [extractedData, setExtractedData] = useState<any>([])
    const [isValid, setIsValid] = useState(false)
    const [parentClientId, setParentClientId] = useState("")
    const [clientSearch, setClientSearch] = useState("")

    const dispatch = useDispatch()

    const clientApiCall = useCallback(() => {
        // const body: any = {
        //     page: 0, count: 100
        // }

        // if (clientSearch) {
        //     body.searchText = clientSearch
        // }
        // dispatch(getAllClients(body));
    }, [clientSearch, dispatch])

    useEffect(() => {
        clientApiCall()
    }, [clientApiCall])

    const allowedTypes = ["name", "booking_key"]
    const validate = (row: any, key?: any) => {
        if (key == "contract_end" || key == "contract_start") {
            if (row?.[key]?.split("-")?.length != 3) {
                return { valid: row?.[key], message: `${key} must be of the formate YYYY-MM-DD!.` }
            }
        }
        if (allowedTypes?.includes(key)) {
            return { valid: row?.[key], message: `${key} is required!.` }
        }
        return { message: "", valid: true }
    }


    const columns = [
        {
            title: "Name",
            width: 170,
            dataIndex: "name",
            key: "1",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'name');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Address",
            width: 170,
            dataIndex: "address",
            key: "2",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'address');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "State",
            width: 170,
            dataIndex: "state",
            key: "2",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'state');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "City",
            width: 150,
            dataIndex: "city",
            key: "3",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'city');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Zip",
            width: 150,
            dataIndex: "zip",
            key: "4",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'zip');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Logo",
            width: 150,
            dataIndex: "logo_url",
            key: "5",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'logo_url');

                if (item) {
                    return <img src={item} alt="img" className='' />
                }
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "User Max",
            width: 150,
            dataIndex: "user_max",
            key: "6",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'user_max');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Email",
            width: 150,
            dataIndex: "email",
            key: "7",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'email');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Dependent Per User",
            width: 150,
            dataIndex: "dependent_per_user",
            key: "8",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'dependent_per_user');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Booking Key",
            width: 250,
            dataIndex: "booking_key",
            key: "9",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'booking_key');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Contract Start",
            width: 250,
            dataIndex: "contract_start",
            key: "10",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'contract_start');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Contract End",
            width: 150,
            dataIndex: "contract_end",
            key: "11",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'contract_end');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        }
    ] as any;

    const handleBulkUpload = async (e: any) => {
        const file = e?.target?.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = (e) => {
                const data = e.target?.result;
                if (data) {
                    const workbook = XLSX.read(data, { type: "binary" });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });
                    let valid: any = true;

                    const modifiedData = jsonData?.map((data: any) => {
                        columnsKey?.forEach((key) => {
                            const checked = validate(data, key)?.valid

                            if (!checked) {
                                valid = false
                            }
                        })
                        return {
                            name: data?.name?.trim() || null,
                            address: data?.address?.trim() || null,
                            state: data?.state?.trim() || null,
                            city: data?.city?.trim() || null,
                            zip: data?.zip?.trim() || null,
                            logo_url: data?.logo_url?.trim() || null,
                            user_max: Number(data?.user_max?.trim()) || null,
                            dependent_per_user: Number(data?.dependent_per_user?.trim()) || null,
                            booking_key: data?.booking_key?.trim() || null,
                            contract_start: formatDate(data?.contract_start), contract_end: formatDate(data?.contract_end)
                        }
                    })

                    setIsValid(valid)
                    setExtractedData(modifiedData as any[]);

                    if (valid) {
                        toast.success(`File uploaded successfully`);
                    } else {
                        toast.error(`Error found please resolve!.`);
                    }

                }
            };
        }
    };


    const handleSubmit = async () => {
        // const res: any = await dispatch(bulkUploadClient({ data: { clients: extractedData }, id: parentClientId }))
        // if (res?.payload?.success) {
        //     setExtractedData([])
        //     toast.success('Clients Created successfully!.')
        // } else {
        //     toast.error(res?.error?.message || res?.payload?.message || 'Something went wrong!.')
        // }
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        // Replace different separators with a standard one
        const parts = dateString.split(/[\/\-]/);
        if (parts.length !== 3) return dateString;

        let [day, month, year] = parts;

        if (year.length === 2) {
            year = parseInt(year) < 26 ? `20${year}` : `19${year}`;
        }

        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };


    return (
        <div>
            <h5>Bulk Upload Clients</h5>
            {/* <IndexsStyled> */}

            <div className='my-3'>
                <span>Parent Client</span>
                <Select
                    allowClear
                    className='w-100'
                    placeholder="Select Parent Client"
                    onChange={(e) => {
                        setParentClientId(e)
                    }}
                    onSearch={(e) => {
                        setClientSearch(e)
                    }}
                    options={allClients?.data?.clients?.map((client: any) => ({ label: client?.name, value: client?.id }))}
                    searchValue={clientSearch}
                    showSearch
                    filterOption={(input: any, option: any) =>
                        option?.label?.toLowerCase().includes(input.toLowerCase())
                    }
                />
            </div>

            <>
                {
                    parentClientId ?
                        <>
                            {Array.isArray(extractedData) && extractedData?.length == 0 && <div className='d-flex justify-content-center align-items-center flex-column bulkUpload '>

                                <div className='mt-3 d-flex justify-content-center align-items-center flex-column mb-3'>
                                    <p className='text-center'>
                                        Upload an Excel file containing multiple clients details. File should include columns for {allowedTypes?.toString()}
                                    </p>
                                    <input
                                        onChange={handleBulkUpload}
                                        type="file" name="" id=""
                                    />

                                </div>

                                {/* The file should include columns for Name, Phone, Email, Employee ID, Age, Gender, Relation, Address, and Remarks. */}

                                <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                                    <p>
                                        Fill up this template and upload it to add multiple client at once.
                                    </p>

                                    <CSVLink
                                        data={[{
                                            name: "",
                                            address: "",
                                            state: "",
                                            city: "",
                                            zip: "",
                                            logo_url: "",
                                            user_max: "",
                                            dependent_per_user: "",
                                            booking_key: "",
                                            contract_start: "",
                                            contract_end: "",
                                        }]}
                                        filename={"clients_bulk_upload.csv"}
                                        target="_blank"
                                    >
                                        <Button className='d-flex justify-content-center align-items-center'>
                                            <FaDownload className='mr-3' />
                                            Download Template
                                        </Button>
                                    </CSVLink>

                                </div>

                            </div>}

                            {
                                Array.isArray(extractedData) && extractedData?.length > 0 && <div>

                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h5>Uploaded Client Details</h5>
                                        <Button variant='outline-info' onClick={() => {
                                            setExtractedData([])
                                        }}>Clear</Button>
                                    </div>

                                    <BulkUploadStyled>
                                        <div className='w-100 overflow-auto'>
                                            <Table
                                                columns={columns}
                                                dataSource={extractedData ?? []}
                                                pagination={false}
                                            />
                                        </div>
                                    </BulkUploadStyled>

                                    {isValid ?
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Button onClick={handleSubmit} >Submit</Button>
                                        </div>
                                        :
                                        <div className='text-danger text-center pt-3 pb-3'>
                                            Uploaded data is not correct
                                        </div>
                                    }
                                </div>
                            }
                        </> : <></>
                }
            </>

            {/* </IndexsStyled> */}

        </div>
    )
}

export default BulkUploadClient

export const BulkUploadStyled = styled.div`
.ant-table-tbody .ant-table-cell {
    padding: 0px !important;
  }
  .error {
    color: red;
    border:1px solid red;
    color: red;
    min-height: 4rem;
    }
    
    .td {
        padding: 10px 5px;
        min-height: 4rem;
        }

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`