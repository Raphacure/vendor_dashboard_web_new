import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import * as XLSX from "xlsx";
import { toast } from 'react-hot-toast';
import { Table } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router';
import { clientUsersBulkUpload } from '../../../redux/slices/Clients/ClientsService';
import { IndexsStyled } from './Index.styled';

const BulkUploadClientUsers = ({ id, onSuccess }: { id: string, onSuccess: () => void }) => {
    const [extractedData, setExtractedData] = useState<any>([])
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const columns = [
        {
            title: "First Name",
            width: 170,
            dataIndex: "first_name",
            key: "1",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Last Name",
            width: 170,
            dataIndex: "last_name",
            key: "2",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Email",
            width: 150,
            dataIndex: "email",
            key: "3",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Secondary Email",
            width: 150,
            dataIndex: "secondary_email",
            key: "4",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Phone",
            width: 150,
            dataIndex: "phone",
            key: "5",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Secondary Phone",
            width: 150,
            dataIndex: "secondary_phone",
            key: "6",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "gender",
            width: 150,
            dataIndex: "gender",
            key: "7",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "unit",
            width: 150,
            dataIndex: "unit",
            key: "8",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "cost",
            width: 250,
            dataIndex: "cost",
            key: "9",
            render: (item: any, record: any) => {
                return <div className='p-2'>{Number.isNaN(item) ?? ""}</div>
            }
        },
        {
            title: "Counter Type",
            width: 250,
            dataIndex: "counter_type",
            key: "10",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Employee Id",
            width: 150,
            dataIndex: "employee_id",
            key: "11",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "DOB",
            width: 150,
            dataIndex: "dob",
            key: "12",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item?.toString()}</div>
            }
        },
        {
            title: "Active Status",
            width: 150,
            dataIndex: "active_status",
            key: "13",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Age",
            width: 150,
            dataIndex: "age",
            key: "14",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item}</div>
            }
        },
        {
            title: "Designation",
            width: 150,
            dataIndex: "designation",
            key: "15",
            render: (item: any, record: any) => {
                return <div className='p-2'>{item?.toString()}</div>
            }
        },
    ] as any;

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
                        return ({
                            first_name: data?.first_name?.trim() ?? "",
                            last_name: data?.last_name?.trim() ?? null,
                            email: data?.email?.trim() ?? "",
                            secondary_email: data?.secondary_email?.trim() ?? "",
                            phone: data?.phone?.trim() ?? "",
                            secondary_phone: data?.secondary_phone?.trim() ?? "",
                            gender: data?.gender?.trim() ?? null,
                            employee_id: data?.employee_id?.trim() ?? null,
                            dob: formatDate(data?.dob),
                            active_status: data?.active_status?.trim() ?? null,
                            age: data?.age ? Number(data?.age) : null,
                            designation: data?.designation?.trim() ?? null,
                        })
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

    const onChange = (val: any, val1: any) => {
        setPageSize(val1);
        setCurrentPage(val);
    };

    const handleSubmit = async () => {

        const res: any = await dispatch(clientUsersBulkUpload({ id, data: extractedData }))

        if (res?.payload?.success) {
            toast.success(res?.payload?.data?.message ?? 'Client Users Created successfully!.')
            setExtractedData([])
            onSuccess()
        } else {
            toast.error(res?.error?.message || res?.payload?.message || 'Client Users failed to create!.')
        }
    }


    return (
        <div className='mt-6'>
            <h6 className='mb-3'>Bulk Upload Client Users</h6>
            <IndexsStyled>
                {Array.isArray(extractedData) && extractedData?.length == 0 && <div className='d-flex justify-content-center align-items-center flex-column bulkUpload '>

                    <div className='d-flex justify-content-center align-items-center flex-column mb-3'>
                        <input
                            onChange={handleBulkUpload}
                            type="file" name="" id=""
                            className='p-3 '
                        />

                    </div>

                    {/* The file should include columns for Name, Phone, Email, Employee ID, Age, Gender, Relation, Address, and Remarks. */}

                    <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                        <p>
                            Fill up this template and upload it to add multiple client users at once.
                        </p>

                        <CSVLink
                            data={[{
                                first_name: "",
                                last_name: "",
                                email: "",
                                secondary_email: "",
                                phone: "",
                                secondary_phone: "",
                                gender: "",
                                employee_id: "",
                                dob: "",
                                active_status: "",
                                age: "",
                                designation: "",
                            }]}
                            filename={"cleint_users_bulk_upload.csv"}
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
                            <h6>Uploaded Client Users Details</h6>
                            <Button variant='outline-info' onClick={() => {
                                setExtractedData([])
                            }}>Clear</Button>
                        </div>

                        <BulkUploadStyled>
                            <div className='w-100 overflow-auto'>
                                <Table
                                className='overflow-x-auto'
                                    columns={columns}
                                    dataSource={extractedData ?? []}
                                    pagination={{
                                        current: currentPage,
                                        pageSize: pageSize,
                                        onChange: onChange,
                                        total: extractedData?.length,
                                        showSizeChanger: true,
                                        pageSizeOptions: ["10", "20", "50", "100"],
                                    }}
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
            </IndexsStyled>
        </div>
    )
}

export default BulkUploadClientUsers

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

    .ant-table {
        overflow-x: auto;
    }
    
    .td {
        padding: 10px 5px;
        min-height: 4rem;
        max-height: 100px;
        -webkit-box-orient: vertical;
        overflow: auto;
        -webkit-line-clamp: 1;
        }
`