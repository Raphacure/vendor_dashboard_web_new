import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import * as XLSX from "xlsx";
import { toast } from 'react-hot-toast';
import { Table } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import { bulkUploadClientBooking } from '../../redux/slices/Clients/ClientsService';

const BulkUploadBooking = () => {

    const columnsKey = ["name",
        "client_id",
        "employee_id",
        "first_name",
        "last_name",
        "age",
        "gender",
        "phone",
        "email",
        "collection_1_date",
        "package_code",
        "notes",
        "comments",
        "status",
    ]
    const [extractedData, setExtractedData] = useState<any>([])
    const [isValid, setIsValid] = useState(false)

    const allowedTypes = ["client_id", "first_name", "collection_1_date", "package_code"]
    const validate = (row: any, key?: any) => {
        if(allowedTypes?.includes(key)){
            return {valid: row?.[key], message: `${key} is required!.`}
        }
        return {message: "", valid: true}
    }

    const columns = [
        {
            title: "Client Id",
            width: 170,
            dataIndex: "client_id",
            key: "1",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'client_id');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Employee Id",
            width: 170,
            dataIndex: "employee_id",
            key: "2",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'employee_id');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "First Name",
            width: 170,
            dataIndex: "first_name",
            key: "2",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'first_name');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Last Name",
            width: 150,
            dataIndex: "last_name",
            key: "3",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'last_name');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Age",
            width: 150,
            dataIndex: "age",
            key: "4",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'age');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Gender",
            width: 150,
            dataIndex: "gender",
            key: "5",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'gender');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Phone",
            width: 150,
            dataIndex: "phone",
            key: "6",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'phone');
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
            title: "Collection 1 Date",
            width: 150,
            dataIndex: "collection_1_date",
            key: "8",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'collection_1_date');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Package Code",
            width: 250,
            dataIndex: "package_code",
            key: "9",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'package_code');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Note",
            width: 250,
            dataIndex: "notes",
            key: "10",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'notes');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Comments",
            width: 150,
            dataIndex: "comments",
            key: "11",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'comments');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
        {
            title: "Status",
            width: 150,
            dataIndex: "status",
            key: "12",
            render: (item: any, record: any) => {
                const { message, valid } = validate(record, 'status');
                return <div title={message ?? ""} className={` td ${!valid ? 'error' : ''}`} >{item}</div>
            }
        },
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
                        return data
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

    const dispatch = useDispatch()

    const handleSubmit = async () => {
        const res: any = await dispatch(bulkUploadClientBooking({data: extractedData}))
        if (res?.payload?.success) {
            setExtractedData([])
            toast.success('Clients bookings Created successfully!.')
        } else {
            toast.error(res?.error?.message || res?.payload?.message || 'Something went wrong!.')
        }
    }


    return (
        <div>
            <h5>Bulk Upload Offline Bookings</h5>
            {/* <IndexsStyled> */}
            {Array.isArray(extractedData) && extractedData?.length == 0 && <div className='d-flex justify-content-center align-items-center flex-column bulkUpload '>

                <div className='mt-3 d-flex justify-content-center align-items-center flex-column mb-3'>
                    <p className='text-center'>
                        Upload an Excel file containing multiple clients booking details. File should include columns for client_id, first_name, phone, collection_1_date and package_code
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
                            client_id: "",
                            employee_id: "",
                            first_name: "",
                            last_name: "",
                            age: "",
                            gender: "",
                            phone: "",
                            email: "",
                            collection_1_date: "",
                            package_code: "",
                            notes: "",
                            comments: "",
                            status: ""
                        }]}
                        filename={"clients_booking_bulk_upload.csv"}
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
                        <h5>Uploaded Vendor Details</h5>
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
            {/* </IndexsStyled> */}

        </div>
    )
}

export default BulkUploadBooking

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
`