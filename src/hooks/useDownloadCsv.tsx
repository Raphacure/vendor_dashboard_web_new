import React, { useCallback, useState } from 'react'
import { getToken } from '@/lib/helpers';
import { SERVER_IP } from '@/lib/config';


type sectionNameDto = "ASSETS" | "INVENTORY" | "camp"
type prop = {
    sectionName: sectionNameDto
}
const useDownloadCsv = ({ sectionName }: prop) => {

    const pathHelper = {
        "ASSETS": 'assets/download',
        "INVENTORY": "inventory/download",
        "camp":"booking/download-bookings?marketplace_name=raphacure"
    }
    const [isLoading, setIsLoading] = useState(false);

    const downloadCsv = useCallback(({ body }: { body: any }) => {
        setIsLoading(false)
        fetch(`${SERVER_IP}/api/v1/${pathHelper?.[sectionName]}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                Accept: "text/csv",
                "Content-Type": "application/json",
                authorization: "Bearer " + getToken(),
            },
        })
            .then((response) => response.blob())
            .then((res) => {
                console.log(res);
                // Create a link element
                const url: any = window.URL.createObjectURL(res);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${sectionName?.toLowerCase()}.csv`
                document.body.appendChild(a);
                a.click();

                // Clean up
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
        setIsLoading(false);
    },[])

    return {
        downloadCsv,
        isLoading
    }
}

export default useDownloadCsv