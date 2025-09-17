import React, { useEffect } from 'react'
import PackagesStyled from './Packages.styled'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { getAllClientPackagesAPI } from '@/redux/slices/clientPackages/clientPackagesService'
import useClientLinkableId from '@/hooks/auth/useClientLinkableId'
import toast from 'react-hot-toast'
import CustomTable from '@/components/custom/Table/CustomTable/CustomTable'
import { parseAllDateFormats } from '@/lib/common'

const Packages = () => {
    const dispatch: AppDispatch = useDispatch();
    const { linkableId } = useClientLinkableId()
    const { error, loading, packages, totalPackages } = useSelector((state: RootState) => state.clientPackages.clientPackages)
    const [pagination, setPagination] = React.useState({
        page: 1,
        count: 10
    })

    useEffect(() => {
        const getPackagesRequest = dispatch(getAllClientPackagesAPI({ clientId: linkableId, page: pagination.page, size: pagination.count }))

        return () => {
            getPackagesRequest.abort()
        }
    }, [pagination, dispatch])

    useEffect(() => {
        if (error) {
            toast.error(error ?? "Error fetching packages")
        }
    }, [error])


    const tableData = React.useMemo(() => {
        return [
            { label: "ID", dataIndex: "id", key: "id" },
            { label: "Client ID", dataIndex: "client_id", key: "client_id" },
            { label: "Client Name", dataIndex: ["clientDetails", "name"], key: "clientDetails.name" },
            { label: "Policy No", dataIndex: "policy_no", key: "policy_no" },
            { label: "User ID", dataIndex: "user_id", key: "user_id" },
            { label: "Email", dataIndex: "email", key: "email" },
            { label: "Phone", dataIndex: "phone", key: "phone" },
            { label: "Name", dataIndex: "name", key: "name" },
            { label: "Age", dataIndex: "age", key: "age" },
            { label: "Gender", dataIndex: "gender", key: "gender" },
            { label: "Created At", dataIndex: "created_at", key: "created_at", render: (value: string) => parseAllDateFormats(value) },
        ]
    }, [packages])


    return (
        <PackagesStyled>
            <h4>Packages Requested</h4>
            <CustomTable
                columns={tableData}
                data={packages}
                showingName='Client Packages'
                isLoading={loading}
                page={pagination.page}
                pageSize={pagination.count}
                pagination={true}
                onPageChange={(page, count) => {
                    setPagination({ page: page, count: count })
                }}
                total={totalPackages || 0}
            />
        </PackagesStyled>
    )
}

export default Packages