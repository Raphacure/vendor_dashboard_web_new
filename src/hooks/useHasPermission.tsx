import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';

const useHasPermission = () => {

  const { user } = useSelector((reduxState: any) => reduxState.auth);

  const onlyForSuperAdmin = ["reset-assign-vendor", "can-view-claimed-incentives", "can-view-incentives-type", "can-view-dashboard-users-tab"];
    const isAllowed = useCallback(
        (action: string) => {

            if (onlyForSuperAdmin.includes(action)) {
                return user?.roles?.find((u: any) => u?.subRole == "superAdmin");
            }
            return true;
        },
        [user]
    );

    const isSuperAdmin = useCallback(() => {
        return user?.roles?.find((u: any) => u?.subRole == "superAdmin");
    },[user])

    return {
        isAllowed,
        isSuperAdmin
    }
    

}

export default useHasPermission